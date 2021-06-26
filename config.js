const env = process.env;

const config = {
    //config db connection
  db: { 
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'challenge',
    password: env.DB_PASSWORD || 'ChaLLenge+0101',
    database: env.DB_NAME || 'challenge',
  },
    //config element per page
  listPerPage: env.LIST_PER_PAGE || 5,
};


module.exports = config;