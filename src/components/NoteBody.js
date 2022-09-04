import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

export default function NoteBody({ addNote, notes, onDelete, onArchive }) {
  return (
    <div className="note-app__body">
      <h2>Create Note</h2>
      <NoteInput addNote={addNote} />
      <h2>Note</h2>
      <NoteList notes={notes.filter((note) => note.archived === false)} onDelete={onDelete} onArchive={onArchive} />
      <h2>Note Archive</h2>
      <NoteList notes={notes.filter((note) => note.archived === true)} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}
