const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
        name: 'Silvia',
        phone: '12345',
        email: 'silvia@email.com',
        id: '54321'
    }
];



// Routes
app.get('/', (req, res) => {
    res.send('Listenin at PORT');
});

app.get('/api/tables', (req, res) => {
    res.json(tables);
});

app.post('/api/tables', (req, res) => {
    const booking = req.body;

    console.log(booking);

    tables.push(booking);

    res.json(tables);
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));