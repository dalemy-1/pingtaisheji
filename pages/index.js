// pages/index.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('contacts')  // 使用正确的表名
        .select('*');  // 获取所有列的数据

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
          // JSX 注释应该在标签外部
          <li key={index}>{item.name} - {item.email}</li>
        ))}
      </ul>
    </div>
  );
}
