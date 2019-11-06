using System.Collections.Generic;
using System.Threading.Tasks;
using Cars.Application.Managers.Interfaces;
using Cars.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace Cars.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly ICarManager _carManager;

        public CarsController(ICarManager carManager)
        {
            _carManager = carManager;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarSummary>>> GetAll()
        {
            return Ok(await _carManager.GetAllCarsAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CarDetail>> GetCar(int id)
        {
            return Ok(await _carManager.GetCarAsync(id));
        }

        [HttpPost]
        public async Task<ActionResult<CarSummary>> CreateCar([FromBody] CarDetail car)
        {
            var carSummary = await _carManager.CreateCarAsync(car);
            return CreatedAtAction("GetCar", new { id = carSummary.Id},carSummary);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CarDetail>> UpdateCar(int id, [FromBody] CarDetail car)
        {
            return Ok(await _carManager.UpdateCarAsync(id, car));
        }

        [HttpDelete("{id}")]
        public Task DeleteCar(int id)
        {
            return _carManager.DeleteCarAsync(id);
        }
    }
}