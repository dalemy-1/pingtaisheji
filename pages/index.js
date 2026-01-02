// pages/index.js
import Link from 'next/link'; // 引入 Link 组件

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Platform!</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
// pages/index.js
export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to My Platform!</h1>
      <p>Here is where the magic happens.</p>
    </div>
  );
}
// pages/index.js
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Platform!</h1>
      <p>Here is where the magic happens.</p>
    </div>
  );
}
// pages/index.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('your_table_name')  // 替换成你的数据库表名
        .select('*');
      
      if (error) console.error("Error fetching data:", error);
      else setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Supabase</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.column_name}</li>  {/* 替换成你的数据字段 */}
        ))}
      </ul>
    </div>
  );
}
