using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Cars.Api;
using Cars.Common.Enums;
using Cars.Contracts;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace Cars.IntegrationTests
{
    [Collection("Integration tests")]
    public class CarModelControllerTests : IClassFixture<CustomWebApplicationFactory<Startup>>
    {
        private readonly CustomWebApplicationFactory<Startup> _factory;

        public CarModelControllerTests(CustomWebApplicationFactory<Startup> factory)
        {
            _factory = factory;
        }
        
        [Fact]
        public async Task CarModels_Get_ReturnsCarModels()
        {
            // setup
            await _factory.ExecuteOnDbContext(ctx => ctx.ClearAll());
            var carModelEntity = await _factory.ExecuteOnDbContext(ctx =>
                ctx.AddCarModel("Volvo", "V60", CarType.Break));
            var httpClient = _factory.CreateClient();

            // act
            var response = await httpClient.GetAsync("api/carmodel");
            
            // assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var carModelSummaries = await response.Content.ReadAsAsync<CarModelSummary[]>();
            carModelSummaries
                .Should().ContainSingle()
                .Which.Should().BeEquivalentTo(carModelEntity, ops => ops
                    .Including(p => p.Id)
                    .Including(p => p.Make)
                    .Including(p => p.Name));
        }
        [Fact]
        public async Task CarModels_GetDetail_ReturnsCarModelDetails()
        {
            // setup
            await _factory.ExecuteOnDbContext(ctx => ctx.ClearAll());
            var carModelEntity = await _factory.ExecuteOnDbContext(ctx =>
                ctx.AddCarModel("Volvo", "V60", CarType.Break));
            var httpClient = _factory.CreateClient();
            
            // act
            var response = await httpClient.GetAsync($"api/carmodel/{carModelEntity.Id}");

            // assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var carModelDetail = await response.Content.ReadAsAsync<CarModelDetail>();
            carModelDetail.Should().BeEquivalentTo(carModelEntity, ops => ops
                .Including(p => p.Make)
                .Including(p => p.Name)
                .Including(p => p.Type));
        }
        [Fact]
        public async Task CarModels_Post_AddsCarModel()
        {
            // setup
            await _factory.ExecuteOnDbContext(ctx => ctx.ClearAll());
            var httpClient = _factory.CreateClient();
            var carModelDetail = new CarModelDetail
            {
                Make = "BMW",
                Name = "X5",
                Type = CarType.SUV
            };
            
            // act
            var response = await httpClient.PostAsJsonAsync("api/carmodel", carModelDetail);
            
            // assert
            response.StatusCode.Should().Be(HttpStatusCode.Created);

            var createResponse = await response.Content.ReadAsAsync<CarModelSummary>();
            
            createResponse.Should().BeEquivalentTo(carModelDetail, ops => ops
                .Including(p => p.Make)
                .Including(p => p.Name));
            
            var carModelEntities = await _factory.ExecuteOnDbContext(ctx => ctx.CarModels.ToListAsync());
            var carModelEntityAssert = carModelEntities
                .Should().ContainSingle();
            createResponse.Id.Should().Be(carModelEntityAssert.Subject.Id);
            carModelEntityAssert
                .Which.Should().BeEquivalentTo(carModelDetail, ops => ops
                    .Including(p => p.Make)
                    .Including(p => p.Name)
                    .Including(p => p.Type));
        }
        
        [Fact]
        public async Task CarModels_Delete_RemovesCarModel()
        {
            // setup
            await _factory.ExecuteOnDbContext(ctx => ctx.ClearAll());
            var httpClient = _factory.CreateClient();
            var entity = await _factory.ExecuteOnDbContext(ctx => ctx.AddCarModel("Audi", "Q5", CarType.SUV));
            
            // act
            var response = await httpClient.DeleteAsync($"api/carmodel/{entity.Id}");
            
            // assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            await _factory.ExecuteOnDbContext(async ctx => (await ctx.CarModels.ToListAsync()).Should().BeEmpty());
        }
        
        [Fact]
        public async Task CarModels_Put_UpdatesCarModel()
        {
            // setup
            await _factory.ExecuteOnDbContext(ctx => ctx.ClearAll());
            var httpClient = _factory.CreateClient();
            var originalEntity = await _factory.ExecuteOnDbContext(ctx => ctx.AddCarModel("Volvo", "V60", CarType.Break));
            var updateCarModelDetail = new CarModelDetail
            {
                Make = "Volvo",
                Name = "V90",
                Type = CarType.Break
            };
            
            // act
            var response = await httpClient.PutAsJsonAsync($"api/carmodel/{originalEntity.Id}", updateCarModelDetail);
            
            // assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var updatedEntity = await _factory.ExecuteOnDbContext(ctx => ctx.CarModels.SingleAsync());
            updatedEntity.Should().BeEquivalentTo(updateCarModelDetail, opt => opt
                .Including(x => x.Make)
                .Including(x => x.Name)
                .Including(x => x.Type));
        }
    }
}