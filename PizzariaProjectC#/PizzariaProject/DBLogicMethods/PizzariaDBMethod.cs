using PizzariaDB.Models;

namespace PizzariaProject.DBLogicMethods
{
    public class PizzariaDBMethod
    {
        public static void CreatePizzaria(int pizzariaId, string City, string Email)
        {

            using (var db = new PizzariaContext())
            {

                Pizzaria newPizzaria = new Pizzaria()
                {
                    PizzariaId = pizzariaId,
                    City = City,
                    Email = Email,
                };
                db.Pizzarias.Add(newPizzaria);
                db.SaveChanges();
            }
        }
        public static void UpdatePizzaria(int pizzariaId, string City, string Email)
        {

            using (var db = new PizzariaContext())
            {
                Pizzaria newPizzarias= db.Pizzarias.Where(u => u.PizzariaId == pizzariaId).FirstOrDefault();
                newPizzarias.City = City;
                newPizzarias.Email = Email;

            }
        }

     
        public static void DeletePizzaria(int pizzariaId)
        {
            using (var db = new PizzariaContext())
            {
                Pizzaria tempPizzaria = db.Pizzarias.Where(u => u.PizzariaId == pizzariaId).Select(u => u).First();
                db.Pizzarias.Remove(tempPizzaria);
            }
        }
    }
}
