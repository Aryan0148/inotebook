const express = require("express");
const routes = express.Router();
const Notes = require("../models/notes");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middlware/fetchuser");

//Route 1: For fetch all notes get:/api/notes/fetchNotes

routes.get("/fetchNotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("some error occur...!");
  }
});

//Route 2: For Add new note post:/api/notes/addNote

routes.post(
  "/addNote",
  fetchuser,
  [
    body("title", "Enter valid Title").isLength({ min: 3 }),
    body("description", "Enter a description minimum 5 charcter").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const notes = await Notes.create({
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag,
        user: req.user.id,
      });
      res.send(notes);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send("some error occur...!");
    }
  }
);
//Route 3: For update exits note put:/api/notes/updatenote

routes.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndUpdate(req.params.id,{ $set: newNote },{ new: true });
    res.json({ note });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("some error occur...!");
  }
});

//Route 4: For delete exits note put:/api/notes/deletenote

routes.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ "success:":"Note has been deleted",note:note });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("some error occur...!");
  }
});

module.exports = routes;
