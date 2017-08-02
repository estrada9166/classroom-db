const db  = require('./db');

const getActiveCourses = () => {
  const today = new Date();
  console.log(today)
  return db.any(`SELECT * FROM courses WHERE start_at <= $1 AND end_at >= $1`,
              [today])
}

module.exports = { getActiveCourses }