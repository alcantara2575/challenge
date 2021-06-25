const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'challenge',
    password: env.DB_PASSWORD || 'ChaLLenge+0101',
    database: env.DB_NAME || 'challenge',
  },
  listPerPage: env.LIST_PER_PAGE || 5,
};


module.exports = config;