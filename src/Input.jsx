import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function Input(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <div className="form">
      {clicked && (
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      )}
      <textarea
        name="content"
        id=""
        cols="30"
        rows={clicked ? "3" : "1"}
        placeholder="Take a note..."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        onClick={() => {
          setClicked(true);
        }}
      ></textarea>
      <Zoom in={clicked}>
        <Fab
          onClick={() => {
            const newNote = {
              title: title,
              content: content,
            };
            props.addNote(newNote);
            setTitle("");
            setContent("");
          }}
        >
          <AddIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default Input;
