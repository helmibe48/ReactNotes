import React from "react";

export default function NoteSearch({ onSearch }) {
  return (
    <div>
      <form className="note-search">
        <input type="text" placeholder="Search Note" onChange={(e) => onSearch(e.target.value)} />
      </form>
    </div>
  );
}
