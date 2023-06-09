import React from 'react';
import Issue from './Issue.js';

export default function IssueList(props) {
  const { issues } = props;

  return (
    <div className="issue-list">
      {issues.map((issue) => (
        <div className="issue-card" key={issue._id}>
          <Issue {...issue} />
        </div>
      ))}
    </div>
  );
}
