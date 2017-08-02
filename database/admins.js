const db  = require('./db');

const getAdmins = id => {
  return db.any(`SELECT * FROM admins`)
}



module.exports = { getAdmins }