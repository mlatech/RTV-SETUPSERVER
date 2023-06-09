import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';
import publicstyles from "../css/publicstyles.css"

export default function Public() {
  const { publicIssues, getPublicIssues } = useContext(UserContext);

  useEffect(() => {
    getPublicIssues();
  }, []);

  return (
    <div className="public">
      <div className="issue-container">
        <IssueList issues={publicIssues} />
      </div>
    </div>
  );
}
