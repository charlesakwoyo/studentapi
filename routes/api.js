const express = require("express");
const routes = express.Router();
const Student = require("../models/studentmodels");

// Get a list of students from the database
routes.get('/students', (req, res) => {
    res.send({ type: 'Get Request' });
});

// Add a student to the database
routes.post('/students', async (req, res, next) => {
    try {
        const student = new Student(req.body);
        const result = await student.save();
        res.send(result);
    } catch (error) {
        console.log(error.message);
       
    }
});

// Update a student in the database
routes.put('/students/:id', (req, res) => {
    res.send({ type: 'Update Request' });
});

// Delete a student from the database
routes.delete('/students/:id', async(req, res) => {
    const id = req.params.id
    try {
        const student = await Student.findByIdAndRemove(id)
        res.send(student);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = routes;