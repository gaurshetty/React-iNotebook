import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const {deleteNote} = context;
  const { note, updateNote } = props;

  return (
    <div className='col-md-3'>
      <div className="card my-3">
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
          <span className="badge bg-danger">{note.tag}</span>
        </div>
        <h5 className="card-header">{note.title}</h5>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className='text-start'>
              <p className='text-muted'>{new Date(note.date).toGMTString().slice(0,17)}</p>
            </div>
            <div className="text-end">
              <i className="fa-solid fa-pen-to-square mx-2" onClick={() => {updateNote(note)}} style={{color: "blue"}}></i>
              <i className="fa-solid fa-trash-can" onClick={() => {deleteNote(note._id); props.showAlert("Note deleted successfully!", "success")}} style={{color: "#c20f0f"}}></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  )
}

export default NoteItem
