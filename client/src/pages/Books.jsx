import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




const Books = () => {

    const [books, setbooks] = useState([]);

    const handleClick = async (id) => {

        try {
            await axios.delete("http://localhost:7000/books/" + id);
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
      
        const fetchData = async () => {
            
            try {

                const res = await axios.get("http://localhost:7000/books");
                console.log(res.data);
                setbooks(res.data);

            } catch (err) {
                console.log(err);
            }
            
        }

        fetchData();
      
    }, [])
    


    return (
      <div className="list">
        <h1>LIST OF BOOKS</h1>
        <div className="books">
          {books.map((book) => (
            <div className="book" key={book.id}>
              <div>Title: {book.title}</div>
              <div>Description: {book.desc}</div>
              <div>Price: {book.price}</div>
              <Link>
                <button>Update</button>
              </Link>
              <Link>
                <button onClick={handleClick(book.id)}>Delete</button>
              </Link>
            </div>
          ))}
        </div>

        <div className="new">
          <Link to={'/add'}>
            <button>Add new book here</button>
          </Link>
        </div>
      </div>
    );
}

export default Books