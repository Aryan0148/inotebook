import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const s1 = {
    name: "aryan",
    class: "5b",
  };

  const [state, setstate] = useState(s1);

  const update = () => {
    setstate({name:"ARYAN",class:"10A"});
  }
  return (
    <NoteContext.Provider value={{state,update}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
