using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Cars.Api;
using Cars.Common.Enums;
using Cars.Contracts;
using Cars.Domain;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using Xunit;
using Xunit.Sdk;

namespace Cars.IntegrationTests
{
    [Collection("Integration tests")]
    public class CarControllerTests : IClassFixture<CustomWebApplicationFactory<Startup>>
    {
        private readonly CustomWebApplicationFactory<Startup> _factory;

        public CarControllerTests(CustomWebApplicationFactory<Startup> factory)
        {
            _factory = factory;
        }
        
        [Fact]
        public async Task GetAllCars()
        {
            // setup
            await _factory.ExecuteOnDbContext(ctx => ctx.ClearAll());
            var httpClient = _factory.CreateClient();
            var carEntity = await _factory.ExecuteOnDbContext(async ctx =>
            {
                await ctx.ClearAll();
                var model = await ctx.AddCarModel("Huyundai", "Kona", CarType.SUV);
                return await ctx.AddCar(model, "1234", 0, "Lelijk groen");
            });

            // act
            var response = await httpClient.GetAsync("api/cars");
            
            // assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var carSummaries = await response.Content.ReadAsAsync<CarSummary[]>();
            var carSummary = carSummaries
                .Should().ContainSingle().Subject;
            carSummary.Should().BeEquivalentTo(carEntity, ops => ops
                .Including(p => p.Id)
                .Including(p => p.Vin)
                .Including(p => p.CreatedOn)
                .Including(p => p.ModifiedOn)
                .Including(p => p.ModifiedBy)
                .Including(p => p.ModifiedOn));
            carSummary.Model.Should().Be(carEntity.Model.Name);
            carSummary.Make.Should().Be(carEntity.Model.Make);
        }
        [Fact]
        public async Task GetAllCarDetail()
        {
            // setup
            var carEntity = await _factory.ExecuteOnDbContext(async ctx =>
            {
                await ctx.ClearAll();
                var model = await ctx.AddCarModel("Huyundai", "Kona", CarType.SUV);
                return await ctx.AddCar(model, "1234", 0, "Lelijk groen");
            });
            var httpClient = _factory.CreateClient();
            
            // act
            var response = await httpClient.GetAsync($"api/cars/{carEntity.Id}");

            // assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var carDetail = await response.Content.ReadAsAsync<CarDetail>();
            carDetail.Should().BeEquivalentTo(carEntity, ops => ops
                .Including(p => p.Co2)
                .Including(p => p.Color)
                .Including(p => p.Vin)
                .Including(p => p.ModelId));
        }
        [Fact]
        public async Task AddCarDetail()
        {
            // setup
            var carModel = await _factory.ExecuteOnDbContext(async ctx =>
            {
                await ctx.ClearAll();
                return await ctx.AddCarModel("Huyundai", "Kona", CarType.SUV);
            });
            var httpClient = _factory.CreateClient();
            var carDetail = new CarDetail
            {
                Co2 = 0,
                Color = "Zwart",
                Vin = "1235",
                ModelId = carModel.Id
            };
            
            // act
            var response = await httpClient.PostAsJsonAsync("api/cars", carDetail);
            
            // assert
            response.StatusCode.Should().Be(HttpStatusCode.Created);

            var createResponse = await response.Content.ReadAsAsync<CarSummary>();

            createResponse.Vin.Should().Be(carDetail.Vin);
            
            var carEntities = await _factory.ExecuteOnDbContext(ctx => 
                ctx.Cars
                    .Include(x => x.Model)
                    .ToListAsync());
            var carEntityAssert = carEntities
                .Should().ContainSingle();
            createResponse.Id.Should().Be(carEntityAssert.Subject.Id);
            carEntityAssert
                .Which.Should().BeEquivalentTo(carDetail, ops => ops
                    .Including(p => p.Co2)
                    .Including(p => p.Color)
                    .Including(p => p.Vin)
                    .Including(p => p.ModelId));
        }
        
        [Fact]
        public async Task DeleteCar()
        {
            // setup
            var carEntity = await _factory.ExecuteOnDbContext(async ctx =>
            {
                await ctx.ClearAll();
                var model = await ctx.AddCarModel("Huyundai", "Kona", CarType.SUV);
                return await ctx.AddCar(model, "1234", 0, "Lelijk groen");
            });
            var httpClient = _factory.CreateClient();
            
            // act
            var response = await httpClient.DeleteAsync($"api/cars/{carEntity.Id}");
            
            // assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            await _factory.ExecuteOnDbContext(async ctx => (await ctx.Cars.ToListAsync()).Should().BeEmpty());
        }
        
        [Fact]
        public async Task UpdateCar()
        {
            // setup
            var carEntity = await _factory.ExecuteOnDbContext(async ctx =>
            {
                await ctx.ClearAll();
                var model = await ctx.AddCarModel("Huyundai", "Kona", CarType.SUV);
                return await ctx.AddCar(model, "1234", 0, "Lelijk groen");
            });
            var httpClient = _factory.CreateClient();
            var updateCarRequest = new CarDetail()
            {
                Co2 = 0,
                Color = "Zwart",
                Vin = "1234",
                ModelId = carEntity.ModelId
            };
            
            // act
            var response = await httpClient.PutAsJsonAsync($"api/cars/{carEntity.Id}", updateCarRequest);
            
            // assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var updatedEntity = await _factory.ExecuteOnDbContext(ctx => ctx.Cars.SingleAsync());
            updatedEntity.Should().BeEquivalentTo(updateCarRequest, opt => opt
                .Including(x => x.Co2)
                .Including(x => x.Color)
                .Including(x => x.ModelId)
                .Including(x => x.Vin));
        }
    }
}