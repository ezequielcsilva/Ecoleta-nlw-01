import path from "path";

module.exports = {
  client: "",
  connection: {
    user: "",
    password: "",
    server: "",
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
