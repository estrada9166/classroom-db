const instructors = require('../database/instructors');

const getActiveInstructors = (req, res) => {
  instructors.getActiveInstructors()
  .then(data => {
    res.json({ length: data.length, data })
  })
}

module.exports = { getActiveInstructors } 