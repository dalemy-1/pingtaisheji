// pages/index.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    const { data, error } = await supabase
      .from('contacts')
      .select('*');  // 确保查询正确的表

    console.log("Fetched data:", data);  // 查看控制台数据
    
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
      
      {/* 使用 Font Awesome 图标按钮 */}
      <button>
        <i className="fas fa-search"></i> Search
      </button>

      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name} - {item.email}</li>
        ))}
      </ul>
    </div>
  );
}
