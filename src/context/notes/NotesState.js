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
      _id: "665583577ce82a35793758b3",
      user: "665034f30e5606cb7ac8d91c",
      title: "Aryan",
      description: "Good Afternoon",
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
      _id: "665583577ce82a35793758b3",
      user: "665034f30e5606cb7ac8d91c",
      title: "Aryan",
      description: "Good Afternoon",
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
      _id: "665583577ce82a35793758b3",
      user: "665034f30e5606cb7ac8d91c",
      title: "Aryan",
      description: "Good Afternoon",
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

  ];

  const [notes, setnotes] = useState(noteInitial);

  // ADD NOTE

  const addNote = () => {

  }

  // DELETE NOTE

  const deleteNote = () => {

  }

  // UPDATE NOTE
  const updateNote = () => {
    
  }

  return (
    <NoteContext.Provider value={{notes,addNote,deleteNote,updateNote}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
