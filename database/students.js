const db  = require('./db');

const getStudentsAnswers = length => {
  return db.any(`SELECT students.*, COUNT(evaluation_submissions.id) AS solutions_count FROM students
    INNER JOIN evaluation_submissions ON evaluation_submissions.student_id = students.id
    WHERE evaluation_submissions.correct = true GROUP BY students.id ORDER BY solutions_count ASC LIMIT 5`)
}

module.exports = { getStudentsAnswers }