const sessions = require('../database/sessions');

const getSessionsById = (req, res) => {
  sessions.getSessionsById(req.params.id)
  .then(data => {
    res.json(data)
  })
}

const getLastSessions = (req, res) => {
  sessions.getLastSessions(req.params.limit)
  .then(data => {
    res.json(data)
  })
}

const getSessionsEndedBy = (req, res) => {
  sessions.getSessionsEndedBy()
  .then(data => {
    res.json(data)
  })
}

const getAvgRating = (req, res) => {
  sessions.getAvgRating(req.params.id)
  .then(data => {
    res.json(data)
  })
}
module.exports = { getSessionsById, getLastSessions, getSessionsEndedBy,
  getAvgRating } 