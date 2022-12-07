using Microsoft.AspNetCore.Mvc;
using PizzariaDB.Models;
using PizzariaProject.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PizzariaProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzariaController : ControllerBase
    {
        private PizzariaRepository _PizzariaRepository;
        public PizzariaController(PizzariaRepository pizzariaRepository)
        {
            this._PizzariaRepository = pizzariaRepository;
        }
        // GET: api/<PizzariasController>
        [HttpGet]
        public IEnumerable<Pizzaria> Get()
        {
            var pizzarias = _PizzariaRepository.GetAll();
            return pizzarias;
        }

        // GET api/<PizzariasController>/5
        [HttpGet("{id}")]
        public Pizzaria Get(int id)
        {
            return _PizzariaRepository.GetPizzariaById(id);
        }

        // POST api/<PizzariasController>
        [HttpPost]
        public void Post(Pizzaria pizzaria)
        {
           _PizzariaRepository.Add(pizzaria);
        }

        // PUT api/<PizzariasController>/5
        [HttpPut("{id}")]
        public void Put(Pizzaria pizzaria)
        {
            _PizzariaRepository.Update(pizzaria);
        }

        // DELETE api/<PizzariasController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _PizzariaRepository.Remove(id);
        }
    }
}
