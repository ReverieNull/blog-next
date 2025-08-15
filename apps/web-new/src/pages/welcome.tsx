// src/pages/WelcomePage.tsx
import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.css'; // 引入样式文件

export default function Welcome() {
  return (
    <>
      <main className={styles.frontendWelcome}>
        <div className={styles.ownBox}>
          <h1 className={styles.welcomeTitle}>欢迎来到我的前端指南</h1>
          <div className={styles.welcomeButtons}>
            <Link to="/app/frontend" className={styles.welcomeBtn}>前端</Link>
            <Link to="/app/harmonyos" className={styles.welcomeBtn}>鸿蒙</Link>
            <Link to="/app/LLM" className={styles.welcomeBtn}>大模型</Link>
          </div>
        </div>
      </main>
    </>
  );
}
