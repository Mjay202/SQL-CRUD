import React, { useEffect, useState } from 'react';
import axios from 'axios';




const Books = () => {

    const [books, setbooks] = useState([]);
    
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
     
    
    
        <div className='list'>

            <h1>LIST OF BOOKS</h1>
            <div className='books'>

            {books.map((book) => (
                <div className='book' key={book.id}>


                    <div>Title: {book.title}</div>
                    <div>Description: { book.desc}</div>
                    <div>Price: { book.price}</div>
                </div>
            ))}
            </div>
    
    
    
        </div>
  )
}

export default Books