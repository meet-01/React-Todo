import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first text",
      date: "15/10/2021",
    },

    {
      id: nanoid(),
      text: "this is my new text",
      date: "18/10/2021",
    },
    {
      id: nanoid(),
      text: "this is my third text",
      date: "15/10/2020",
    },
  ]);
  //json parse: string into object from local storage
  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("react-todo-app"));

    if (saveNotes) {
      setNotes(saveNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-todo-app", JSON.stringify(notes));
  }, [notes]);

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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <h1>Todo App</h1>
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}
