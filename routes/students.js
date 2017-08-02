const students = require('../database/students');

const getStudentsAnswers = (req, res) => {
  students.getStudentsAnswers()
  .then(data => {
    res.json(data)
  })
}

module.exports = { getStudentsAnswers };