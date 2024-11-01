const express = require('express');
const ConnectDB = require('./config/db');
const Individual = require('./Models/IndividualContestants');
const Groups = require('./Models/ContestantsGroups');
const Student = require('./Models/Student');
const session = require('express-session');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(cors());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

ConnectDB();

const fetchCompetitionsData = async () => {
    try {
        const response = await axios.get('https://external-api.com/competitions');
        return response.data; 
    } catch (error) {
        console.error('Error fetching competitions data:', error.message);
        throw new Error('Error fetching competitions data');
    }
};

app.get('/competitions', async (req, res) => {
    try {
        const competitionsData = await fetchCompetitionsData();
        res.status(200).json(competitionsData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching competitions data', error: error.message });
    }
});

app.post('/users/add', async (req, res) => {
    const { studentID, username, email, password, competitionType, selectedCompetitions, teamSelection } = req.body;
    try {
        const studentExists = await Student.findOne({ studentID });
        if (!studentExists) {
            return res.status(404).json({ message: 'Student ID not found' });
        }

        const currentContestantsCount = await Individual.countDocuments({ competitionType: 'Individual' });
        const maxContestants = 20;

        if (currentContestantsCount >= maxContestants) {
            return res.status(400).json({ message: 'No available seats for Individual Competitions.' });
        }

        const newUser = new Individual({
            studentID,
            username,
            email,
            password,
            competitionType,
            selectedCompetitions,
            teamSelection
        });

        await newUser.save();
        res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error adding user', error: error.message });
    }
});

app.post('/users/add-group', async (req, res) => {
    const { studentID, username, email, password, competitionType, selectedCompetitions, teamSelection } = req.body;

    try {
        const studentExists = await Student.findOne({ studentID });
        if (!studentExists) {
            return res.status(404).json({ message: 'Student ID not found' });
        }

        const currentGroupContestantsCount = await Groups.countDocuments({ competitionType: 'Group' });
        const maxGroupContestants = 20;

        if (currentGroupContestantsCount >= maxGroupContestants) {
            return res.status(400).json({ message: 'No available seats for Group Competitions.' });
        }

        const newGroupUser = new Groups({
            studentID,
            username,
            email,
            password,
            competitionType,
            selectedCompetitions,
            teamSelection
        });

        await newGroupUser.save();
        res.status(201).json({ message: 'User added to group successfully', user: newGroupUser });
    } catch (error) {
        res.status(500).json({ message: 'Error adding group user', error: error.message });
    }
});

app.post('/users/login', async (req, res) => {
    const { studentID } = req.body;
    try {
        const user = await Individual.findOne({ studentID }) || await Groups.findOne({ studentID });
        if (!user) {
            return res.status(404).json({ message: 'User is not signed up' });
        }

        req.session.user = {
            username: user.username,
            score: user.score || 0,
            teamType: user.teamType || null
        };

        res.status(200).json({ message: 'Login successful', user: req.session.user, userID: user.studentID });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
});

app.post('/users/save-score', async (req, res) => {
    const { studentID, score } = req.body;

    try {
        const user = await Individual.findOne({ studentID }) || await Groups.findOne({ studentID });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.score = (user.score || 0) + score; 
        await user.save();

        console.log(`User: ${user.username}, New Score: ${user.score}`);
        res.status(200).json({ message: 'Score saved successfully', score: user.score });
    } catch (error) {
        console.error('Error saving score:', error); 
        res.status(500).json({ message: 'Error saving score', error: error.message });
    }
});

app.get('/competitions/availability', async (req, res) => {
    try {
        const maxContestantsIndividual = 20;
        const maxContestantsGroup = 20;

        const currentIndividualCount = await Individual.countDocuments({});
        const currentGroupCount = await Groups.countDocuments({});

        const availableIndividualSeats = maxContestantsIndividual - currentIndividualCount;
        const availableGroupSeats = maxContestantsGroup - currentGroupCount;

        res.status(200).json({
            availableIndividualSeats: availableIndividualSeats >= 0 ? availableIndividualSeats : 0,
            availableGroupSeats: availableGroupSeats >= 0 ? availableGroupSeats : 0
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching availability', error: error.message });
    }
});

app.get('/users/individual', async (req, res) => {
    try {
        const individuals = await Individual.find({})
            .select('username score studentID')
            .limit(20) 
            .lean(); 
        res.status(200).json(individuals);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching individual contestants', error: error.message });
    }
});


app.get('/users/groups', async (req, res) => {
    try {
        const groups = await Groups.find({});
        res.status(200).json(groups);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching group contestants', error: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.delete('/users/remove-all', async (req, res) => {
    try {
        await Individual.deleteMany({});
        await Groups.deleteMany({});
        res.status(200).json({ message: 'All users removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing users', error: error.message });
    }
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
