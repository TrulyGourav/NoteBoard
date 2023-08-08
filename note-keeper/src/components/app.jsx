import React, {useEffect, useState} from 'react';
import Header from './header';
import Footer from './footer';
import Note from './note';
import CreateArea from './createArea';


function App(){
    const [notes, setNotes] = useState([])

    useEffect(()=>{
        fetch("http://54.235.53.142:8080/noteboard/all")
        .then(res=>res.json())
        .then((result)=>{
            setNotes(result)
        })
    },[])

     
    function addNote(note){
        /*
        setNotes(prevNotes =>{
            return [...prevNotes, note];
        })  */

        /*Below code for sending data(adding note) to Backend*/
        if(notes.length < 50 ){
            fetch("http://54.235.53.142:8080/noteboard/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(note)
            }).then((addedNoteId)=>{
                fetch("http://54.235.53.142:8080/noteboard/all")
                .then(res => res.json())
                .then(result => {
                setNotes(result);
                console.log("Note Deleted!");
                })    /**show added note instantly */
                console.log("Note Added!")
            }).catch(error => {
                console.log("Error in adding the note");
            });
        }
        else{
            alert("Maximum limit reached!\nDelete some notes and then try to add.")
        }
    } 

    function deleteNote(id){
        /*
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem, index)=>{
                return index !== id;
            })
        })  */

        /*Below code for deleting data in Backend*/
        fetch(`http://54.235.53.142:8080/noteboard/remove/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(() => {
            fetch("http://54.235.53.142:8080/noteboard/all")
        .then(res => res.json())
        .then(result => {
          setNotes(result);
          console.log("Note Deleted!");
        })
        .catch(error => {
          console.log("Error fetching notes:", error);
        });
        })
        .catch(error => {
            console.log("Error in deleting note:", error);
        });

    }
    return <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.reverse().map((noteItem) => {
            return <Note
            /** Frontend code below
            key={index}
            id={index} */
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content} 
            onDelete={() => deleteNote(noteItem.id)}/>
        })}
        <Footer />        
    </div>
}
export default App;