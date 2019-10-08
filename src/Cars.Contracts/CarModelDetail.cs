using Cars.Common.Enums;

namespace Cars.Contracts
{
    public class CarModelDetail
    {
        public string Name { get; set; }
        public string Make { get; set; }
        public CarType Type { get; set; }
    }
}