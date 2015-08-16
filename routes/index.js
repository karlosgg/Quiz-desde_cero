var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// Autoload de comandos :quizId
router.param('quizId', quizController.load);

/* GET author page */

router.get('/author', function(req, res) {
  res.render('author', { author: 'José Carlos Grijalva Gonzalez' });
});

/*GET Quizes*/
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d)', quizController.show);
router.get('/quizes/:quizId(\\d)/answer', quizController.answer);

module.exports = router;
