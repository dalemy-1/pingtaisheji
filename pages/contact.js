// pages/contact.js
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('contacts')  // Replace with your table name
      .insert([
        { name: name, email: email }
      ]);

    if (error) {
      alert('Error saving data!');
      console.error(error);
    } else {
      alert('Data saved successfully!');
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
