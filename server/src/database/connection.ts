import knex from "knex";

const connection = knex({
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
});

export default connection;
