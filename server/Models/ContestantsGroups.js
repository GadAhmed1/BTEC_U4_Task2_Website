const mongoose = require('mongoose');

const competitionUserSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    competitionType: {
        type: String,
        enum: ['Team', 'Individual'],
        required: true,
    },
    selectedCompetitions: {
        type: [String], 
        required: true,
    },
    teamSelection: {
        type: String,
        required: true, 
    },
    score: { 
        type: Number,
        default: 0, 
    }
}, {
    timestamps: true,
});

const CompetitionUser = mongoose.model('contestantsGroups', competitionUserSchema);

module.exports = CompetitionUser;
