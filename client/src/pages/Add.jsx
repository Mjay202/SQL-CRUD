import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {

  const navigate = useNavigate()

  const [book, setbook] = useState({   
    title: "",
    desc: "",
    price: ""
   })
   
  const handleChange = (e) => {
    setbook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:7000/books", book);
      navigate("/books")
    } catch (err) {
      console.log(err)
    }
  }

console.log(book);
  return (
    <>
      <h1>Add new books here</h1>

      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="price"
        name="price"
        onChange={handleChange}
      />

      <button onClick={handleClick}>Add </button>
    </>
  );
}

export default Add