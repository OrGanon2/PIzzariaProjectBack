using Microsoft.AspNetCore.Mvc;
using PizzariaDB.Models;
using PizzariaProject.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PizzariaProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private OrderRepository _orderRepository;
        public OrdersController(OrderRepository orderRepository)
        {
            this._orderRepository = orderRepository;
        }
        // GET: api/<OrdersController>
        [HttpGet]
        public IEnumerable<Order> Get()
        {
            var orders = _orderRepository.GetAll();
            return orders;
        }

        // GET api/<OrdersController>/5
        [HttpGet("{id}")]
        public Order Get(int id)
        {
            return _orderRepository.GetOrderById(id);
        }

        // POST api/<OrdersController>
        [HttpPost]
        public void Post([FromBody] Order order)
        {
            _orderRepository.Add(order);
        }

        // PUT api/<OrdersController>/5
        [HttpPut("{id}")]
        public void Put(Order order)
        {
            _orderRepository.Update(order);
        }

        // DELETE api/<OrdersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _orderRepository.Remove(id);
        }
    }
}
