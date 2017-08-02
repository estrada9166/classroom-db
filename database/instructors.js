const db  = require('./db');

const getActiveInstructors = () => {
  const today = new Date();
  return db.any(`SELECT instructors.* FROM instructors 
    INNER JOIN courses_instructors ON instructors.id = courses_instructors.instructor_id 
    INNER JOIN courses ON courses.id = courses_instructors.course_id
    WHERE courses.start_at <= $1 AND courses.end_at >= $1`, [today])
}

module.exports = { getActiveInstructors }