import React from 'react';
import styles from './styles.module.css';
import { leftarrowicon } from 'resources/Images/images';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const Header = ({
  headerDescpName,
  headerDescpStyles,
  headerImgStyles,
  back_dest
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.headerStyles}>
      <div
        onClick={() => navigate(back_dest??-1)}
        className={classNames(styles.headerImgStyles, headerImgStyles)}
      >
        <img src={leftarrowicon} alt="" className={styles.headerImgWidth} />
      </div>
      <p className={classNames(styles.headerDescpStyles, headerDescpStyles)}>
        {headerDescpName}
      </p>
    </div>
  );
};

export default Header;
