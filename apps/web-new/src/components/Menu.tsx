// src/components/Menu.tsx
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu as AntMenu, Drawer } from 'antd';

import { items } from '../config/menuItems';

import styles from '../assets/styles/Menu.module.css';
import style1 from '../assets/styles/Layout.module.css';
import style2 from '../assets/styles/header.module.css';
import style3 from '../assets/styles/content.module.css';


// 主题列表
const themes = {
  light: '/themes/light.jpg',
  dark:  '/themes/dark.jpg',
  neon:  '/themes/neon.jpg',
} as const;

type ThemeName = keyof typeof themes;

const AppMenu: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeName>('light');

  // 初始化
  useEffect(() => {
    const saved = localStorage.getItem('theme') as ThemeName;
    if (saved && themes[saved]) setTheme(saved);
  }, []);


  // 注入背景
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-bg', `url(${themes[theme]})`);
  }, [theme]);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
    if (window.innerWidth <= 768) setDrawerOpen(false);
  };

  return (
    <>
      {/* 顶部主题切换条 */}


      {/* 左侧菜单 */}
      <div className={`${styles.menuLayout}`}>
        <aside className={styles.menuWrapper}>
          <div className={styles.menuScrollContainer}>
            <AntMenu
              onClick={onClick}
              mode="inline"
              items={items}
              inlineIndent={24}
              style={{ width: 200 }}
            />
          </div>
        </aside>

        <main
          className={` ${styles.menuContent} ${style1.menuContent} ${style2.menuContent} ${style3.menuContent}`}
        >
          <div className={style3.contentWrapper}>
          <Outlet />
          </div>

        </main>
      </div>

      <Drawer
        className={styles.mobileDrawer}
        placement="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        closable={false}
      >
        <div className={styles.menuInner}>
          <AntMenu
            onClick={onClick}
            mode="inline"
            items={items}
            inlineIndent={24}
            style={{ width: '100%', border: 'none', background: 'transparent' }}
          />
        </div>
      </Drawer>
    </>
  );
};

export default AppMenu;
