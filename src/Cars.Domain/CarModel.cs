using Cars.Common.Enums;
using Cars.Domain.Base;

namespace Cars.Domain
{
    public class CarModel: IEntity
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Make { get; set; }
        public CarType Type { get; set; }
    }
}