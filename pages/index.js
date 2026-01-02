// pages/index.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('name', { ascending: true });  // 按照 name 排序

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Supabase</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name} - {item.email}</li>
        ))}
      </ul>
    </div>
  );
}
