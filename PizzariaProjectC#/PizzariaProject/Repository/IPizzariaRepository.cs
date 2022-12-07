using PizzariaDB.Models;
namespace PizzariaProject.Repository
{
    public interface IPizzariaRepository
    {
        public IEnumerable<Pizzaria> GetAll();
        Pizzaria GetPizzariaById(int id);
        public int Add(Pizzaria NewPizzaria);
        int Remove(int idToRemove);
        bool Update(Pizzaria pizzariaToUpdate);
    }
}
