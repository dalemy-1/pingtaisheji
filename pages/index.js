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
        console.log("Fetched data:", data);  // 添加调试日志
        setData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Supabase</h1>
      <ul>
        {data.length > 0 ? (
          data.map((item, index) => (
            <li key={index}>{item.name} - {item.email}</li>
          ))
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </div>
  );
}
