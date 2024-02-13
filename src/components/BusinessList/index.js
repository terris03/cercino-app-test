import React from 'react';
import styles from './styles.module.css';
import {
  blueprofileicon,
  eventlisticon,
  eventwhiteIcon,
  plusicon,
  na_profileicon as profileicon,
} from 'resources/Images/images';
import { useLocation, useNavigate } from 'react-router-dom';

const BusinessList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={styles.businessListSection}>
      <div
        onClick={() => navigate('/creatingevent')}
        className={styles.additionImgStyles}
      >
        <img src={plusicon} alt="" className={styles.imageWidth} />
      </div>
      <div className={styles.listSectionStyles}>
        <div
          onClick={() => navigate('/events')}
          className={styles.eventSectionStyles}
        >
          <div className={styles.eventImgStyles}>
            <img
              src={
                location.pathname === '/events' ? eventlisticon : eventwhiteIcon
              }
              alt=""
              className={styles.imageWidth}
            />
          </div>
          <p
            className={
              location.pathname === '/events'
                ? styles.eventTextStyles
                : styles.eventOverRideTextStyles
            }
          >
            Events
          </p>
        </div>
        <div
          onClick={() => navigate('/businessprofile')}
          className={styles.profileSectionStyles}
        >
          <div className={styles.profileImgStyles}>
            <img
              src={
                location.pathname === '/businessprofile'
                  ? blueprofileicon
                  : profileicon
              }
              alt=""
              className={styles.imageWidth}
            />
          </div>
          <p
            className={
              location.pathname === '/businessprofile'
                ? styles.profileTextStyles
                : styles.profileOverRideTextStyles
            }
          >
            Profile
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessList;
