import React from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { getInitialData } from "../utils/data";

export default class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            notesDataBackUp: getInitialData(),
        };
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onSearchHandler(title) {
        this.setState((previousState) => {
            return {
              ...previousState,
              notes: this.state.notesDataBackUp,
            };
          });
          this.setState((previousState) => {
            return {
              ...previousState,
              notes: previousState.notes.filter((note) => note.title.toLowerCase().includes(title.toLowerCase())),
            };
          });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        const notesDataBackUp = this.state.notesDataBackUp.filter((note) => note.id !== id);
        this.setState({ notes });
        this.setState({ notesDataBackUp: notesDataBackUp });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.find((note) => note.id === id);
        const notesDataBackUp = this.state.notesDataBackUp.find((note) => note.id === id);
        notes.archived = !notes.archived;
        notesDataBackUp.archived = notes.archived;
        this.setState((previousState) => {
          return {
            notes: [...previousState.notes],
            notesDataBackUp: [...previousState.notesDataBackUp],
          };
        });
    }

    onSubmitHandler({ title, body }) {
        this.setState((previousState) => {
          return {
            notes: [
              ...previousState.notes,
              {
                id: +new Date(),
                title,
                body,
                createdAt: "2022-04-14T04:27:34.572Z",
                archived: false,
              },
            ],
            notesDataBackUp: [
              ...previousState.notes,
              {
                id: +new Date(),
                title,
                body,
                createdAt: "2022-04-14T04:27:34.572Z",
                archived: false,
              },
            ],
          };
        });
    }

    render() {
        return (
            <div className="note-app">
                <NoteHeader onSearch={this.onSearchHandler} />
                <NoteBody addNote={this.onSubmitHandler} notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
            </div>
        );
    }
}