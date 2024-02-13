import React from 'react';
import styles from './styles.module.css';

const Divider = ({ customDividerStyles }) => {
  return (
    <div
      className={[styles.dividerStyles, customDividerStyles].join(' ')}
    ></div>
  );
};

export default Divider;
