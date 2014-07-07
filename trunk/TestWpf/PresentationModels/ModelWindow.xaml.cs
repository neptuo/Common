﻿using Neptuo.PresentationModels.TypeModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace TestWpf.PresentationModels
{
    /// <summary>
    /// Interaction logic for ModelWindow.xaml
    /// </summary>
    public partial class ModelWindow : Window
    {
        public ModelWindow()
        {
            InitializeComponent();
            DataContext = new ModelDefinitionViewModel(new ReflectionModelDefinitionFactory(new MetadataReaderService()).Create<Person>());
        }
    }
}
