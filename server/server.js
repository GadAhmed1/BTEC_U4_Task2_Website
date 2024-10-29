const express = require('express');
const ConnectDB = require('./config/db');
const Individual = require('./Models/IndividualContestants');
const Groups = require('./Models/ContestantsGroups');
const Student = require('./Models/Student');
const bcrypt = require('bcrypt');
const session = require('express-session');
const CORS = require('cors');

const app = express();

app.use(express.json());
app.use(CORS());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

ConnectDB();

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

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

        const hashedPassword = await hashPassword(password);

        const newUser = new Individual({
            studentID,
            username,
            email,
            password: hashedPassword,
            competitionType,
            selectedCompetitions,
            teamSelection
        });

        await newUser.save();
        res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
        console.error('Error adding user:', error);
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

        const hashedPassword = await hashPassword(password);

        const newGroupUser = new Groups({
            studentID,
            username,
            email,
            password: hashedPassword,
            competitionType,
            selectedCompetitions,
            teamSelection
        });

        await newGroupUser.save();
        res.status(201).json({ message: 'User added to group successfully', user: newGroupUser });
    } catch (error) {
        console.error('Error adding group user:', error);
        res.status(500).json({ message: 'Error adding group user', error: error.message });
    }
});

app.post('/users/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        console.log(`Attempting to log in user: ${username}`); // قم بتسجيل اسم المستخدم

        const user = await Individual.findOne({ username }) || await Groups.findOne({ username });

        console.log('User found:', user); // تحقق مما إذا كان المستخدم موجودًا

        if (!user) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Invalid password');
            return res.status(401).json({ message: 'Invalid password' });
        }

        req.session.user = {
            username: user.username,
            score: user.score || 0,
            teamType: user.teamType || null
        };

        console.log('Login successful:', req.session.user);
        res.status(200).json({ message: 'Login successful', user: req.session.user });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in', error: error.message });
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
        console.error('Error fetching availability:', error);
        res.status(500).json({ message: 'Error fetching availability', error: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log(`START LISTEN ON PORT 3000`);
});
