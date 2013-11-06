﻿using Neptuo.Data;
using Neptuo.Commands.Handlers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole.Data.Commands.Handlers
{
    public class CreateProductCommandHandler : ICommandHandler<CreateProductCommand>
    {
        private IProductRepository products;

        public CreateProductCommandHandler(IProductRepository products)
        {
            this.products = products;
        }

        public void Handle(CreateProductCommand command)
        {
            Product product = products.Create();
            product.Name = command.Name;
            product.Price = command.Price;
            product.Category = command.Category;
            products.Insert(product);
        }
    }
}
