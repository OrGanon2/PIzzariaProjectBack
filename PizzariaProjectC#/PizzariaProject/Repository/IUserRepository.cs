using PizzariaDB.Models;

namespace PizzariaProject.Repository
{
    public interface IUserRepository
    {
        public IEnumerable<User> GetAll();
        User GetUserById(int id);
        public int Add(User newUser);
        int Remove(int idToRemove);
        bool Update(User userToUpdate);
    }
}
    