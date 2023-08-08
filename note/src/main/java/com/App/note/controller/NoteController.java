package com.App.note.controller;

import com.App.note.model.Note;
import com.App.note.repository.NoteRepo;
import com.App.note.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/noteboard")
@CrossOrigin
public class NoteController {

    @Autowired
    NoteService noteService;

    @Autowired
    NoteRepo noteRepo;

    @PostMapping("/add")
    public String add(@RequestBody Note note){
        return noteService.addNote(note);
    }

    @GetMapping("/all")
    public List<Note> getAll(){
        return noteService.findALl();
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable int id, @RequestBody Note note){
        return noteService.updateNote(id, note);
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<List<Note>> remove(@PathVariable int id){
        try {
            noteRepo.deleteById(id);
            List<Note> updatedNotes = noteService.findALl();
            return ResponseEntity.status(HttpStatus.OK).body(updatedNotes);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
