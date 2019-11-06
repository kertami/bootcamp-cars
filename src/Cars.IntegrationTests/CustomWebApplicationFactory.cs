using System;
using System.Linq;
using System.Threading.Tasks;
using Cars.Common.Enums;
using Cars.Domain;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Cars.IntegrationTests
{
    public class CustomWebApplicationFactory<TStartup> 
        : WebApplicationFactory<TStartup> where TStartup: class
    {
        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureServices(services =>
            {
                // Remove the app's ApplicationDbContext registration.
                var descriptor = services.SingleOrDefault(
                    d => d.ServiceType == 
                         typeof(DbContextOptions<DataContext>));

                if (descriptor != null)
                {
                    services.Remove(descriptor);
                }

                // Add ApplicationDbContext using an in-memory database for testing.
                services.AddDbContext<DataContext>((options, context) => 
                {
                    context.UseInMemoryDatabase("InMemoryDbForTesting");
                });

                // Build the service provider.
                var sp = services.BuildServiceProvider();

                // Create a scope to obtain a reference to the database
                // context (ApplicationDbContext).
                using (var scope = sp.CreateScope())
                {
                    var scopedServices = scope.ServiceProvider;
                    var db = scopedServices.GetRequiredService<DataContext>();
                    
                    // Ensure the database is created.
                    db.Database.EnsureCreated();
                }
            });
        }
        
        public Task ExecuteOnDbContext(Func<DataContext, Task> execute) =>
            ExecuteOnDbContext(async ctx =>
            {
                await execute(ctx);
                return new object();
            });
        public Task<T> ExecuteOnDbContext<T>(Func<DataContext, Task<T>> execute)
        {
            using (var scoped = Services.CreateScope())
            {
                var ctx = scoped.ServiceProvider.GetService<DataContext>();
                return execute(ctx);
            }
        }
    }

    static class DbContextExtensions
    {
        public static async Task ClearAll(this DataContext ctx)
        {
            ctx.Cars.RemoveRange(await ctx.Cars.ToListAsync());
            ctx.CarModels.RemoveRange(await ctx.CarModels.ToListAsync());

            await ctx.SaveChangesAsync();
        }
        public static async Task<Car> AddCar(this DataContext ctx, CarModel model, string vin, int co2,
            string color)
        {
            var car = new Car
            {
                Model = model,
                Vin = vin,
                Co2 = co2,
                Color = color
            };
            ctx.Cars.Add(car);

            await ctx.SaveChangesAsync();

            return car;
        }
        public static async Task<CarModel> AddCarModel(this DataContext ctx, string make, string name, CarType type)
        {
            var carModel = new CarModel
            {
                Make = make,
                Name = name,
                Type = type
            };
            ctx.CarModels.Add(carModel);

            await ctx.SaveChangesAsync();

            return carModel;
        }
    }
}