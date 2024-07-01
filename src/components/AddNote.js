import React, { useContext, useState} from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

const [note, setNote] = useState({title:"",description:"",tag:"default"})
    const handleClick = (e) => {
      e.preventDefault();
      addNote(note.title,note.description,note.tag);
      setNote({title:"",description:"",tag:""})
    }

    const onchange = (e) => {
      setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className="container my-3">
      <h2>Add Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label for="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onchange}
            minLength={5} 
            required
          />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onchange}
            minLength={5} 
            required
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
