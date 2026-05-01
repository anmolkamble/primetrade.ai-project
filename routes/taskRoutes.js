const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// CREATE
router.post("/", auth, async(req, res) => {
    const task = await Task.create({
        ...req.body,
        userId: req.user.id
    });
    res.json(task);
});

// READ
router.get("/", auth, async(req, res) => {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
});

// UPDATE
router.put("/:id", auth, async(req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json(task);
});

// DELETE
router.delete("/:id", auth, async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json("Deleted");
});

module.exports = router;