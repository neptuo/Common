﻿using Neptuo.Data.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole.Data
{
    public class DataContext : DbContext, IDbContext
    {
        public DbSet<ProductEntity> Products { get; set; }
        public DbSet<CategoryEntity> Categories { get; set; }

        static DataContext()
        {
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<DataContext>());
        }

        public DataContext()
            : base()
        { }
    }
}
