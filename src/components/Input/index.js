import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

const Input = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  onClick,
  image,
  error,
  errorMessage,
  customInputStyle,
  customInputContainerStyles,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        styles.inputContainerStyles,
        customInputContainerStyles
      )}
    >
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={classNames(styles.customInputStyle, customInputStyle)}
        {...rest}
      />
      {image && (
        <div className={styles.inputIconStyles} onClick={onClick}>
          <img src={image} alt="" className={styles.imageWidth} />
        </div>
      )}
      {error && <div className={styles.errorStyles}>{error}</div>}
    </div>
  );
};

export default Input;
