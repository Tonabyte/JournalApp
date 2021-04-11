import React from 'react';

const NoteAppBar = () => {
  return (
    <div className="note__appbar">
      <span>28 de abril 2021</span>
      <div>
        <button className="btn">
           Picture
        </button>

        <button className="btn">
           Save
        </button>
      </div>
    </div>
  );
};

export default NoteAppBar;
