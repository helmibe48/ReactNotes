import React from "react";

export default function NoteItemContentBody({ body }) {
  return (
    <div>
      <p className="note-item__body">{body}</p>
    </div>
  );
}
