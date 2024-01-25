import axios from "axios";
import React, { useState } from "react";
import "./Contact.css";


function Contact() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "", 
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(e) { 
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    
  }
  // console.log(formData)

  function handlSubmit(e) {
    e.preventDefault();
 

    console.log(formData);
    axios.post("http://localhost:8000/contact", formData)
    .then((response) => {
      console.log(response);
    });
    setFormData(initialFormData);
  }

  return (
    <div className="contact">
      <div className="formiv">
        <h2>Contact Us</h2>
        <p>We will get back to you asap!</p>
        <form ons onSubmit={handlSubmit} encType="multipart/form-data">
          <div className="nameDiv">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {/* <input type="file" name="file" onChange={handleChange} /> */}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
