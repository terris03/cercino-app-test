import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import classNames from 'classnames';
function Popup({
  show,
  onClose,
  children,
  showOverlay,
  customPopUpStyles,
  showCloseButton,
}) {
  if (!show) return null;
  return (
    // <div className={showOverlay ? styles.overlay : ''}>
    <div className={classNames(styles.popup, customPopUpStyles)}>
      {showCloseButton && (
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      )}
      {children}
    </div>
    // </div>
  );
}
Popup.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  showOverlay: PropTypes.bool,
  showCloseButton: PropTypes.bool,
};
export default Popup;
