import axios from "axios";
import React, { useState } from "react";
import "./Contact.css";
import contactImage from "../Images/contact.gif";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      if(response.data.status === 200){
        toast.success(response.data.message)
      }else{
        toast.error(response.data.message)
      }
    }).catch((error) => {
       toast.error(error)
    })
    setFormData(initialFormData);
  }

  return (
    <div className="contactPage">
      <div className="wrapper">
        <h2> How can we help you?</h2>
        <p>
          Thank you for your interest. Please use this form to contact us. We
          will get back to you as soon as we can.
        </p>
        <div className="divide">
          <div className="imageDiv">
            <img src={contactImage} />
          </div>
          <form onSubmit={handlSubmit}>
            <h2>Contact Us</h2>
            <div className="nameDiv">
              <input
                className="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name..."
                required
              />
              <input
                className="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name..."
                required
              />
            </div>
            <input
              className="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              className="phone"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile"
              required
            />
            {/* <input type="file" name="file" onChange={handleChange} /> */}

            <textarea
              className="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default Contact;
