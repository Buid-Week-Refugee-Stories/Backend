// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/Data/dbs/bw-refugees.db3'
    },
    migrations: {
      directory: './src/Data/migrations',
    },
    seeds: {
      directory: './src/Data/seeds',
    },
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/Data/dbs/test.db3'
    },
    migrations: {
      directory: './src/Data/migrations',
    },
    seeds: {
      directory: './src/Data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './src/Data/migrations',
    },
    seeds: {
      directory: './src/Data/seeds',
    },
  }

};
