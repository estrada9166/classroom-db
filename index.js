const express     = require('express');
const bodyParser  = require('body-parser');
const app         = express();

const { getAdmins } = require('./routes/admins');
const { getStudentsAnswers } = require('./routes/students');
const { getActiveCourses } = require('./routes/courses');
const { getSessionsById, getLastSessions, getSessionsEndedBy, 
  getAvgRating } = require('./routes/sessions');
const { getActiveInstructors } = require('./routes/instructors');
const { getTopicCompletions } = require('./routes/topics');



// Import the middlewares
const { headers } = require('./middlewares')

const port = process.env.PORT || 8000;
const apiRoutes = express.Router();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '2mb', type: 'application/json'}));
app.use(headers);

app.use('/api', apiRoutes);

// Admins
apiRoutes.get('/admins', getAdmins);

// Students
apiRoutes.get('/students', getStudentsAnswers);

// Courses
apiRoutes.get('/courses/active', getActiveCourses);

// Sessions
apiRoutes.get('/sessions/find/:id', getSessionsById);
apiRoutes.get('/sessions/last/:limit', getLastSessions);
apiRoutes.get('/sessions/ended', getSessionsEndedBy);
apiRoutes.get('/sessions/avg/:id', getAvgRating);

// Instructors
apiRoutes.get('/instructors/active', getActiveInstructors);

// Topics
apiRoutes.get('/topics/completions/:course_id', getTopicCompletions);


app.get('/', (req, res) => {
  res.json('hola')
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
});

