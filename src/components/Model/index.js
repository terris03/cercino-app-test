import { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

const Model = ({
  open,
  onClose,
  children,
  customModalStyle,
  customModalContent,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.classList.add(styles.noscroll);
    } else {
      document.body.classList.remove(styles.noscroll);
    }
    return () => {
      document.body.classList.remove(styles.noscroll);
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className={classNames(styles.modal, customModalStyle)}>
      <div
        className={classNames(styles.modalContent, customModalContent)}
        ref={modalRef}
      >
        <span className={styles.closeIcon} onClick={onClose}></span>
        {children}
      </div>
    </div>
  );
};

export default Model;
