using PizzariaDB.Models;
using PizzariaProject.DBLogicMethods;

namespace PizzariaProject.Repository
{
    public class PizzariaRepository : IPizzariaRepository
    {
        public PizzariaRepository()
        {
            using(var db = new PizzariaContext())
            {
                _Pizzaria = db.Pizzarias.ToList();
                countIndex = _Pizzaria.Count();

            }
        }
        private List<Pizzaria> _Pizzaria;
        private static int countIndex;
        public int Add(Pizzaria newPizzaria)
        {
            newPizzaria.PizzariaId = countIndex++;
            int returnIndex = -1;
            int indexFound = this._Pizzaria.FindIndex(x => x.PizzariaId == newPizzaria.PizzariaId);
            if (indexFound != 0)
            {
                newPizzaria.PizzariaId = countIndex;
                _Pizzaria.Add(newPizzaria);
                returnIndex = newPizzaria.PizzariaId;
                PizzariaDBMethod.CreatePizzaria(newPizzaria.PizzariaId, newPizzaria.City, newPizzaria.Email);
            }
            return returnIndex;
        }

        public IEnumerable<Pizzaria> GetAll()
        {
            return _Pizzaria;
        }

        public Pizzaria GetPizzariaById(int id)
        {
            Pizzaria pizzaria = this._Pizzaria.FirstOrDefault(x => x.PizzariaId == id);
            return pizzaria;
        }

        public int Remove(int idToRemove)
        {
            int indexFound = this._Pizzaria.FindIndex(x => x.PizzariaId == idToRemove);
            if (indexFound > 0)
            {
                this._Pizzaria.RemoveAt(indexFound);
                PizzariaDBMethod.DeletePizzaria(indexFound);

            }
            return indexFound;
        }

        public bool Update(Pizzaria PizzariaToUpdate)
        {
            int indexFound = this._Pizzaria.FindIndex(x => x.PizzariaId == PizzariaToUpdate.PizzariaId);
            if (indexFound > 0)
            {
                this._Pizzaria[indexFound] = PizzariaToUpdate;
                PizzariaDBMethod.UpdatePizzaria(PizzariaToUpdate.PizzariaId, PizzariaToUpdate.City, PizzariaToUpdate.Email);
                return true;
            }
            return false;
        }
    }
}
