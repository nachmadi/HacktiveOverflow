const Question= require('../models/Question');
const AnswerController = require('../controllers/answerController');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
  createQuestion : (req,res)=>{
               Question.create({
                 userid: req.body.userId,
                 question: req.body.question,
                 caption: req.body.caption,
                 vote:0,
                 objAnswer:[],
                 onjVote:[]
                })
                .then(data=>{
                   res.send(data);
                })
                .catch(err=>{
                  res.send(err);
                })
  },
  getAllQuestion:(req, res)=> {
               Question.find()
               .populate('userid', 'user_id nama')
               .then(question => {
                  res.send(question);
               })
               .catch(err=>{
                 res.send(err);
               })
  },
  getOneQuestion: (req, res)=>{
              var caption = req.params.capton;
              var query = {caption:caption}
              Question.findOne(query)
              .populate('userid', 'user_id nama')
              .then(question => {
                  res.send(question);
              })
              .catch(err=>{
                res.send(err);
              })
  },
  getLikeQuestion: (req, res)=>{
              var caption = req.params.capton;
              var query = { "caption": { $regex: '.*' + caption + '.*' } }
              Question.findOne(query)
              .then(datas => {
                res.send(datas);
              })
              .catch(err=>{
                res.send(err);
              })
  },
  delOneQuestion: (req, res)=>{
              var id = req.params._id;
              var o_id = new ObjectId(id);
              var query = {_id:o_id}
              Question.deleteOne(query)
              .then(result => {
                  res.send(result);
              })
              .catch(err=>{
                res.send(err);
              })
  },
  updateQuestion: (req, res)=>{
              var id = req.params.id;
              var query = {_id:id}
              Question.findOneAndUpdate(query,{
                    title : req.body.userId,
                    content : req.body.question,
                    author : req.body.caption
              })
              .then(result=>{
                  res.send(result);
              })
              .catch(err=>{
                  res.send(err);
              })
  }
}
