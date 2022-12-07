using PizzariaDB.Models;
using PizzariaProject.DBLogicMethods;

namespace PizzariaProject.Repository
{
    public class OrderRepository : IOrderRepository
    {
        public OrderRepository()
        {
            using (var db = new PizzariaContext())
            {
               _order = db.Orders.ToList();
                countIndex = _order.Count();

            }
        }
        private List<Order> _order;
        private static int countIndex;
        public int Add(Order newOrder)
        {
            newOrder.OrderId = countIndex++;
            int returnIndex = -1;
            int indexFound = this._order.FindIndex(x => x.OrderId == newOrder.OrderId);
            if (indexFound != 0)
            {
                newOrder.OrderId = countIndex;
                _order.Add(newOrder);
                returnIndex = newOrder.OrderId;
                OrderDBmethod.CreateOrder(newOrder.OrderId, newOrder.Pizza, newOrder.PizzaSize, newOrder.PizzaToppings, newOrder.DateTime, newOrder.Price);
            }
            return returnIndex;
        }

        public IEnumerable<Order> GetAll()
        {
            return _order;
        }

        public Order GetOrderById(int id)
        {
            Order orders = this._order.FirstOrDefault(x => x.OrderId == id);
            return orders;
        }

        public int Remove(int idToRemove)
        {
            int indexFound = this._order.FindIndex(x => x.OrderId == idToRemove);
            if (indexFound > 0)
            {
                this._order.RemoveAt(indexFound);
                OrderDBmethod.DeleteOrder(indexFound);
            }
            return indexFound;
        }

        public bool Update(Order orderToUpdate)
        {
            int indexFound = this._order.FindIndex(x => x.OrderId == orderToUpdate.OrderId);
            if (indexFound > 0)
            {
                this._order[indexFound] = orderToUpdate;
                OrderDBmethod.UpdateOrder(orderToUpdate.OrderId, orderToUpdate.Pizza, orderToUpdate.PizzaSize, orderToUpdate.PizzaToppings, orderToUpdate.DateTime, orderToUpdate.Price);
                return true;
            }
            return false;
        }
    }
}
