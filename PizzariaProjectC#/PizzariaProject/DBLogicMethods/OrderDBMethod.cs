using PizzariaDB.Models;

namespace PizzariaProject.DBLogicMethods
{
   

    public class OrderDBmethod
    {
        public static void CreateOrder(int orderId, string pizza, int? pizzaSize, string pizzaToppings, DateTime? datetime, int? price)
        {

            using (var db = new PizzariaContext())
            {

                Order newOrder = new Order()
                {
                    OrderId = orderId,
                    Pizza = pizza,
                    PizzaSize = pizzaSize,
                    PizzaToppings = pizzaToppings,
                    DateTime = datetime,
                    Price = price,
                };
                db.Orders.Add(newOrder);
                db.SaveChanges();
            }
        }
        public static void UpdateOrder(int orderId, string pizza, int? pizzaSize, string pizzaToppings, DateTime? datetime, int? price)
        {

            using (var db = new PizzariaContext())
            {
                
                Order newOrder = db.Orders.Where(u => u.OrderId == orderId).FirstOrDefault();
                newOrder.Pizza= pizza;
                newOrder.PizzaSize = pizzaSize;
                newOrder.PizzaToppings = pizzaToppings;
                newOrder.DateTime = datetime;
                newOrder.Price = price;
                db.SaveChanges();
            }
        }

        public static void DeleteOrder(int? id)
        {
            using (var db = new PizzariaContext())
            {
                Order order = db.Orders.Where(u => u.OrderId == id).Select(u => u).First();
                db.Orders.Remove(order);
                db.SaveChanges();
            }
        }


    }
}
