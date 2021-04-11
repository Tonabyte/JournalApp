import React from 'react';

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://i.redd.it/7deyo2l5k4v41.jpg)'
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">A new opportunity</p>
        <p className="journal__entry-content">BlaBlaBla</p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
