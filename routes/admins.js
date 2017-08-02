const admins = require('../database/admins');

const getAdmins = (req, res) => {
  admins.getAdmins()
  .then(data => {
    res.json(data)
  })
}

module.exports = { getAdmins };