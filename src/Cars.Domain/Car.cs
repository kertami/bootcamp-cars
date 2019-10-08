using System;
using Cars.Domain.Base;

namespace Cars.Domain
{
    public class Car: IEntity, IAuditableEntity
    {
        public long Id { get; set; }

        public string Vin { get; set; }
        public int Co2 { get; set; }
        public string Color { get; set; }
        
        public long ModelId { get; set; }
        public CarModel Model { get; set; }
        
        public DateTime CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public DateTime ModifiedOn { get; set; }
        public string ModifiedBy { get; set; }
    }
}