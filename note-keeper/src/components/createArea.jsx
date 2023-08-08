import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const{name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value 
            }
        })
    }
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
        
    }

    return (
    <div>
        <form className="create-note">
            <input 
                name="title" 
                onChange={handleChange}
                placeholder="Title" 
                value={note.title} 
            />
            <textarea 
                name="content" 
                onChange={handleChange}
                placeholder="write your note here!" 
                value={note.content} 
                rows="3" 
            />
            <button onClick={submitNote}><AddIcon style={{ fontSize: '40px' }}/></button>
        </form>
    </div>
    )
}

export default CreateArea;