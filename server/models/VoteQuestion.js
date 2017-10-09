const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteQuestionSchema = new mongoose.Schema(
  {
    questionId: { type: Schema.Types.ObjectId, ref: 'Question' }, // di table/collection namanya jadi customer ditambh s jadi customers
    userId:[{ type: Schema.Types.ObjectId, ref: 'User'}]
  }, {
    timestamps: true
  }
)

VoteQuestion = mongoose.model('VoteQuestion', VoteQuestionSchema);

module.exports = VoteQuestion;
