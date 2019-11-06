using System.Collections.Generic;
using System.Threading.Tasks;
using Cars.Application.Managers.Interfaces;
using Cars.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace Cars.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarModelController : ControllerBase
    {
        private readonly ICarModelManager _carModelManager;

        public CarModelController(ICarModelManager carModelManager)
        {
            _carModelManager = carModelManager;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarModelSummary>>> GetAllCarModels()
        {
            return Ok(await _carModelManager.GetAllCarModelsAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CarModelDetail>> GetCarModel(int id)
        {
            return Ok(await _carModelManager.GetCarModelAsync(id));
        }

        [HttpPost]
        public async Task<ActionResult<CarModelSummary>> CreateCarModel([FromBody] CarModelDetail car)
        {
            var carModelSummary = await _carModelManager.CreateCarModelAsync(car);
            return CreatedAtAction("GetCarModel", new { id = carModelSummary.Id }, carModelSummary);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<CarModelDetail>> UpdateCarModel(int id, [FromBody] CarModelDetail car)
        {
            return Ok(await _carModelManager.UpdateCarModelAsync(id, car));
        }

        [HttpDelete("{id}")]
        public async Task DeleteCarModel(int id)
        {
            await _carModelManager.DeleteCarModelAsync(id);
        }
    }
}