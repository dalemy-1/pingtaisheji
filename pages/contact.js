// pages/contact.js
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [name, setName] = useState('');  // 姓名状态
  const [email, setEmail] = useState('');  // 邮箱状态

  const handleSubmit = async (e) => {
    e.preventDefault();  // 阻止默认表单提交行为

    const { data, error } = await supabase
      .from('contacts')  // 替换成你的数据库表名
      .insert([
        { name: name, email: email }  // 提交的数据
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
          onChange={(e) => setName(e.target.value)}  // 更新姓名状态
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // 更新邮箱状态
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
