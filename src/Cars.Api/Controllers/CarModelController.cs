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
        public async Task<ActionResult<string>> GetCarModel(int id)
        {
            return Ok(await _carModelManager.GetCarModelAsync(id));
        }

        [HttpPost]
        public async Task CreateCarModel([FromBody] CarModelDetail car)
        {
            await _carModelManager.CreateCarModelAsync(car);
        }

        [HttpPut]
        public async Task UpdateCarModel(int id, [FromBody] CarModelDetail car)
        {
            await _carModelManager.UpdateCarModelAsync(id, car);
        }

        [HttpDelete]
        public async Task DeleteCarModel(int id)
        {
            await _carModelManager.DeleteCarModelAsync(id);
        }
    }
}