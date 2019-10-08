using System.Collections.Generic;
using System.Threading.Tasks;
using Cars.Contracts;

namespace Cars.Application.Managers.Interfaces
{
    public interface ICarManager
    {
        Task<List<CarSummary>> GetAllCarsAsync();
        Task<CarDetail> GetCarAsync(long carId);
        Task<CarDetail> UpdateCarAsync(long carId, CarDetail car);
        Task<CarSummary> CreateCarAsync(CarDetail car);
        Task DeleteCarAsync(long id);
    }
}