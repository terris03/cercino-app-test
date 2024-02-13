import React, { useState } from 'react';
import styles from './styles.module.css';
import {
  dootedicon,
  downarrowicon,
  imageeighticon,
  leftarrowicon,
  mapicon,
  pubimageone,
  pubimagetwo,
} from 'resources/Images/images';
import Divider from 'components/Divider';

const OnGoingEvent = () => {
  const [show, setShow] = useState(false);
  const [is_Show, setIs_Show] = useState(false);

  const pubImages = [
    {
      image: pubimageone,
    },
    {
      image: pubimagetwo,
    },
    {
      image: pubimageone,
    },
  ];

  const pubStyles = [
    {
      type: 'Rooftop bar',
    },
    {
      type: 'Live Music',
    },
    {
      type: 'Karaoke bar',
    },
  ];

  const renderArrowSection = () => {
    return (
      <div className={styles.arrowStyles}>
        <div className={styles.arrowIconStyles}>
          <img src={leftarrowicon} alt="" className={styles.imageWidth} />
        </div>
        <div className={styles.dottedIconStyles}>
          <img src={dootedicon} alt="" className={styles.imageWidth} />
        </div>
      </div>
    );
  };

  const renderclubDetailsTopSection = () => {
    return (
      <div className={styles.clubTopSectionStyles}>
        <p className={styles.pubNameTextStyles}>ElectroGroove Club</p>
        <div className={styles.ticketStyles}>
          <p className={styles.ticketReleaseTextStyles}>Tickests Released</p>
          <p className={styles.ticketsQuantity}>500 Vqt’s</p>
        </div>

        <div className={styles.timeAndDateStyles}>
          <div className={styles.timeStyles}>
            <p className={styles.hoursTextStyles}>06:40 PM</p>
            <p className={styles.timeTextStyles}>Time</p>
          </div>
          <div className={styles.dateStyles}>
            <p className={styles.yardsTextStyles}>23-04-2024</p>
            <p className={styles.dateTextStyles}>Date</p>
          </div>
        </div>
      </div>
    );
  };

  const renderBottomSection = () => {
    return (
      <div className={styles.bottomStyles}>
        {ageSection()}
        {performanceSection()}
        {imagesSection()}
        {descriptionSection()}
        <Divider />
        {locationSection()}
        <Divider />
        {tagsSection()}
      </div>
    );
  };

  const performanceSection = () => {
    return (
      <div className={styles.performanceStyles}>
        <p className={styles.performanceTextStyles}>Performances </p>
        <div className={styles.performanceGapStyles}>
          <div className={styles.performanceImgStyles}>
            <img src={imageeighticon} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.performanceRightStyles}>
            <div className={styles.performedStyles}>
              <p className={styles.performedTextStyles}>Performed by</p>
              <p className={styles.singerTextStyles}>Peter.h</p>
            </div>
            <div className={styles.performedTypeStyles}>
              <p className={styles.performedTypeTextStyles}>Performance Type</p>
              <p className={styles.typeTextStyles}>Live Music</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ageSection = () => {
    return (
      <div className={styles.ageSectionStyles}>
        <div className={styles.gapThreeStyles}>
          <div className={styles.ageTextSectionStyles}>
            <p className={styles.ageTextStyles}>Age</p>
            <p className={styles.ageNumStyles}>21+</p>
          </div>
          <span className={styles.ageSpanStyles}></span>
          <div className={styles.dressCodeTextSectionStyles}>
            <p className={styles.dressCodeTextStyles}>DressCode</p>
            <p className={styles.dressTypeStyles}>Casual</p>
          </div>
          <span className={styles.ageSpanStyles}></span>
          <div className={styles.clubSectionStyles}>
            <p className={styles.clubTextStyles}>Type</p>
            <p className={styles.clubTypeStyles}>Club</p>
          </div>
        </div>
      </div>
    );
  };

  const imagesSection = () => {
    return (
      <div className={styles.imageSectionStyles}>
        <p className={styles.imageTextStyles}>Images</p>
        <div className={styles.imgaeGapStyles}>
          {pubImages.map((item, index) => {
            return (
              <div key={index} className={styles.pubImageStyles}>
                <img src={item.image} alt="" className={styles.imageWidth} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const descriptionSection = () => {
    return (
      <div className={styles.descriptionSectionStyles}>
        <div className={styles.descriptionTopStyles}>
          <p className={styles.descriptionTextStyles}>Description</p>
          <div
            onClick={() => setShow(!show)}
            className={styles.descriptionImgStyles}
          >
            <img src={downarrowicon} alt="" className={styles.imageWidth} />
          </div>
        </div>
        {show && (
          <p className={styles.pubInformationTextStyles}>
            Immerse yourself in the pulsating beats and vibrant energy of
            ElectroGroove Club. Dance the night away to electrifying music in an
            unparalleled atmosphere that's perfect for music enthusiasts and
            night owls alike.
          </p>
        )}
      </div>
    );
  };

  const locationSection = () => {
    return (
      <div className={styles.locationStyles}>
        <div className={styles.locationTopStyles}>
          <p className={styles.locationTextStyles}>Location</p>
          <div className={styles.locationImgStyles}>
            <img src={mapicon} alt="" className={styles.imageWidth} />
          </div>
        </div>
        <p className={styles.streetTextStyles}>
          1123, landmark , street , State
        </p>
      </div>
    );
  };

  const tagsSection = () => {
    return (
      <div className={styles.tagsSectionStyles}>
        <div className={styles.tagsTopStyles}>
          <p className={styles.tagTextStyles}>Tags</p>
          <div
            className={styles.tagImgStyles}
            onClick={() => setIs_Show(!is_Show)}
          >
            <img src={downarrowicon} alt="" className={styles.imageWidth} />
          </div>
        </div>
        {is_Show && (
          <div className={styles.tagsBottomStyles}>
            {pubStyles.map((item, index) => {
              return (
                <p key={index} className={styles.tagTypeStyles}>
                  {item.type}
                </p>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.eventsDetailsSection}>
      {renderArrowSection()}
      {renderclubDetailsTopSection()}
      {renderBottomSection()}
    </div>
  );
};

export default OnGoingEvent;
