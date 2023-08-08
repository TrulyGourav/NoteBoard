import {React, useState} from "react";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

function EditNote(props){
    const [note, setNote] = useState({
        title: props.title,
        content: props.content
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
        props.onSave(note);
        props.onCancel();
        event.preventDefault();
    }
    function cancelNote(){
        props.onCancel();
    }

    return <div>
        <form className="edit-note">
            <input 
                name="title" 
                value={note.title}
                onChange={handleChange}
                placeholder="Edit Title"
                
            />
            <textarea 
                name="content"
                value={note.content}
                onChange={handleChange}
                placeholder="write your edited note here!"
                rows="3"
            />
            <button onClick={submitNote} ><BookmarkAddedIcon style={{ fontSize: '30px', color: '#0f0d3d'}}/></button>
            <button onClick={cancelNote} style={{marginLeft: '20px'}}><DisabledByDefaultIcon style={{ fontSize: '30px', color: '#0f0d3d'}}/></button>
        </form>
    </div>
}
export default EditNote;