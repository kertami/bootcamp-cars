using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cars.Application.Managers.Interfaces;
using Cars.Contracts;
using Cars.Domain;
using Microsoft.EntityFrameworkCore;

namespace Cars.Application.Managers
{
    public class CarManager : ICarManager
    {
        private readonly DataContext _ctx;

        public CarManager(DataContext ctx)
        {
            _ctx = ctx;
        }

        public async Task<List<CarSummary>> GetAllCarsAsync()
        {
            return await _ctx.Cars.Select(CarMapping.ToSummaryExpression).ToListAsync();
        }

        public async Task<CarDetail> GetCarAsync(long carId)
        {
            return await _ctx.Cars.Where(x => x.Id == carId)
                .Select(x => new CarDetail
                {
                    ModelId = x.ModelId,
                    Vin = x.Vin,
                    Co2 = x.Co2,
                    Color = x.Color
                })
                .FirstOrDefaultAsync();
        }

        public async Task<CarDetail> UpdateCarAsync(long carId, CarDetail carDetail)
        {
            var car = await _ctx.Cars.FirstAsync(x => x.Id == carId);
            car.ModelId = carDetail.ModelId;
            car.Co2 = carDetail.Co2;
            car.Color = carDetail.Color;
            car.Vin = carDetail.Vin;
            car.ModifiedOn = DateTime.UtcNow;
            car.ModifiedBy = "user";
            await _ctx.SaveChangesAsync();
            return await Task.FromResult(carDetail);
        }


        public async Task<CarSummary> CreateCarAsync(CarDetail carDetail)
        {
            var createdOn = DateTime.UtcNow;
            var createdBy = "user";
            var car = new Car
            {
                ModelId = carDetail.ModelId,
                Model = await _ctx.CarModels
                    .Include(x => x.Make)
                    .FirstAsync(carModel => carModel.Id == carDetail.ModelId),
                Co2 = carDetail.Co2,
                Color = carDetail.Color,
                Vin = carDetail.Vin,
                ModifiedOn = createdOn,
                ModifiedBy = createdBy,
                CreatedOn = createdOn,
                CreatedBy = createdBy
            };
            _ctx.Cars.Add(car);
            await _ctx.SaveChangesAsync();

            var summary = CarMapping.ToSummary(car);
            return summary;
        }

        public async Task DeleteCarAsync(long id)
        {
            var carsToDelete = await _ctx.Cars.Where(x => x.Id == id).ToListAsync();
            if (carsToDelete.Count > 0)
            {
                _ctx.Cars.RemoveRange(carsToDelete);
                await _ctx.SaveChangesAsync();
            }
        }
    }
}