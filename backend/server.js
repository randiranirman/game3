

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'details'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
});

app.post('/login', (req, res) => {
    const { username, email, password } = req.body;
    console.log(username,email,password);
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err) => {
        if (err) throw err;
        res.send('User added successfully');
    });
});

// New endpoint to fetch game news
app.get('/game-news', async ( res) => {
    try {
        const response = await fetch('https://gaming-news2.p.rapidapi.com/news?locale=en_KE&country=en&language=en&timezone=%2B01%3A00', {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b77e384fb4msh0a748b4dca067e1p1d0e7cjsne5c2e71f2326',
                'x-rapidapi-host': 'gaming-news2.p.rapidapi.com'
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching game news:', error);
        res.status(500).send('Error fetching game news');
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
