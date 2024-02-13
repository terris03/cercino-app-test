import React from 'react';
import styles from './styles.module.css';
import Header from 'components/Header';

const Notifications = () => {
  const notificationData = [
    {
      mainText: 'Upcoming Event Alert',
      descp: `A friendly reminder for your upcoming event, Event Name, tonight. Ensure everything is set!`,
    },
    {
      mainText: 'VQT Limit Reached',
      descp: `Your Virtual Queue Tickets for [Event Name] have reached the limit. Consider releasing more if possible.`,
    },
  ];

  const notificationTopSection = () => {
    return (
      <Header
        headerDescpName={'Notifications'}
        headerImgStyles={styles.overRideStyles}
      />
    );
  };

  const notificationBottomSection = () => {
    return (
      <div className={styles.notificationBottomStyles}>
        {notificationData.map((item, index) => {
          return (
            <div key={index} className={styles.notificationHeaderStyles}>
              <div className={styles.gapOneStyles}>
                <div className={styles.dottedStyles}></div>
                <div className={styles.headerStyles}>{item.mainText}</div>
              </div>
              <div className={styles.descpStyles}>{item.descp}</div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className={styles.notificationSection}>
      {notificationTopSection()}
      {notificationBottomSection()}
    </div>
  );
};

export default Notifications;
