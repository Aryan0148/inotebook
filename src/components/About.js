import React, { useContext,useEffect } from "react";
import noteContext from "../context/notes/noteContext";

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    setTimeout(() => {
      a.update();
    }, 1000);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      My name is {a.state.name} & class is {a.state.class}
    </div>
  );
};

export default About;
