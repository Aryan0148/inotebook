import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const noteInitial = [
    {
      _id: "66557f6fb594c5e4e06d0fd2",
      user: "665034f30e5606cb7ac8d91c",
      title: "Aryan",
      description: "Good Morning",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "665583577ce82a35793758b3",
      user: "665034f30e5606cb7ac8d91c",
      title: "Aryan",
      description: "Good Afternoon",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "665583577ce82a35793758b33",
      user: "665034f30e5606cb7ac8d91c",
      title: "Aryan",
      description: "Good Afternoon",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "665583577ce382a35793758b3",
      user: "665034f30e5606cb7ac8d91c",
      title: "Aryan",
      description: "Good Afternoon",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "665583577ce82a357393758b3",
      user: "665034f30e5606cb7ac8d91c",
      title: "Aryan",
      description: "Good Afternoon",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "665583577c3e82a35793758b3",
      user: "665034f30e5606cb7ac8d91c",
      title: "Aryan",
      description: "Good Afternoon",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "665583577ce82a353793758b3",
      user: "665034f30e5606cb7ac8d91c",
      title: "Aryan",
      description: "Good Afternoon",
      tag: "Personal",
      __v: 0,
    },
    {
      _id: "665583577ce82a357937583b3",
      user: "665034f30e5606cb7ac8d91c",
      title: "Aryan",
      description: "Good Afternoon",
      tag: "Personal",
      __v: 0,
    },
  ];

  const [notes, setnotes] = useState(noteInitial);

  // ADD NOTE

  const addNote = (title, description, tag) => {
    console.log("adding new note");
    const note = {
      _id: "6655835677ce82a35793758b3",
      user: "665034f30e5606cb7ac8d91c",
      title: title,
      description: description,
      tag: "Personal",
      __v: 0,
    };
    setnotes(notes.concat(note));
  };

  // DELETE NOTE

  const deleteNote = (id) => {
    console.log("Delete note:"+id);
    const newNotes = notes.filter((note) =>{return note._id!==id});
    setnotes(newNotes);
  };

  // edit NOTE
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
