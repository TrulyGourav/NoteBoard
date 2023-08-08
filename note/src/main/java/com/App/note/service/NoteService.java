package com.App.note.service;

import com.App.note.model.Note;
import com.App.note.repository.NoteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class NoteService {

    @Autowired
    NoteRepo noteRepo;

    public String addNote(Note note){
        if(noteRepo.existsById(note.getId())){
            return "Error; Note not saved successfully";
        }
        else{
            try{
                noteRepo.save(note);
            }
            catch(Exception e){
                return "Error; Note not saved successfully";
            }
            return "Note successfully saved";
        }
    }

    public List<Note> findALl(){
        return noteRepo.findAll();
    }

    public String updateNote(int id, Note note) {
        Optional<Note> optionalNote = noteRepo.findById(id);
        if (optionalNote.isEmpty()) {
            return "Note not found";
        }
        Note noteDummy = optionalNote.get();
        noteDummy.setTitle(note.getTitle());
        noteDummy.setContent(note.getContent());
        noteRepo.save(noteDummy);
        return "updated";
    }
}
