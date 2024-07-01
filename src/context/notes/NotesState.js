import NoteContext from "./noteContext";
import { useState } from "react";
 
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const noteInitial = [];
  const [notes, setnotes] = useState(noteInitial);

  // GET NOTE

  const getNote = async () => {
    //API Call
    console.log("hi");
    const response = await fetch(`${host}/api/notes/fetchNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MDM0ZjMwZTU2MDZjYjdhYzhkOTFjIn0sImlhdCI6MTcxNjg3ODYzMX0.FQlNh_Aaj08irwaeGgWtl8hyPV2sNI3l5BCe_vkvxOo",
      },
    });
    const json = await response.json();
    setnotes(json);
  };

  // ADD NOTEs

  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MDM0ZjMwZTU2MDZjYjdhYzhkOTFjIn0sImlhdCI6MTcxNjg3ODYzMX0.FQlNh_Aaj08irwaeGgWtl8hyPV2sNI3l5BCe_vkvxOo",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log("adding new note");
    setnotes(notes.concat(json));
  };

  // DELETE NOTE

  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MDM0ZjMwZTU2MDZjYjdhYzhkOTFjIn0sImlhdCI6MTcxNjg3ODYzMX0.FQlNh_Aaj08irwaeGgWtl8hyPV2sNI3l5BCe_vkvxOo",
      },
    });
    const json = await response.json();
    console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNotes);
  };

  // edit NOTE
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MDM0ZjMwZTU2MDZjYjdhYzhkOTFjIn0sImlhdCI6MTcxNjg3ODYzMX0.FQlNh_Aaj08irwaeGgWtl8hyPV2sNI3l5BCe_vkvxOo",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json =await response.json();
    console.log(json);
    //Logic to edit note
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setnotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNote, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
