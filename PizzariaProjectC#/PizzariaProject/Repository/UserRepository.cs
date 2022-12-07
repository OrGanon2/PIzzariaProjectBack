using PizzariaDB.Models;
using PizzariaProject.Logic;
using System.Security.Cryptography;

//User newUser = db.Users.Where(u => u.Id == id).FirstOrDefault();

namespace PizzariaProject.Repository
{
    public class UserRepository : IUserRepository
    {

        private List<User> _users = new List<User> { };
        private static int countIndex;

        public UserRepository()
        {
            using (var db = new PizzariaContext())
            {

                _users = db.Users.Select(u=>u).ToList();
                countIndex= _users.Count();

                // data seeding
                /*CreatePasswordHash("venti123", out byte[] passwordHash, out byte[] passwordSalt);
                Add(new User()
                {
                    FullName = "venti kaka",
                    UserName = "venti123",
                    Email = "gg.gmail.com",
                    PhoneNumber = "100",
                    City = "Rishon",
                    Address = "Street 25",
                    PasswordHash = passwordHash,
                    PasswordSalt = passwordSalt
                });*/
            }
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public int Add(User newUser)
        {
            int isFound = this._users.FindIndex(x => x.UserName == newUser.UserName);

            if (isFound != -1)
                return -1;
            else
            {
                UserRepository.countIndex++;
                newUser.Id = countIndex;
                _users.Add(newUser);
                UserDBMethod.CreateAccount(newUser);
                return Convert.ToInt32(newUser.Id);
            }
        }

        public IEnumerable<User> GetAll()
        {
            return _users;
        }

        public User GetUserById(int id)
        {
            User users = this._users.FirstOrDefault(x => x.Id == id);
            return users;
        }

        public User GetUserByUsername(string username)
        {
            User user = this._users.FirstOrDefault(x => x.UserName == username);
            return user;
        }

        public int Remove(int idToRemove)
        {
            using (var db = new PizzariaContext())
            {           
                int indexFound = this._users.FindIndex(x => x.Id == idToRemove);
                    if (indexFound > 0)
                    {
                        this._users.RemoveAt(indexFound);
                        UserDBMethod.DeleteAccount(indexFound);                     
                    }
                return indexFound;
            }
        }

        public bool Update(User userToUpdate)
        {
            int indexFound = this._users.FindIndex(x => x.UserName == userToUpdate.UserName);

            if (indexFound > 0)
            {
                userToUpdate.Id = this._users[indexFound].Id;
                this._users[indexFound] = userToUpdate;
                UserDBMethod.UpdateAccount(userToUpdate);
                return true;
            }
            return false;
        }
    }
}
