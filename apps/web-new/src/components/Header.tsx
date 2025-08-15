// src/components/LayoutComponents/Header.tsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import styles from '../assets/styles/header.module.css';

type Theme = 'light' | 'dark' | 'eye';

export const Header: React.FC = () => {
  const [mode, setMode] = useState<Theme>('light');
  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme && ['light', 'dark', 'eye'].includes(savedTheme)) {
      setMode(savedTheme);
      document.body.setAttribute('data-theme', savedTheme);
    }
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      // 在桌面端自动关闭菜单
      if (window.innerWidth > 768) {
        setHeaderMenuOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const switchTheme = (t: Theme) => {
    setMode(t);
    document.body.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
  };

  const menuItems = [
    { path: '/app/frontend', label: '前端' },
    { path: '/app/harmonyos', label: '鸿蒙' },
    { path: '/app/llm', label: '大模型' },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.leftContent}>
          <NavLink to="/" className={styles.logo} onClick={() => setHeaderMenuOpen(false)}>
            净秋前端指南
          </NavLink>

          {/* 汉堡按钮 - 只在移动端显示 */}
          {isMobile && (
            <button
              aria-label={headerMenuOpen ? "收起导航菜单" : "展开导航菜单"}
              className={`${styles.headerMenuToggle} ${headerMenuOpen ? styles.active : ''}`}
              onClick={() => setHeaderMenuOpen(!headerMenuOpen)}
            >
              <MenuOutlined />
            </button>
          )}

          <div className={`${styles.navLinks} ${headerMenuOpen ? styles.mobileOpen : ''}`}>
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={styles.navLink}
                onClick={() => setHeaderMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* 主题按钮 */}
        <div className={`${styles.rightContent} ${isMobile ? styles.mobileRight : ''}`}>
          <button
            className={`${styles.modeToggleBtn} ${mode === 'light' ? styles.active : ''}`}
            onClick={() => switchTheme('light')}
            title="明亮"
            aria-label="切换到明亮模式"
          >
            <span className={styles.icon}>☀️</span>
          </button>
          <button
            className={`${styles.modeToggleBtn} ${mode === 'dark' ? styles.active : ''}`}
            onClick={() => switchTheme('dark')}
            title="暗色"
            aria-label="切换到暗色模式"
          >
            <span className={styles.icon}>🌙</span>
          </button>
          <button
            className={`${styles.modeToggleBtn} ${mode === 'eye' ? styles.active : ''}`}
            onClick={() => switchTheme('eye')}
            title="护眼"
            aria-label="切换到护眼模式"
          >
            <span className={styles.icon}>🌿</span>
          </button>
        </div>
      </nav>
    </header>
  );
};