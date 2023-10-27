import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props) => {
    const host = "http://localhost:5000"
    const initialNotes = []
    const [notes, setNotes] = useState(initialNotes);
    // API CALL TO GET ALL NOTES:
    const getNotes = async() => {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token'),
        } 
      });
      const result = await response.json()
      if(result.error) {
        alert(result.error)
      }else {
        setNotes(result)
      }
    };
    // API CALL TO ADD NOTE:
    const addNote = async(title, description, tag="General") => {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({title, description, tag})
      });
      const result = await response.json()
      console.log(result)
      getNotes()
    };
    // API CALL TO EDIT NOTE:
    const editNote = async(id, title, description, tag) => {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({title, description, tag})
      });
      const result = await response.json()
      console.log(result)
      getNotes()
    };
    // API CALL TO DELETE NOTE:
    const deleteNote = async(id) => {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token'),
        }
      });
      const result = await response.json()
      console.log(result)
      getNotes()
    };


    return (
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;