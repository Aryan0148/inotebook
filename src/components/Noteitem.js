import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const note = props.note;
  const updateNote = props.updateNote;
  return (
    <div className="col-md-3">
      <div className="card m-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <button className="btn" onClick={ () =>{ deleteNote(note._id) } }><i className="fa-solid fa-trash mx-1"></i></button>
          <button className="btn" onClick={ () =>{ updateNote(note) } }><i className="fa-regular fa-pen-to-square mx-1"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
