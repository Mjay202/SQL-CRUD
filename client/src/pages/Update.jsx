import axios from "axios";
import React, { useState } from "react";
import { useNavigate , useLocation} from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  const [book, setbook] = useState({
    title: "",
    desc: "",
    price: "",
  });

 

  const handleChange = (e) => {
    setbook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:7000/books/" +bookId, book);
      navigate("/books");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(book);
  return (
    <div className="add">
      <h1> Update books here</h1>

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

      <button onClick={handleClick}>Update </button>
    </div>
  );
};

export default Update;
