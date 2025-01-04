# Financial application - Stock Wallet 💰

A brief description of what this project does and who it's for

# Content of Project

- [Project preparation](#project-preparation)
- [Run the project](#how-to-run)

## Project preparation

The project uses .Net Core Web API, Entity Framework, Identity and SQL Server + SSMS tools.

The backend part was initiated with the command:

```bash
dotnet new webapi -o api
```

The following packages have been installed for the .Net project:

`Microsoft.EntityFrameworkCore.SqlServer`

`Microsoft.EntityFrameworkCore.Tools`

`Microsoft.EntityFrameworkCore.Design`

`Newtonsoft.Json`

`Microsoft.AspNetCore.Mvc.NewtonsoftJson`

`Microsoft.Extensions.Identity.Core`

`Microsoft.AspNetCore.Identity.EntityFrameworkCore`

`Microsoft.AspNetCore.Authentication.JwtBearer`

In the `appsettings.json` file, the following template was used for the `DefaulConnection` for the database:

`Data Source={PCNAME};Initial Catalog={DATABASENAME};Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False`

The migration was created and then applied to the database using the commands:

```bash
dotnet ef migrations add init
dotnet ef database update
```

## How to run
