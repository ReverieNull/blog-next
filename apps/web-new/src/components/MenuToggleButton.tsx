// src/components/MenuToggleButton.tsx
import React from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import styles from '../assets/styles/MenuToggleButton.module.css';

interface MenuToggleButtonProps {
  onToggleMenu: () => void;
  isMenuOpen: boolean;
}

const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({
  onToggleMenu,
  isMenuOpen
}) => {
  return (
    <div className={styles.menuToggleButton}>
      <button 
        className={styles.toggleButton}
        onClick={onToggleMenu}
        aria-label={isMenuOpen ? "收起菜单" : "展开菜单"}
      >
        {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </button>
    </div>
  );
};

export default MenuToggleButton;