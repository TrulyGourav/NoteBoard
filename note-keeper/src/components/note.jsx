import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EditNote from './EditNote';

function Note(props){
    const [editState, setEditState] = useState(false);

    function handleDelete(){
        props.onDelete(props.id);
    }
    function handleEditNote(){
        setEditState(true);
    }
    function cancelEditNote(){
        setEditState(false);
    }
    function saveNote(note) {
        console.log("printing note id: ", props.id)
        
        // Send the updated note to the server
        fetch(`http://54.235.53.142:8080/noteboard/update/${props.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(note),
        })
        .then(response => {
            if (response.ok) {
              // Note successfully updated on the server
              console.log('Note updated successfully');
            } else {
              // Handle the error if note update fails
              console.error('Failed to update note');
            }
        })
        .catch(error => {
            console.error('An error occurred while updating the note', error);
        });
        setEditState(false);
        window.location.reload();
    }            
        
    return <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleDelete}><DeleteIcon style={{ color: '#0f0d3d' }}/></button>
        <button onClick={handleEditNote}><DriveFileRenameOutlineIcon style={{ color: '#0f0d3d'}}/></button>
        {editState &&
            <div className="edit-note-container">
            <div className="edit-note-modal">
            <center><h3> Edit Your Note</h3></center>
            <EditNote 
            title={props.title}
            content={props.content}
            onCancel={cancelEditNote}
            onSave={saveNote} />
            </div>
            </div>
        }
            
    </div>
}
export default Note;