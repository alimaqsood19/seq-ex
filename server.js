const express = require('express');
const app = express();
const sequelize = require('./config/connection');
const User = require('./models/User');

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    return res.status(200).json('hello world');
})

// READ - GET
app.get('/users', (req, res) => {
    User.findAll().then(users => {
        return res.json(users);
    }).catch(err => {
        return res.json(err);
    })
})

// CREATE - POST
app.post('/users', (req, res) => {
    const { username, email } = req.body;

    User.create({username, email}).then(users => {
        return res.json(users);
    }).catch(err => {
        return res.json(err);
    })
})

// UPDATE

// DELETE

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
})