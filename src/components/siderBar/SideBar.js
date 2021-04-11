import React from 'react';

// Components
import JournalEntriesList from '../list/JournalEntriesList';

const SideBar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon" />
          <span> Tona</span>
        </h3>
        <button className="btn">
          Logout
        </button>
      </div>
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New Entry</p>
      </div>

      <JournalEntriesList />
    </aside>
  );
};

export default SideBar;
