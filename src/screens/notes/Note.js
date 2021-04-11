import React from 'react'
import NoteAppBar from '../../components/app-bar/NoteAppBar'

const Note = () => {
  return (
    <div className="note__main-content">
      <NoteAppBar />

      <div className="note__content">
        <input
          type="text"
          placeholder="Something awesome"
          className="note__title-input"
        />
        <textarea
          placeholder="What happened today?"
          className="note__text-area"
        >

        </textarea>
        <div className="note__image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Meeting_Between_Cambyses_II_and_Psammetichus_III.jpg/1200px-Meeting_Between_Cambyses_II_and_Psammetichus_III.jpg"
            alt="Not Found"
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
