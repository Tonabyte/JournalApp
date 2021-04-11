import React from 'react';

// Components
import JournalEntry from '../list-item/JournalEntry';

const JournalEntriesList = () => {
  const entries = [1,2,3,4,56];

  return (
    <div className="journal__entries">
      {
        entries.map((entry, index) => (
          <JournalEntry key={entry}/>
        ))
      }
    </div>
  );
};

export default JournalEntriesList;
