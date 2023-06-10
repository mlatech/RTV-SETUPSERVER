// CommentProvider.js
import React, { useState } from 'react';
import axios from 'axios';

export const CommentContext = React.createContext();
const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function CommentProvider(props) {
  const [comments, setComments] = useState([]);

  function addComment(IssueId, newComment) {
    userAxios
      .post(`/api/comment/${IssueId}`, newComment)
      .then(res => {
        setComments(prevComments => [...prevComments, res.data]);
      })
      .catch(err => console.log(err));
  }

  async function getComments(IssueId) {
    try {
      const response = await userAxios.get(`/api/comment/${IssueId}`);
      setComments(response.data);
    } catch (err) {
      console.log(err.response.data.errMsg);
    }
  }

  return (
    <CommentContext.Provider
      value={{
        comments,
        setComments,
        addComment,
        getComments
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
}
