import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const [notes,setNotes] = useState([]);
  function addNote(note){
    setNotes(prevNotes => [...prevNotes,note]);
  }

  function deleteNote(id){
    setNotes(prevNotes => prevNotes.filter((note,index) => index !== id));
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      <div>
      {notes.map((note,id) => <Note key={id} id={id} title={note.title} content={note.content} delete={deleteNote} />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
