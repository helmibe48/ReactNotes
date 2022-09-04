import React from "react";
import { showFormattedDate } from "../utils/data";

export default function NoteItemContentHeader({title, createdAt}) {
    return(
        <div>
            <h1 className="note-item__title">{title}</h1>
            <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        </div>
    );
}