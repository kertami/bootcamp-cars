using System;
using System.Linq.Expressions;
using Cars.Contracts;
using Cars.Domain;

namespace Cars.Application.Managers
{
    internal static class CarMapping
    {
        public static readonly Expression<Func<Car, CarSummary>> ToSummaryExpression = car => new CarSummary
        {
            Id = car.Id,
            Vin = car.Vin,
            Make = car.Model.Make,
            Model = car.Model.Name,
            ModifiedOn = car.ModifiedOn,
            ModifiedBy = car.ModifiedBy,
            CreatedOn = car.CreatedOn,
            CreatedBy = car.CreatedBy
        };

        public static readonly Func<Car, CarSummary> ToSummary = ToSummaryExpression.Compile();
    }
}