using Cars.Application.Managers;
using Cars.Application.Managers.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Cars.Application
{
    public static class Services
    {
        public static IServiceCollection AddCarsApplicationServices(this IServiceCollection services)
        {
            services.AddTransient<ICarManager, CarManager>();
            services.AddTransient<ICarModelManager, CarModelManager>();
            return services;
        }
    }
}