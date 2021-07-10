import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Note({ id, text, date, handleDeleteNote }) {
  console.log(id);
  return (
    <div className="note">
      <span>{text}</span>

      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3rem"
        />
      </div>
    </div>
  );
}
