import React, { useContext, useState } from 'react';
import {
  crossicon,
  dootedicon,
  leftarrowicon,
  pubFouricon,
} from 'resources/Images/images';
import { AppDataContext } from 'providers/AppDataProvider';
import Button from 'components/Button';
import Model from 'components/Model';
import { HiStar } from 'react-icons/hi';
import { Rating } from 'react-simple-star-rating';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import List from 'components/List';

const MyVqts = () => {
  const { strings } = useContext(AppDataContext);
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const upComingData = [
    {
      pubName: 'ElectroGroove Club',
      image: pubFouricon,
      open: 'Open',
      closes: 'Closes 3:00 AM',
      kilometers: '15 kms',
      countDown: 'Countdown',
      time: '00:40 Min',
    },
    {
      pubName: 'ElectroGroove Club',
      image: pubFouricon,
      open: 'Open',
      closes: 'Closes 3:00 AM',
      kilometers: '15 kms',
      countDown: 'Countdown',
      time: '00:40 Min',
    },
    {
      pubName: 'ElectroGroove Club',
      image: pubFouricon,
      open: 'Open',
      closes: 'Closes 3:00 AM',
      kilometers: '15 kms',
      countDown: 'Countdown',
      time: '00:40 Min',
    },
    {
      pubName: 'ElectroGroove Club',
      image: pubFouricon,
      open: 'Open',
      closes: 'Closes 3:00 AM',
      kilometers: '15 kms',
      countDown: 'Countdown',
      time: '00:40 Min',
    },
    {
      pubName: 'ElectroGroove Club',
      image: pubFouricon,
      open: 'Open',
      closes: 'Closes 3:00 AM',
      kilometers: '15 kms',
      countDown: 'Countdown',
      time: '00:40 Min',
    },
    {
      pubName: 'ElectroGroove Club',
      image: pubFouricon,
      open: 'Open',
      closes: 'Closes 3:00 AM',
      kilometers: '15 kms',
      countDown: 'Countdown',
      time: '00:40 Min',
    }
  ];

  const fillColor = ['rgba(249, 212, 80, 0.89)'];
  const customIcons = [
    { icon: <HiStar size={34} className={styles.customStarStyles} /> },
    { icon: <HiStar size={34} className={styles.customStarStyles} /> },
    { icon: <HiStar size={34} className={styles.customStarStyles} /> },
    { icon: <HiStar size={34} className={styles.customStarStyles} /> },
    { icon: <HiStar size={34} /> },
  ];

  const renderVqtsOngoingSection = () => {
    return (
      <div className={styles.onGoingSectionStyles}>
        <p className={styles.onGoingTextStyles}>On Going</p>
        <div
          style={{
            width: '366px',
            overflowX: 'scroll',
            overflowY: 'hidden',
            display: 'flex',
            'flex-direction': 'row',
            gap: '21px',
          }}
        >
          <div className={styles.onGoingDetailsStyles}>
            <div className={styles.onGoingLeftStyles}>
              <img src={pubFouricon} alt="" className={styles.imageWidth} />
            </div>
            <div className={styles.onGoingRightStyles}>
              <div className={styles.onGoingTopStyles}>
                <p className={styles.rightPubName}>ElectroGroove Club</p>
                <div className={styles.rightDottedImgStyles}>
                  <img src={dootedicon} alt="" className={styles.imageWidth} />
                </div>
              </div>
              <div className={styles.rightMiddleStyles}>
                <p className={styles.rightMiddleTextStyles}>
                  <span className={styles.rightOpenTextStyles}>
                    Started &nbsp;
                  </span>
                  - &nbsp;Closes 3:00 AM
                </p>
                <p className={styles.rightDistanceStyles}>15 kms</p>
              </div>
              <div className={styles.rightBottomStyles}>
                <p className={styles.bottomStatusTextStyles}>Status</p>
                <p className={styles.bottomCompletedTextStyles}>Completed</p>
              </div>
              <Model open={modalOpen} onClose={handleCloseModal}>
                <div className={styles.modelSectionStyles}>
                  <div className={styles.modelGapStyles}>
                    <div
                      className={styles.crossIMgStyles}
                      onClick={handleCloseModal}
                    >
                      <img
                        src={crossicon}
                        alt=""
                        className={styles.imageWidth}
                      />
                    </div>
                    <p className={styles.rateUsTextStyles}>Rate Us</p>
                  </div>
                  {modelSectionStylesTwo()}
                  <p className={styles.leaveUsTextStyles}>
                    Leave us your Feedback
                  </p>
                  <textarea
                    placeholder={'Describe'}
                    className={styles.textAreaStyles}
                  />
                  <Button btName={'Submit'} />
                </div>
              </Model>
            </div>
          </div>
          <div className={styles.onGoingDetailsStyles}>
            <div className={styles.onGoingLeftStyles}>
              <img src={pubFouricon} alt="" className={styles.imageWidth} />
            </div>
            <div className={styles.onGoingRightStyles}>
              <div className={styles.onGoingTopStyles}>
                <p className={styles.rightPubName}>ElectroGroove Club</p>
                <div className={styles.rightDottedImgStyles}>
                  <img src={dootedicon} alt="" className={styles.imageWidth} />
                </div>
              </div>
              <div className={styles.rightMiddleStyles}>
                <p className={styles.rightMiddleTextStyles}>
                  <span className={styles.rightOpenTextStyles}>
                    Started &nbsp;
                  </span>
                  - &nbsp;Closes 3:00 AM
                </p>
                <p className={styles.rightDistanceStyles}>15 kms</p>
              </div>
              <div className={styles.rightBottomStyles}>
                <p className={styles.bottomStatusTextStyles}>Status</p>
                <p className={styles.bottomCompletedTextStyles}>Completed</p>
              </div>
              <Model open={modalOpen} onClose={handleCloseModal}>
                <div className={styles.modelSectionStyles}>
                  <div className={styles.modelGapStyles}>
                    <div
                      className={styles.crossIMgStyles}
                      onClick={handleCloseModal}
                    >
                      <img
                        src={crossicon}
                        alt=""
                        className={styles.imageWidth}
                      />
                    </div>
                    <p className={styles.rateUsTextStyles}>Rate Us</p>
                  </div>
                  {modelSectionStylesTwo()}
                  <p className={styles.leaveUsTextStyles}>
                    Leave us your Feedback
                  </p>
                  <textarea
                    placeholder={'Describe'}
                    className={styles.textAreaStyles}
                  />
                  <Button btName={'Submit'} />
                </div>
              </Model>
            </div>
          </div>
          <div className={styles.onGoingDetailsStyles}>
            <div className={styles.onGoingLeftStyles}>
              <img src={pubFouricon} alt="" className={styles.imageWidth} />
            </div>
            <div className={styles.onGoingRightStyles}>
              <div className={styles.onGoingTopStyles}>
                <p className={styles.rightPubName}>ElectroGroove Club</p>
                <div className={styles.rightDottedImgStyles}>
                  <img src={dootedicon} alt="" className={styles.imageWidth} />
                </div>
              </div>
              <div className={styles.rightMiddleStyles}>
                <p className={styles.rightMiddleTextStyles}>
                  <span className={styles.rightOpenTextStyles}>
                    Started &nbsp;
                  </span>
                  - &nbsp;Closes 3:00 AM
                </p>
                <p className={styles.rightDistanceStyles}>15 kms</p>
              </div>
              <div className={styles.rightBottomStyles}>
                <p className={styles.bottomStatusTextStyles}>Status</p>
                <p className={styles.bottomCompletedTextStyles}>Completed</p>
              </div>
              <Model open={modalOpen} onClose={handleCloseModal}>
                <div className={styles.modelSectionStyles}>
                  <div className={styles.modelGapStyles}>
                    <div
                      className={styles.crossIMgStyles}
                      onClick={handleCloseModal}
                    >
                      <img
                        src={crossicon}
                        alt=""
                        className={styles.imageWidth}
                      />
                    </div>
                    <p className={styles.rateUsTextStyles}>Rate Us</p>
                  </div>
                  {modelSectionStylesTwo()}
                  <p className={styles.leaveUsTextStyles}>
                    Leave us your Feedback
                  </p>
                  <textarea
                    placeholder={'Describe'}
                    className={styles.textAreaStyles}
                  />
                  <Button btName={'Submit'} />
                </div>
              </Model>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const modelSectionStylesTwo = () => {
    return (
      <div className={styles.modelSectionStyles2}>
        <Rating
          customIcons={customIcons}
          initialValue="0"
          allowFraction
          fillColor={fillColor}
        />
      </div>
    );
  };
  const renderVqtsUpComingSection = () => {
    return (
      <div className={styles.upComingSectionStyles}>
        <p className={styles.upComingTextStyles}>Upcoming event</p>
        <div
          style={{
            'overflow-x': 'hidden',
            'overflow-y': 'auto',
            display: 'flex',
            gap: '10px',
            // pc: 480px phone:294px
            'flex-direction': 'column',
          }} className={styles.weirdscaling}
        >
          {upComingData.map((item, index) => {
            return (
              <div key={index} className={styles.upComingDetailsStyles}>
                <div className={styles.upComingLeftStyles}>
                  <img src={item.image} alt="" className={styles.imageWidth} />
                </div>
                <div className={styles.upComingRightStyles}>
                  <div className={styles.upComingTopStyles}>
                    <p className={styles.upComingPubName}>{item.pubName}</p>
                    <div className={styles.upComingDottedImgStyles}>
                      <img
                        src={dootedicon}
                        alt=""
                        className={styles.imageWidth}
                      />
                    </div>
                  </div>
                  <div className={styles.upComingMiddleStyles}>
                    <p className={styles.upComingMiddleTextStyles}>
                      <span className={styles.upComingOpenTextStyles}>
                        {item.open} &nbsp;
                      </span>
                      - &nbsp;{item.closes}
                    </p>
                    <p className={styles.upComingDistanceStyles}>
                      {item.kilometers}
                    </p>
                  </div>
                  <div className={styles.upComingBottomStyles}>
                    <p className={styles.countDownTextStyles}>
                      {item.countDown}
                    </p>
                    <p className={styles.minutesTextStyles}>{item.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.myVqtsSection}>
      {renderVqtsOngoingSection()}
      {renderVqtsUpComingSection()}
      <div
        style={{
          padding: '24px 24px',
          position: 'absolute',
          bottom: '0px',
          width: '100%',
        }}
      >
        <List map_off={true} value={1} />
      </div>
    </div>
  );
};

export default MyVqts;
