import React from "react";

export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxLength: 50,
      remainingCharacter: 50,
    };
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onTitleChangeHandler(e) {
    this.setState((previousState) => {
      while (e.target.value.length <= this.state.maxLength) {
        return {
          ...previousState,
          title: e.target.value,
          remainingCharacter: this.state.maxLength - e.target.value.length,
        };
      }
    });
  }
  onBodyChangeHandler(e) {
    this.setState((previousState) => {
      return {
        ...previousState,
        body: e.target.value,
      };
    });
  }
  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        maxLength: 50,
        remainingCharacter: 50,
      };
    });
  }
  render() {
    return (
      <div>
        <form className="note-input" onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">Remaining Character: {this.state.remainingCharacter}</p>
          <input type="text" className="note-input__title" value={this.state.title} onChange={this.onTitleChangeHandler} placeholder="Note Title" required />
          <textarea className="note-input__body" value={this.state.body} onChange={this.onBodyChangeHandler} placeholder="Write your Note..." required></textarea>
          <button type="submit" className="note-input__button">
            <p>Add Note</p>
          </button>
        </form>
      </div>
    );
  }
}
