import React, { useContext } from 'react';
import CommentForm from './CommentForm';
import { CommentContext } from '../context/CommentProvider.js';

export default function Issue(props) {
  const { title, description, _id } = props;
  const { comments, setComments, addComment } = useContext(CommentContext);
  
  return (
    <div className="issue">
      <h1 className='title'>{title}</h1>
      <h3 className='description'>{description}</h3>
      <CommentForm setComments={setComments} /> {/* Pass setComment instead of comment */}
    </div>
  );
}
