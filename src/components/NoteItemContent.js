import React from "react";
import NoteItemContentHeader from "./NoteItemContentHeader";
import NoteItemContentBody from "./NoteItemContentBody";

export default function NoteItemContent({ title, body, createdAt }) {
  return (
    <div className="note-item__content">
      <NoteItemContentHeader title={title} createdAt={createdAt} />
      <NoteItemContentBody body={body} />
    </div>
  );
}
