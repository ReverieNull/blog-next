// src/components/GlassBox.tsx
import React from 'react';
import styles from '../assets/styles/Glassbox.module.css';

type Props = { children: React.ReactNode };
export default function GlassBox({ children }: Props) {
  return <div className={styles.glassBox}>{children}
</div>;
}
                            