import React, { useState } from 'react';
import styles from './styles.module.css';
import {
  comedyclubicon,
  crossicon,
  danceclubicon,
  karaokeicon,
  livemusicicon,
  loungebaricon,
  rooftopbaricon,
} from 'resources/Images/images';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState(0);
  const [startingValue, setStartingValue] = useState(0);
  const [endingValue, setEndingValue] = useState(50);
  const [active, setActive] = useState(0);
  const [selectedMusic, setSelectedMusic] = useState(0);

  //   const handleSliderChange = (event) => {
  //     const tempSliderValue = event.target.value;
  //     setSliderValue(tempSliderValue);
  //     const progress = (tempSliderValue / event.target.max) * 100;
  //     event.target.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
  //   };

  const venueData = [
    {
      image: danceclubicon,
      type: 'Dance Clubs',
    },
    {
      image: comedyclubicon,
      type: 'Comedy Club',
    },
    {
      image: loungebaricon,
      type: 'Lounge Bar',
    },
    {
      image: rooftopbaricon,
      type: 'Rooftop bar',
    },
    {
      image: livemusicicon,
      type: 'Live Music',
    },
    {
      image: karaokeicon,
      type: 'Karaoke Bars',
    },
  ];
  const musicData = [
    {
      musicType: 'Electric',
    },
    {
      musicType: 'Hip Hop',
    },
    {
      musicType: 'Rock',
    },
    {
      musicType: 'Jazz',
    },
    {
      musicType: 'Pop',
    },
    {
      musicType: 'Latin',
    },
  ];
  const selectVenue = (index) => {
    setActive((a) => a ^ (1 << index));
  };

  const selectMusic = (index) => {
    setSelectedMusic((a) => a ^ (1 << index));
  };

  const handleSliderChange = (event) => {
    const tempSliderValue = event.target.value;
    setSliderValue(tempSliderValue);
    setStartingValue(0); // Set the starting value
    setEndingValue(tempSliderValue); // Set the ending value
  };

  const renderFilterTopSection = () => {
    return (
      <div className={styles.sortBySectionStyles}>
        <p className={styles.sortByTextStyles}>Sort by</p>
        <div onClick={() => navigate(-1)} className={styles.crossImageStyles}>
          <img src={crossicon} alt="" className={styles.imageWidth} />
        </div>
      </div>
    );
  };

  const renderFilterBottomSection = () => {
    return (
      <div className={styles.filterBottomSectionStyles}>
        {distanceSection()}
        {venueSection()}
        {musicSection()}
      </div>
    );
  };

  const distanceSection = () => {
    return (
      <div className={styles.distanceSectionStyles}>
        <p className={styles.distanceTextStyles}>How far from you? (km)</p>
        <div className="wrapper">
          <div className="range">
            <input
              type="range"
              min="0"
              max="50"
              value={sliderValue}
              onChange={handleSliderChange}
              id="range"
              style={{ width: '100%' }} // Set the width to 100%
            />
            <div className={styles.value}>
              {startingValue} - {endingValue}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const venueSection = () => {
    const arr = [[], []];
    venueData
      .map((item, index) => {
        return (
          <div
            onClick={() => selectVenue(index)}
            key={index}
            className={`${styles.danceClubStyles} ${
              active & (1 << index) ? styles.danceActiveClubStyles : ''
            }`}
          >
            <div className={styles.venueImgStyles}>
              <img src={item.image} alt="" className={styles.imageWidth} />
            </div>
            <p className={styles.danceClubTextStyles}>{item.type}</p>
          </div>
        );
      })
      .forEach((val, index) => {
        arr[index % 2].push(val);
      });
    return (
      <div className={styles.venueStyles}>
        <p className={styles.venueTextStyles}>Venue Type</p>
        <div className={styles.venueGapStyles}>
          <div
            style={{
              display: 'flex',
              'align-items': 'center',
              'flex-direction': 'column',
            }}
          >{arr[0]}</div>
          <div
            style={{
              display: 'flex',
              'align-items': 'center',
              'flex-direction': 'column',
            }}
          >{arr[1]}</div>
        </div>
      </div>
    );
  };

  const musicSection = () => {
    return (
      <div className={styles.musicStyles}>
        <p className={styles.musicTextStyles}>Music Genres</p>
        <div className={styles.musicGapStyles}>
          {musicData.map((item, index) => {
            return (
              <p
                onClick={() => selectMusic(index)}
                key={index}
                className={`${styles.electrictextStyles} ${
                  selectedMusic & (1 << index)
                    ? styles.electricActivetextStyles
                    : ''
                }`}
              >
                {item.musicType}
              </p>
            );
          })}
        </div>
      </div>
    );
  };

  const buttonSection = () => {
    return (
      <div
        className={styles.buttonStyles}
        style={{
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          width: '100%',
        }}
      >
        <Button btName={'Clear'} btnStyles={styles.clearBtnOverRideStyles} />
        <Button btName={'Apply'} />
      </div>
    );
  };

  return (
    <>
      <div className={styles.filterSection}>
        {renderFilterTopSection()}
        {renderFilterBottomSection()}
        {buttonSection()}
      </div>
    </>
  );
};

export default Filter;
