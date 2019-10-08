using System;
using System.Linq.Expressions;
using Cars.Contracts;
using Cars.Domain;

namespace Cars.Application.Managers
{
    internal static class CarModelMapping
    {
        public static readonly Expression<Func<CarModel, CarModelSummary>> ToSummaryExpression = carModel => new CarModelSummary
        {
            Id = carModel.Id,
            Make = carModel.Make,
            Name = carModel.Name
        };

        public static readonly Func<CarModel, CarModelSummary> ToSummary = ToSummaryExpression.Compile();
    }
}