// src/components/LayoutComponents/Layout.tsx
import React  from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import style1 from'../assets/styles/Layout.module.css';
import style2 from '../assets/styles/header.module.css';
import style3 from '../assets/styles/content.module.css';

const Layout: React.FC = () => {

  return (
    <div className={`${style1.content} ${style2.content} ${style3.content}`}>
      <Header />
      <Outlet />


    </div>
  );
};

export default Layout;
