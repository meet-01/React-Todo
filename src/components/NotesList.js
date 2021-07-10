import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

export default function NotesList({ notes, handleAddNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note id={note.is} text={note.text} date={note.date} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}
