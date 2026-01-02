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
