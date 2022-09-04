import React from "react";
import NoteSearch from "./NoteSearch";

export default function NoteHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Note Apps</h1>
      <NoteSearch onSearch={onSearch} />
    </div>
  );
}
