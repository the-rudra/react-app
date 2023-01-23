import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Input from "./Input";
import { useState } from "react";

function App() {
  const [note, setNote] = useState([]);

  function addNote(newNote) {
    setNote((prevItems) => {
      return [...prevItems, newNote];
    });
  }

  function deleteNote(id) {
    setNote((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Input addNote={addNote} />
      {note.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
