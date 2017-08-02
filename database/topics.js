const db  = require('./db');

const getTopicCompletions = course_id => {
  const today = new Date();
  console.log(today)
  return db.any(`SELECT topic_completions.*, topics.* FROM topics
    INNER JOIN topic_completions ON topics.id = topic_completions.topic_id
    INNER JOIN courses ON courses.id = topic_completions.course_id
    WHERE topic_completions.course_id = $1 ORDER BY topic_completions.updated_at ASC`, 
    [course_id])
}

module.exports = { getTopicCompletions }