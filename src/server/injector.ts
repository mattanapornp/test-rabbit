import knex from 'knex';

let connection;

export default function getDatabaseConnector() {
  let host = process.env.DB_HOST;

  if (process.env.NODE_ENV !== 'development') {
    const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';
    host = `${dbSocketPath}/${process.env.CLOUD_SQL_CONNECTION_NAME}`;
  }

  return () => {
    connection = knex({
      client: 'pg',
      connection: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host,
      },
    });
    return connection;
  };
}
