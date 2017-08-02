const db  = require('./db');

const getSessionsById = id => {
  return db.any(`SELECT COUNT(id) FROM sessions WHERE course_id = $1`, [id])
}

const getLastSessions = limit => {
  return db.any(`SELECT sessions.*, programs.name, courses.name, 
    instructors.first_name, instructors.last_name FROM sessions
    INNER JOIN courses ON sessions.course_id = courses.id
    INNER JOIN programs ON courses.program_id = programs.id
    INNER JOIN courses_instructors ON courses.id = courses_instructors.course_id
    INNER JOIN instructors ON courses_instructors.instructor_id = instructors.id
    ORDER BY started_at DESC LIMIT $1`, [limit])
}

const getSessionsEndedBy = () => {
  return db.any(`SELECT * FROM sessions WHERE (started_by_id <> ended_by_id) IS
    NOT FALSE`)
}

const getAvgRating = id => {
  return db.one(`SELECT AVG(student_id) FROM attendances
    INNER JOIN sessions ON attendances.session_id = sessions.id
    WHERE (attendances.rating <> null) IS NOT FALSE AND sessions.course_id = $1`,
    [id])
}

module.exports = { getSessionsById, getLastSessions, getSessionsEndedBy, 
  getAvgRating }