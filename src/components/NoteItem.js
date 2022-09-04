import React from "react";
import NoteItemContent from "./NoteItemContent";
import ButtonAction from "./ButtonAction";

export default function NoteItem({ id, title, body, createdAt, onDelete, onArchive, archived }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <ButtonAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
    </div>
  );
}
