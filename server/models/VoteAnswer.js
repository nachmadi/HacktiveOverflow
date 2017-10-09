const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteAnswerSchema = new mongoose.Schema(
  {
    answerId: { type: Schema.Types.ObjectId, ref: 'Answer' }, // di table/collection namanya jadi customer ditambh s jadi customers
    userId:[{ type: Schema.Types.ObjectId, ref: 'User'}]
  }, {
    timestamps: true
  }
)

VoteAnswer = mongoose.model('VoteAnswer', VoteAnswerSchema);

module.exports = VoteAnswer;
