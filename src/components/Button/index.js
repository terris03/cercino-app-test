import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

const Button = (props) => {
  const { btName, btnStyles, image, imageWrapperStyle, onClick, type } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(btnStyles, styles.btnStyles)}
    >
      {btName}
      {image && (
        <div
          className={classNames(styles.imageWrapperStyle, imageWrapperStyle)}
        >
          <img src={image} className={styles.imgStyles} alt="" />
        </div>
      )}
    </button>
  );
};

export default Button;
