import React from 'react';
import styles from './styles.module.css';
import { crossicon, leftarrowicon, qricon } from 'resources/Images/images';
import { useNavigate } from 'react-router-dom';

const QrCode = () => {
  const navigate = useNavigate();

  const renderArrowSection = () => {
    return (
      <div className={styles.paymentTopSectionStyles}>
        <div onClick={() => navigate(-1)} className={styles.arrowIconStyles}>
          <img src={leftarrowicon} alt="" className={styles.imageWidth} />
        </div>
        <div className={styles.crossIconStyles}>
          <img src={crossicon} alt="" className={styles.imageWidth} />
        </div>
      </div>
    );
  };

  const renderQrSection = () => {
    return (
      <div className={styles.qrSectionStyles}>
        {qrImgStyles()}
        {gapOneStyles()}
        {eventPriceSectionStyles()}
        {venueSectionStyles()}
        <div className={styles.dottedLineStyles}></div>
        {timeSectionStyles()}
        {locationSectionStyles()}
      </div>
    );
  };

  const qrImgStyles = () => {
    return (
      <div className={styles.qrImgStyles}>
        <img src={qricon} alt="" className={styles.imageWidth} />
      </div>
    );
  };

  const gapOneStyles = () => {
    return (
      <div className={styles.gapOneStyles}>
        <div className={styles.ecllipseOneStyles}></div>
        <div className={styles.dottedLineStyles}></div>
        <div className={styles.ecllipseTwoStyles}></div>
      </div>
    );
  };

  const eventPriceSectionStyles = () => {
    return (
      <div className={styles.eventPriceSectionStyles}>
        <div className={styles.eventLeftStyles}>
          <p className={styles.eventTextStyles}>Event</p>
          <p className={styles.eventPubStyles}>ElectroGroove Band</p>
        </div>
        <div className={styles.eventRightStyles}>
          <p className={styles.priceTextStyles}>Total</p>
          <p className={styles.pubTotalPriceStyles}>1500 Kr</p>
        </div>
      </div>
    );
  };

  const venueSectionStyles = () => {
    return (
      <div className={styles.venueSectionStyles}>
        <div className={styles.venueLeftStyles}>
          <p className={styles.venueTextStyles}>Venue</p>
          <p className={styles.venuePubStyles}>ElectroGroove Club</p>
        </div>
        <div className={styles.venueRightStyles}>
          <p className={styles.noOfVqtsTextStyles}>Number of Vqts</p>
          <p className={styles.noOfVqtStrengthStyles}>10</p>
        </div>
      </div>
    );
  };

  const timeSectionStyles = () => {
    return (
      <div className={styles.timeSectionStyles}>
        <div className={styles.timeLeftStyles}>
          <p className={styles.entryTextsStyles}>Entry Time</p>
          <p className={styles.timePubStyles}>11:00 PM</p>
        </div>
        <div className={styles.timeRightStyles}>
          <p className={styles.entryDateTextStyles}>Entry Date</p>
          <p className={styles.totalDateStyles}>23-04-2023</p>
        </div>
      </div>
    );
  };

  const locationSectionStyles = () => {
    return (
      <div className={styles.locationSectionStyles}>
        <p className={styles.locationTextsStyles}>Location</p>
        <p className={styles.loactionStreetPubStyles}>
          123, Neon Street, Cityville
        </p>
      </div>
    );
  };

  return (
    <div className={styles.qrSection}>
      {renderArrowSection()}
      {renderQrSection()}
    </div>
  );
};

export default QrCode;
