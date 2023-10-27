import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = (props) => {
  const initialNote = {title: "", description: "", tag: ""}
  const context = useContext(NoteContext);
  const {addNote} = context;
  const [note, setNote] = useState(initialNote)

  const handleChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value});
  };
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""})
    props.showAlert("Note added Successfully!", "success")
  };
  
  return (
    <div>
      <h2>Add New Note</h2>
      <form className='pb-4'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" className="form-control" onChange={handleChange} id="title" name="title" value={note.title} aria-describedby="titleHelp" />
          <div id="titleHelp" className="form-text">Title should be more than 3 character</div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea type="text" className="form-control" onChange={handleChange} id="description" name='description' value={note.description} rows={5} />
        </div>
        <div className="mb-3">
        <label htmlFor="tag" className="form-label">Tag:</label>
          <input type="text" className="form-control" onChange={handleChange} id="tag" name="tag" value={note.tag} />
        </div>
        <button disabled={note.title.length<3 || note.description.length<5 } type="submit" className="btn btn-primary" onClick={handleClick}>Save Note</button>
      </form>
    </div>
  )
}

export default AddNote
