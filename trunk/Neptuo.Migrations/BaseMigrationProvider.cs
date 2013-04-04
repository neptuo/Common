﻿using Neptuo.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Migrations
{
    public abstract class BaseMigrationProvider<T> : IMigrationProvider
        where T : BaseMigrationService
    {
        protected bool MigrationsFound { get; private set; }
        protected IMigrationActivator Activator { get; private set; }
        protected SortedList<DateTime, Type> Migrations { get; private set; }
        public DateTime Timestamp { get; protected set; }

        private DateTime? target = null;

        public BaseMigrationProvider(IMigrationActivator activator)
        {
            Activator = activator;
            Migrations = new SortedList<DateTime, Type>();
        }

        public IMigrationService FindUpMigrations()
        {
            return FindUpMigrations(DateTime.Now);
        }

        public IMigrationService FindUpMigrations(DateTime target)
        {
            if (!MigrationsFound)
            {
                RegisterMigrations();
                MigrationsFound = true;
            }
            T service = CreateService();
            Timestamp = LoadLastTimestamp();
            RegisterActiveUpMigrations(service, target);

            if (service.HasMigrations)
            {
                this.target = target;
                service.OnExecuted += OnExecuted;
            }
            else
            {
                UpdateLastTimestamp(target);
            }

            return service;
        }

        public IMigrationService FindDownMigrations(DateTime target)
        {
            if (!MigrationsFound)
            {
                RegisterMigrations();
                MigrationsFound = true;
            }
            T service = CreateService();
            Timestamp = LoadLastTimestamp();
            RegisterActiveDownMigrations(service, target);

            if (service.HasMigrations)
            {
                this.target = target;
                service.OnExecuted += OnExecuted;
            }
            else
            {
                UpdateLastTimestamp(target);
            }

            return service;
        }

        protected virtual void OnExecuted(object sender, MigrationServiceExecutedEventArgs e)
        {
            if (e.Success)
            {
                UpdateLastTimestamp(target.Value);
                target = null;
                ((T)sender).OnExecuted -= OnExecuted;
            }
        }

        private void UpdateLastTimestamp(DateTime target)
        {
            Timestamp = target;
            SaveLastTimestamp(Timestamp);
        }

        protected virtual IEnumerable<Type> FindMigrationTypes()
        {
            foreach (Type type in Assembly.GetExecutingAssembly().GetTypes())
                yield return type;

            foreach (Assembly assembly in AppDomain.CurrentDomain.GetAssemblies())
            {
                if (assembly.GetCustomAttributes(typeof(MigrationsAttribute), true).Length == 1)
                {
                    Type[] types = assembly.GetTypes();
                    foreach (Type type in types)
                        yield return type;
                }
            }
        }

        protected void RegisterMigrations()
        {
            foreach (Type type in FindMigrationTypes())
            {
                if (type.GetInterfaces().Contains(typeof(IMigration)) && !type.IsAbstract && !type.IsInterface)
                    RegisterMigration(type);
            }
        }

        protected virtual void RegisterMigration(Type type)
        {
            Migrations.Add(GetMigrationDateTime(type), type);
        }

        protected virtual void RegisterActiveUpMigrations(T service, DateTime target)
        {
            foreach (KeyValuePair<DateTime, Type> migration in Migrations)
            {
                if (migration.Key > Timestamp && migration.Key < target)
                    RegisterMigrationToService(service, migration.Key, migration.Value);
            }
        }

        protected virtual void RegisterActiveDownMigrations(T service, DateTime target)
        {
            foreach (KeyValuePair<DateTime, Type> migration in Migrations)
            {
                if (migration.Key > target && migration.Key < Timestamp)
                    RegisterMigrationToService(service, migration.Key, migration.Value);
            }
        }

        protected virtual DateTime GetMigrationDateTime(Type migrationType)
        {
            MigrationAttribute attribute = ReflectionHelper.GetAttribute<MigrationAttribute>(migrationType);
            if (attribute != null)
                return attribute.Timestamp;

            throw new MigrationException("Can't find timestamp in migration!");
        }

        protected abstract T CreateService();

        protected abstract void RegisterMigrationToService(T service, DateTime dateTime, Type migration);

        protected abstract DateTime LoadLastTimestamp();

        protected abstract void SaveLastTimestamp(DateTime lastTimestamp);
    }
}
