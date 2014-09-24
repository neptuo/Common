﻿using Neptuo.ComponentModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Data.Entity
{
    public class DbContextUnitOfWork : DisposableBase, IUnitOfWork
    {
        protected DbContextTransaction Transaction { get; private set; }
        protected DbContext DbContext { get; private set; }

        public DbContextUnitOfWork(DbContext dbContext)
        {
            DbContext = dbContext;
            Transaction = DbContext.Database.BeginTransaction();
        }

        public void SaveChanges()
        {
            Transaction.Commit();
        }

        protected override void DisposeManagedResources()
        {
            base.DisposeManagedResources();
            Transaction.Dispose();
        }
    }
}
