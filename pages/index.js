// pages/index.js
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const itemsPerPage = 5;  // 每页展示5条数据
      const { data, error, count } = await supabase
        .from('contacts')
        .select('*', { count: 'exact' })
        .order('name', { ascending: sortOrder === 'asc' })
        .range((page - 1) * itemsPerPage, page * itemsPerPage - 1);  // 分页查询

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(data);
      }
      setLoading(false);
    };

    fetchData();
  }, [page, sortOrder]);

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleSortToggle = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div>
      <h1>Data from Supabase</h1>
      <button onClick={handleSortToggle}>
        Sort by Name ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.name} - {item.email}
            </li>
          ))}
        </ul>
      )}

      <div>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}
