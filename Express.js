const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [];

const waiting = [];

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'))
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'tables.html'))
});

app.get('/api/tables', (req, res) => {
    res.json(tables);
});

app.get('/api/waitlist', (req, res) => {
    res.json(waiting);
});

app.post('/api/tables', (req, res) => {
    const booking = req.body;

    console.log(booking);

    if (tables.length >= 5) {
        waiting.push(booking)
    }
    else {
        tables.push(booking);
    }

    res.end();
});

app.use('/api/img/fireIcon', express.static(path.join(__dirname, 'assets/hot icon.png')))

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));