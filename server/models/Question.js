const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema(
  {
    userid: { type: Schema.Types.ObjectId, ref: 'User' }, // di table/collection namanya jadi customer ditambh s jadi customers
    caption: String,
    question: String,
    vote: Number,
    objAnswer:[],
    onjVote: []
  }, {
    timestamps: true
  }
)

Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
