import React, { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first text",
      date: "15/10",
    },

    {
      id: nanoid(),
      text: "this is my new text",
      date: "ok/10",
    },
    {
      id: nanoid(),
      text: "this is my third text",
      date: "15/10",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
}
