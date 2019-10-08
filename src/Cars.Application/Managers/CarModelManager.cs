using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cars.Application.Managers.Interfaces;
using Cars.Contracts;
using Cars.Domain;
using Microsoft.EntityFrameworkCore;

namespace Cars.Application.Managers
{
    public class CarModelManager : ICarModelManager
    {
        private readonly DataContext _ctx;

        public CarModelManager(DataContext ctx)
        {
            _ctx = ctx;
        }

        public async Task<List<CarModelSummary>> GetAllCarModelsAsync()
        {
            return await _ctx.CarModels.Select(CarModelMapping.ToSummaryExpression).ToListAsync();
        }

        public async Task<CarModelDetail> GetCarModelAsync(long carModelId)
        {
            return await _ctx.CarModels.Where(x => x.Id == carModelId)
                .Select(x => new CarModelDetail()
                {
                      Make = x.Make,
                    Name = x.Name,
                    Type = x.Type,
                })
                .FirstOrDefaultAsync();
        }

        public async Task<CarModelDetail> UpdateCarModelAsync(long carModelId, CarModelDetail carModelDetail)
        {
            var carModel = await _ctx.CarModels.FirstAsync(x => x.Id == carModelId);
            carModel.Make = carModelDetail.Make;
            carModel.Name = carModelDetail.Name;
            carModel.Type = carModelDetail.Type;
            await _ctx.SaveChangesAsync();
            return await Task.FromResult(carModelDetail);
        }


        public async Task<CarModelSummary> CreateCarModelAsync(CarModelDetail carModelDetail)
        {
            var carModel = new CarModel
            {
                Make = carModelDetail.Make,
                Name = carModelDetail.Name,
                Type = carModelDetail.Type
            };
            _ctx.CarModels.Add(carModel);
            await _ctx.SaveChangesAsync();

            var summary = CarModelMapping.ToSummary(carModel);
            return summary;
        }

        public async Task DeleteCarModelAsync(long id)
        {
            var carModelsToDelete = await _ctx.CarModels.Where(x => x.Id == id).ToListAsync();
            if (carModelsToDelete.Count > 0)
            {
                _ctx.CarModels.RemoveRange(carModelsToDelete);
                await _ctx.SaveChangesAsync();
            }
        }
    }
}