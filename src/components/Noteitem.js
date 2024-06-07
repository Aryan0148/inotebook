import React from "react";

const Noteitem = (props) => {
  const note = props.note;
  return (
    <div className="col-md-3">
      <div className="card m-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-trash mx-1"></i>
          <i className="fa-regular fa-pen-to-square mx-1"></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
