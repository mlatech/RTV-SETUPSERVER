const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue.js')

// Get All Issues
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, Issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(Issues)
  })
})

// Get Issues by user id
issueRouter.get("/user", (req, res, next) => {
  Issue.find({ user: req.auth._id }, (err, Issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(Issues)
  })
})

// Add new Issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})

// Delete Issue
issueRouter.delete("/:IssueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.IssueId, user: req.auth._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted Issue: ${deletedIssue.title}`)
    }
  )
})

//upvote an issue
issueRouter.put("/like/:issueID", (req, res, next)=>{
  Issue.findOneAndUpdate(
      {_id: req.params.issueID},
      {$inc: {likes: 1}},
      {new: true},
      (err, updatedIssue) => {
          if(err){
              res.status(500)
              return next(err)
          }
          return res.status(201).send(updatedIssue)
      }
  )
})

// Update Issue
issueRouter.put("/:IssueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.IssueId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

module.exports = issueRouter