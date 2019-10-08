using System.Collections.Generic;
using System.Threading.Tasks;
using Cars.Application.Managers.Interfaces;
using Cars.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace Cars.API.Controllers
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
        public async Task<ActionResult<IEnumerable<CarDetail>>> GetAll()
        {
            return Ok(await _carManager.GetAllCarsAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetCar(int id)
        {
            return Ok(await _carManager.GetCarAsync(id));
        }

        [HttpPost]
        public async Task<ActionResult<CarSummary>> CreateCar([FromBody] CarDetail car)
        {
            return Ok(await _carManager.CreateCarAsync(car));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CarDetail>> UpdateCar(int id, [FromBody] CarDetail car)
        {
            return Ok(await _carManager.UpdateCarAsync(id, car));
        }

        [HttpDelete]
        public Task DeleteCar(int id)
        {
            return _carManager.DeleteCarAsync(id);
        }
    }
}