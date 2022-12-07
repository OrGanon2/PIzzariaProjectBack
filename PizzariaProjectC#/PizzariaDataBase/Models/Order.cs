using System;
using System.Collections.Generic;

namespace PizzariaDB.Models
{
    public partial class Order
    {
        public int? UserId { get; set; }
        public int OrderId { get; set; }
        public string? Pizza { get; set; }
        public int? PizzaSize { get; set; }
        public string? PizzaToppings { get; set; }
        public DateTime? DateTime { get; set; }
        public int? Price { get; set; }
        public int? PizzariaId { get; set; }

        public virtual Pizzaria? Pizzaria { get; set; }
        public virtual User? User { get; set; }
    }
}
