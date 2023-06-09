import React, { useState } from 'react';
import axios from 'axios';

export default function CommentForm({ issueId }) {
  const [comment, setComment] = useState('');

  function addComment(newComment){
    axios.post("/api/comment/:UserId", newComment)
      .then(res => {
        setComment(prevComment => ({
          ...prevComment,
          comment: [...prevState.comment, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }


return(
    <div>
        <form>
            
        </form>
    </div>
)
  
}
