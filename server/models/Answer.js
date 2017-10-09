const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema(
  {
    questionId: { type: Schema.Types.ObjectId, ref: 'Question' }, // di table/collection namanya jadi customer ditambh s jadi customers
    answer: String,
    vote:Number
  }, {
    timestamps: true
  }
)

Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer;
