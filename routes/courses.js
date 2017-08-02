const courses = require('../database/courses');

const getActiveCourses = (req, res) => {
  courses.getActiveCourses()
  .then(data => {
    res.json({ length: data.length, data })
  })
}

module.exports = { getActiveCourses } 