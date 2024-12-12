// import React from 'react';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Contact.css'

//Invoke Contact
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Message sent!');
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
        />
        {errors.name && <span>{errors.name}</span>}
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
        />
        {errors.email && <span>{errors.email}</span>}
        <textarea 
          name="message" 
          placeholder="Your message" 
          value={formData.message} 
          onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
        />
        {errors.message && <span>{errors.message}</span>}
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;