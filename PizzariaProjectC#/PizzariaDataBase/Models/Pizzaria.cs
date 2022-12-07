using System;
using System.Collections.Generic;

namespace PizzariaDB.Models
{
    public partial class Pizzaria
    {
        public Pizzaria()
        {
            Orders = new HashSet<Order>();
        }

        public int PizzariaId { get; set; }
        public string? City { get; set; }
        public string? Email { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
