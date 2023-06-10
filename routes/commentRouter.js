const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')
const jwt = require('jsonwebtoken')

commentRouter.get("/:IssueId", (req, res, next)=>{
Comment.find({issue: req.params.IssueId}, (err, comment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comment)
  })
})

commentRouter.post("/:IssueId", (req, res ,next)=>{
    req.body.issue = req.params.IssueId
    const newComment = new Comment(req.body)
    newComment.save((err, comment) => {
    if(err){
        res.status(500)
    return next(err)
    }
    return res.status(201).send(comment)
    })
})

//get all 
  commentRouter.get("/", (req, res, next) => {
    Comment.find({}, (err, comments) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(comments);
    });
  });


module.exports = commentRouter