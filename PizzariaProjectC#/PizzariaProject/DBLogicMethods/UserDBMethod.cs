using PizzariaDB.Models;

namespace PizzariaProject.Logic
{
    public class UserDBMethod 
    {
       
        public UserDBMethod()
        {

        }
        public  static void CreateAccount(User newUser)
        {

            using (var db = new PizzariaContext())
            {
                db.Users.Add(newUser);
                db.SaveChanges();
            }
        }
        public static void UpdateAccount(User userToUpdate)
        {

            using (var db = new PizzariaContext())
            {
                User? user = db.Users.Where(u => u.Id == userToUpdate.Id).FirstOrDefault();
                user.FullName = userToUpdate.FullName;
                user.UserName = userToUpdate.UserName;
                user.PasswordHash = userToUpdate.PasswordHash;
                user.PasswordSalt = userToUpdate.PasswordSalt;
                user.Email = userToUpdate.Email;
                user.PhoneNumber = userToUpdate.PhoneNumber;
                user.City = userToUpdate.City;
                user.Address = userToUpdate.Address;
                db.SaveChanges();
            }
        }

        public static void DeleteAccount(int? id)
        {
            using (var db = new PizzariaContext())
            {
                User user = db.Users.Where(u => u.Id == id).Select(u => u).First();
                db.Users.Remove(user);
                db.SaveChanges();
            }
        }


     
    }
}
