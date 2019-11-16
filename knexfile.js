module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/Data/DataBases/bw-refugees.db3'
    },
    migrations: {
      directory: './src/Data/migrations',
    },
    seeds: {
      directory: './src/Data/seeds',
    }
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './src/Data/DataBases/test.db3'
    },
    migrations: {
      directory: './src/Data/migrations',
    },
    seeds: {
      directory: './src/Data/seeds',
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './src/Data/migrations',
    },
    seeds: {
      directory: './src/Data/seeds',
    }
  }

};
