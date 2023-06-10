// CommentForm.js
import React, { useState, useContext } from 'react';
import { CommentContext } from '../context/CommentProvider';
import { UserContext } from '../context/UserProvider';

export default function CommentForm(props) {
  const { addComment } = useContext(CommentContext);
  const { user } = useContext(UserContext);
  const { issueId } = props;

  const [comment, setComment] = useState('');

  function handleChange(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newComment = { comment };
    addComment(issueId, newComment);
    setComment('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={handleChange}
          placeholder="Comment"
        />
        <button>Post</button>
      </form>
    </div>
  );
}
