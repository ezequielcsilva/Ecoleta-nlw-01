import path from "path";

module.exports = {
  client: "mssql",
  connection: {
    user: "adminbd",
    password: "Thor@960062",
    server: "gowcon01\\sqlcon01",
    database: "coletaBD",
    options: {
      encrypt: true,
      enableArithAbort: true,
    },
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  seeds: {
    directory: path.resolve(__dirname, "src", "database", "seeds"),
  },
  useNullAsDefault: true,
};
