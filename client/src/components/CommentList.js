import React, { useContext, useEffect } from 'react';
import CommentList from './CommentList'; // Import the correct component
import { CommentContext } from '../../context/CommentProvider'; // Make sure the context name is correct

function CommentList({ IssueId, comments }) {
  const { getComments } = useContext(CommentContext); // Use the correct context name

  useEffect(() => {
    getComments(IssueId);
  }, [IssueId]);

  return (
    <div className="comment-list">
      {comments.map(comment => (
        <CommentList {...comments} key={comments._id} IssueId={IssueId} /> // Update the component name here
      ))}
    </div>
  );
}

export default CommentList; // Export the correct component name
