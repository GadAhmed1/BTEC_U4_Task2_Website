const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: false 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    competitionType: {
        type: String,
        enum: ['Team', 'Individual'], 
        required: true
    },
    selectedCompetitions: {
        type: [String], 
        required: true
    },
    teamSelection: {
        type: String,
        required: function() {
          return this.competitionType === 'Team';
        }
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    score: { 
        type: Number,
        default: 0,
    }
});

const User = mongoose.model('IndividualContestants', userSchema);
module.exports = User;
