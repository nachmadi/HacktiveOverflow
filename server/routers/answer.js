let express =require('express');
let router = express.Router();

let  controllerAnswer = require('../controllers/answerController'); // ada .js atau tidak sama saja

router.get('/',controllerAnswer.getAllAnswer);
router.get('/:_id',controllerAnswer.getOneAnswer);
router.post('/',controllerAnswer.createAnswer);
router.delete('/:_id',controllerAnswer.delOneAnswer);

module.exports = router;
