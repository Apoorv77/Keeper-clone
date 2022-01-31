import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from '@material-ui/core/Fab';
import { Zoom } from "@material-ui/core";
function CreateArea(props) {
  const [note,setNote]=useState({title:"",content:""});
  const [isExpanded,setIsExpanded] = useState(false);

  function handleChange(event){
    const newValue = event.target.value;
    const property = event.target.name;
    setNote(prevNote =>{
      return {...prevNote,[property]:newValue}
    });
  }

  function expand(){
    setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
       {isExpanded && <input name="title" onChange={handleChange} value ={note.title} placeholder="Title" />}
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isExpanded?"3":"1"} onClick={expand} />
        <Zoom in={isExpanded}>
        <Fab  onClick={()=>{
          props.addNote(note);
          setNote({title:"",content:""});
        }}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
