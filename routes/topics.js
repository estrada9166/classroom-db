const topics = require('../database/topics');

const getTopicCompletions = (req, res) => {
  topics.getTopicCompletions(req.params.course_id)
  .then(data => {
    res.json({ length: data.length, data })
  })
}

module.exports = { getTopicCompletions } 