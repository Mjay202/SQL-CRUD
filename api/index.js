import express from 'express';
import mysql from 'mysql2';


const app = express();


app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#Ultimate202',
    database: 'test'
})



app.listen(7000, () => {
    console.log("Connected successfully")
});


app.get('/books', (req, res) => {

    const q = 'SELECT * FROM books';
    db.query(q, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data);
    })

    
});

app.post('/books', (req, res) => {

    const q = 'INSERT INTO books VALUES (?)'

    const values = ['title from api', 'desc from api', 'price from api']

    db.query(q, [values], (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data);
    })

    
})

