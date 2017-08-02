const initOptions = {
  connect: (client, dc, isFresh) => {
    const cp = client.connectionParameters;
    console.log('Connected to database:', cp.database);
  }
}

const pgp  = require('pg-promise')(initOptions);

const cn = '';

const db = pgp(cn);

module.exports = db;