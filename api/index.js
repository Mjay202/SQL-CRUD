import express from 'express';
import mysql from 'mysql2';
import cors from 'cors'


const app = express();

app.use(cors())
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

    const q = 'INSERT INTO books (`title`, `desc`, `price`) VALUES (?)'

    const values = [
        req.body.title,
        req.body.desc,
        req.body.price]
    

    db.query(q, [values], (err, data) => {
        if (err) {
           return res.json(err);
        }
       return res.json('Added successfully');
    })
    
});

app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;

    const q = "DELETE FROM books WHERE id = ?"

    db.query(q, [bookId], (err, data) => {
        if (err) {
            return res.json(err)
        }
        return res.json("Book has been deleted successfully");
    })
});

app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;

    const q = 'UPDATE books SET `title`: ?, `desc` : ?, `price` : ? WHERE id = ?'

    const values = [
        req.body.title,
        req.body.desc,
        req.body.price]
    

    db.query(q, [...values, bookId], (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json('Updated successfully');
    })
    
});

