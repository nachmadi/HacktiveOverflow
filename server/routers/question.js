let express =require('express');
let router = express.Router();

let  controllerQuestion = require('../controllers/questionController'); // ada .js atau tidak sama saja

//router.post('/login',controllerUsers.getLogin);
router.get('/',controllerQuestion.getAllQuestion);
router.get('/:_id',controllerQuestion.getOneQuestion);
router.post('/',controllerQuestion.createQuestion);
router.delete('/:_id',controllerQuestion.delOneQuestion);
router.put('/:id',controllerQuestion.updateQuestion);

module.exports = router;
