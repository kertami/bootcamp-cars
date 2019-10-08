using Microsoft.EntityFrameworkCore;

namespace Cars.Domain
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        
        public DbSet<Car> Cars { get; set; }
        public DbSet<CarModel> CarModels { get; set; }
    }
}