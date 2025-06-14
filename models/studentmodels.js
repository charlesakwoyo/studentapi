const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
   firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required']
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: [true, 'Gender is required']
    }
});

const Student = mongoose.model('student', studentSchema);
module.exports = Student;