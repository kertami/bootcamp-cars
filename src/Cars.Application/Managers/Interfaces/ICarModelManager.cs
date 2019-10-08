using System.Collections.Generic;
using System.Threading.Tasks;
using Cars.Contracts;

namespace Cars.Application.Managers.Interfaces
{
    public interface ICarModelManager
    {
        Task<List<CarModelSummary>> GetAllCarModelsAsync();
        Task<CarModelDetail> GetCarModelAsync(long carModelId);
        Task<CarModelDetail> UpdateCarModelAsync(long carModelId, CarModelDetail carModel);
        Task<CarModelSummary> CreateCarModelAsync(CarModelDetail carModel);
        Task DeleteCarModelAsync(long id);
    }
}