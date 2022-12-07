using PizzariaDB.Models;

namespace PizzariaProject.Repository
{
    public interface IOrderRepository
    {
        public IEnumerable<Order> GetAll();
        Order GetOrderById(int id);
        public int Add(Order newOrder);
        int Remove(int idToRemove);
        bool Update(Order orderToUpdate);
    }
}
