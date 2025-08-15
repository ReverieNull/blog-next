import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from '../assets/styles/Menu.module.css'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
        key: 'list1',
        label: 'HarmonyOS',
        className:'menu-harmony',
        children: [
          { key: 'list11', label: '鸿蒙基础' },
          { key: 'list12', label: '鸿蒙进阶' },
          { key: 'list13', label: '鸿蒙面试' },
        ],
},
];

const APP: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <aside className={styles.menuWrapper}>
        <div className={styles.menuScrollContainer}>
  <Menu
      onClick={onClick}
      style={{ width: 200 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      inlineIndent={24}
      className={styles.menuScrollContainer}
  />
  </div>
</aside>
  );
};

export default APP;