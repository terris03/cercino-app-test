import React, { useState } from 'react';
import styles from './styles.module.css';
import {
  bellicon,
  imagefiveicon,
  imagesevenicon,
  imagesixicon,
} from 'resources/Images/images';
import BusinessList from 'components/BusinessList';
import { useNavigate } from 'react-router-dom';
import Divider from 'components/Divider';

const Events = () => {
  const navigate = useNavigate();
  const [eventAdded, setEventAdded] = useState(true);

  const upComingData = [
    {
      image: imagesixicon,
      bandName: 'Band3 Live Music',
      openTime: '06:40 PM',
      date: '23-04-2024',
      ticketStatus: 'Tickets Sold',
      howManySoldTickets: '230 ',
      availableTickets: '500',
    },
    {
      image: imagesixicon,
      bandName: 'Band3 Live Music',
      openTime: '06:40 PM',
      date: '23-04-2024',
      ticketStatus: 'Tickets Sold',
      howManySoldTickets: '230 ',
      availableTickets: '500',
    },
  ];

  const completedData = [
    {
      image: imagesevenicon,
      pubName: 'ElectroGroove Club',
    },
    {
      image: imagesevenicon,
      pubName: 'ElectroGroove Club',
    },
    {
      image: imagesevenicon,
      pubName: 'ElectroGroove Club',
    },
  ];

  const renderEventsTopSection = () => {
    return (
      <div className={styles.eventsTopSectionStyles}>
        <div className={styles.eventTopDescpStyles}>
          <p className={styles.businessNameTextStyles}>Hello! Business name</p>
          <p className={styles.nightExpTextStyles}>
            Elevate Your Venue's Nightlife Experience.
          </p>
        </div>
        <div
          onClick={() => navigate('/notifications')}
          className={styles.eventNotificationStyles}
        >
          <img src={bellicon} alt="" className={styles.imageWidth} />
        </div>
      </div>
    );
  };

  const renderEventsMiddleSection = () => {
    return (
      <div className={styles.middleSectionStyles}>
        {eventAdded ? eventAvailableSection() : noEventsSection()}
      </div>
    );
  };

  const noEventsSection = () => {
    return (
      <React.Fragment>
        <p className={styles.noEventHeaderText}>No Events</p>
        <p className={styles.noEventDescpTextStyles}>
          It looks like you haven't added any events yet. Click the 'Create New
          Event' button to begin, and let's start filling your calendar with
          unforgettable experiences.
        </p>
      </React.Fragment>
    );
  };

  const eventAvailableSection = () => {
    return (
      <React.Fragment>
        {onGoingSection()}
        {upComingSection()}
        {completedSection()}
      </React.Fragment>
    );
  };

  const onGoingSection = () => {
    return (
      <div className={styles.onGoingStyles}>
        <p className={styles.onGoingTextStyles}>Ongoing Event</p>
        <div className={styles.gapStylesOne}>
          <div className={styles.onGoingLeftStyles}>
            <img
              src={imagefiveicon}
              alt=""
              className={styles.imageRadiusWidth}
            />
          </div>
          <div className={styles.onGoingDescpStyles}>
            <p className={styles.bandTextStyles}>Band3 Live Music</p>
            <div className={styles.gapStylesTwo}>
              <div className={styles.timeStyles}>
                <p className={styles.timeTextStyles}>Time</p>
                <p className={styles.hoursTextStyles}>06:40 PM</p>
              </div>
              <div className={styles.gapStylesThree}>
                <p className={styles.dateTextStyles}>Date</p>
                <p className={styles.todayTextStyles}>TODAY</p>
              </div>
            </div>
            <div className={styles.gapStylesFour}>
              <p className={styles.soldTicketsTextStyles}>Tickets Sold</p>
              <p className={styles.noOfTicketsStyles}>
                <span className={styles.noOfTicketsTextStyles}>230 /</span> 500
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const upComingSection = () => {
    return (
      <div className={styles.upComingStyles}>
        <p className={styles.upComingTextStyles}>Upcoming event</p>
        {upComingData.map((item, index) => {
          return (
            <React.Fragment>
              <div key={index} className={styles.gapStylesOne}>
                <div className={styles.upComingLeftStyles}>
                  <img
                    src={item.image}
                    alt=""
                    className={styles.imageRadiusWidth}
                  />
                </div>
                <div className={styles.upComingDescpStyles}>
                  <p className={styles.bandTextStyles}>{item.bandName}</p>
                  <div className={styles.gapStylesTwo}>
                    <div className={styles.timeStyles}>
                      <p className={styles.timeTextStyles}>Time</p>
                      <p className={styles.hoursTextStyles}>{item.openTime}</p>
                    </div>
                    <div className={styles.gapStylesThree}>
                      <p className={styles.dateTextStyles}>Date</p>
                      <p className={styles.todayTextStyles}>{item.date}</p>
                    </div>
                  </div>
                  <div className={styles.gapStylesFour}>
                    <p className={styles.soldTicketsTextStyles}>
                      {item.ticketStatus}
                    </p>
                    <p className={styles.noOfTicketsStyles}>
                      <span className={styles.noOfTicketsTextStyles}>
                        {item.howManySoldTickets}
                      </span>
                      /{item.availableTickets}
                    </p>
                  </div>
                </div>
              </div>
              {upComingData.length - 1 !== index && <Divider />}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  const completedSection = () => {
    return (
      <div className={styles.completedStyles}>
        <p className={styles.completedTextStyles}>Completed Events</p>
        <div className={styles.gapStylesFive}>
          {completedData.map((item, index) => {
            return (
              <div
                onClick={() => navigate('/eventdetails')}
                key={index}
                className={styles.gapStylesSix}
              >
                <div className={styles.completedImgStyles}>
                  <img src={item.image} alt="" className={styles.imageWidth} />
                </div>
                <p className={styles.pubNametextStyles}>{item.pubName}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.eventSection}>
      <div className={styles.insideStyles}>
        {renderEventsTopSection()}
        {renderEventsMiddleSection()}
        <BusinessList />
      </div>
    </div>
  );
};

export default Events;
