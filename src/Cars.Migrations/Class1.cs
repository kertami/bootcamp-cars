using System;
using Cars.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Cars.Migrations
{
    public class DesignTime : IDesignTimeDbContextFactory<DataContext>
    {
        public DataContext CreateDbContext(string[] args)
        {
            // CREATE LOGIN greenfield WITH PASSWORD = 'p@$$w0rd!' ; GO ; SP_ADDSRVROLEMEMBER 'greenfield','SYSADMIN'
            var optionsBuilder = new DbContextOptionsBuilder<DataContext>();
            var connectionString =
                "Server=localhost;" +
                "Initial Catalog=GreenfieldTest;" +
                "User ID=greenfield;" +
                "Password=p@$$w0rd!;" +
                "MultipleActiveResultSets=True;" +
                "TrustServerCertificate=True;";
            optionsBuilder.UseSqlServer(
                connectionString, ops => ops.MigrationsAssembly("Cars.Migrations"));

            return new DataContext(optionsBuilder.Options);
        }
    }
}