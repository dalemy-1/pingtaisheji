// pages/index.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';  // 引入 Supabase 客户端

export default function Home() {
  const [data, setData] = useState([]);  // 设置数据状态

  useEffect(() => {
    // 获取数据并更新状态
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('contacts')  // 替换成你的 Supabase 表名
        .select('*');

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
          <li key={index}>{item.name} - {item.email}</li>  {/* 替换成你的数据字段 */}
        ))}
      </ul>
    </div>
  );
}
