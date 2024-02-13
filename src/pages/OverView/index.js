import React, { useState } from 'react';
import styles from './styles.module.css';
import Header from 'components/Header';
import {
  crossicon,
  dateicon,
  imageeighticon,
  lightdownarrow,
  timeicon,
  whiteUparrow,
} from 'resources/Images/images';
import Input from 'components/Input';
import Button from 'components/Button';
import Model from 'components/Model';
import { useNavigate } from 'react-router-dom';

const OverView = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const tagsData = [
    {
      clubType: 'Lounge bar',
    },
    {
      clubType: 'Rooftop bar',
    },
    {
      clubType: 'Live Music',
    },
    {
      clubType: 'Karaoke bar',
    },
  ];

  const allowedData = [
    {
      allowedGroups: 'Age Groups',
      allowedType: '21+',
    },
    {
      allowedGroups: 'Dress Code',
      allowedType: 'Casual',
    },
  ];

  const renderOverViewTopSection = () => {
    return (
      <div className={styles.overViewTopStyles}>
        <Header
          headerDescpName={'Creating event'}
          headerImgStyles={styles.overRideStyles}
        />
      </div>
    );
  };

  const renderOverViewBottomSection = () => {
    return (
      <div className={styles.overViewBottomStyles}>
        {descpSection()}
        {tagsSection()}
        {startsSection()}
        {closesSection()}
        {allowedSection()}
        {performanceSection()}
        {ticketAvailableSection()}
        {/* <div style={{ position: 'relative', width: '100%' }}> */}
        <Button
          btnStyles={styles.overRideBtnStyles}
          btName={'Proceed'}
          // type={'submit'}
          onClick={handleOpenModal}
        />
        {/* </div> */}
      </div>
    );
  };

  const modelPopUp = () => {
    return (
      <React.Fragment>
        <Model
          open={modalOpen}
          onClose={handleCloseModal}
          customModalStyle={styles.customModalStyle}
          customModalContent={styles.customModalContent}
        >
          <div>
            <div className={styles.modelSectionStyles}>
              <div className={styles.modelGapStyles}>
                <div
                  className={styles.crossIMgStyles}
                  onClick={handleCloseModal}
                >
                  <img src={crossicon} alt="" className={styles.imageWidth} />
                </div>
                <div className={styles.eventSuccessfulStyles}>
                  <p className={styles.rateUsTextStyles}>
                    Event Created Successfully
                  </p>
                  <p className={styles.descpTextStyles}>
                    Check your dashboard to view and manage event details.
                    You're on your way to creating an amazing experience for
                    your audience!
                  </p>
                </div>
              </div>
              <Button btName={'Okay'} onClick={() => navigate('/events')} />
            </div>
          </div>
        </Model>
        ;
      </React.Fragment>
    );
  };

  const descpSection = () => {
    return (
      <div className={styles.overViewDescpStyles}>
        <p className={styles.overViewTextStyles}>Over View</p>
        <p className={styles.aboutTextStyles}>About</p>
        <p className={styles.clubStyles}>Electric club</p>
        <p className={styles.descpStyles}>
          This is a music band performing live Indian music. has 5 years fo
          performing experience.
        </p>
      </div>
    );
  };

  const tagsSection = () => {
    return (
      <div className={styles.tagsStyles}>
        <p className={styles.tagsTextStyles}>Tags</p>
        <div className={styles.clubTypeStyles}>
          {tagsData.map((item, index) => {
            return (
              <p key={index} className={styles.longueBarStyles}>
                {item.clubType}
              </p>
            );
          })}
        </div>
      </div>
    );
  };

  const startsSection = () => {
    return (
      <div className={styles.startStyles}>
        <p className={styles.startsTextStyles}>Starts At</p>
        <div className={styles.startsGapStyles}>
          <div className={styles.dateAndImgStyles}>
            <p className={styles.startTextStyles}>03/09/2024</p>
            <div className={styles.dateImgStyles}>
              <img src={dateicon} alt="" className={styles.imageWidth} />
            </div>
          </div>
          <div className={styles.imgStyles}>
            <div className={styles.timeGapStyles}>
              <p className={styles.timeTextStyles}>9:00</p>
              <p className={styles.amTextStyles}>AM</p>
            </div>
            <div className={styles.dateImgStyles}>
              <img src={timeicon} alt="" className={styles.imageWidth} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const closesSection = () => {
    return (
      <div className={styles.closesStyles}>
        <p className={styles.closesTextStyles}>Closes At</p>
        <div className={styles.startsGapStyles}>
          <div className={styles.dateAndImgStyles}>
            <p className={styles.startTextStyles}>03/09/2024</p>
            <div className={styles.dateImgStyles}>
              <img src={dateicon} alt="" className={styles.imageWidth} />
            </div>
          </div>
          <div className={styles.imgStyles}>
            <div className={styles.timeGapStyles}>
              <p className={styles.timeTextStyles}>9:00</p>
              <p className={styles.amTextStyles}>AM</p>
            </div>
            <div className={styles.dateImgStyles}>
              <img src={timeicon} alt="" className={styles.imageWidth} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const allowedSection = () => {
    return (
      <div className={styles.allowedStyles}>
        <p className={styles.allowedTextStyles}>Allowed only</p>
        <div className={styles.ageAndDressCoseStyles}>
          {allowedData.map((item, index) => {
            return (
              <div key={index} className={styles.ageGroupStyles}>
                <p className={styles.ageGroupTextStyles}>
                  {item.allowedGroups}
                </p>
                <p className={styles.ageTextStyles}>{item.allowedType}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const performanceSection = () => {
    return (
      <div className={styles.performanceStyles}>
        <p className={styles.performanceTextStyles}>Performances</p>
        <div className={styles.performanceGapStyles}>
          <div className={styles.performanceLeftStyles}>
            <img src={imageeighticon} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.performanceByAndTypeStyles}>
            <div className={styles.performedByStyles}>
              <p className={styles.performedByTextStyles}>Performed by</p>
              <p className={styles.performedPersonStyles}>Peter.h</p>
            </div>
            <div className={styles.performedTypeStyles}>
              <p className={styles.performanceTypeTextStyles}>
                Performance Type
              </p>
              <p className={styles.performedLiveStyles}>Live Music</p>
            </div>
          </div>
        </div>
        {/* <div></div> */}
      </div>
    );
  };

  const ticketAvailableSection = () => {
    return (
      <div className={styles.ticketAvailableStyles}>
        <div className={styles.ticketAvailibility}>
          <p className={styles.ticketTextStyles}>Ticket Availability</p>
          <div className={styles.ticketCountStyles}>
            <div className={styles.downArrowStyles}>
              <img src={lightdownarrow} alt="" className={styles.imageWidth} />
            </div>
            <p className={styles.countStyles}>100</p>
            <div className={styles.upArrowStyles}>
              <img src={whiteUparrow} alt="" className={styles.imageWidth} />
            </div>
          </div>
        </div>
        <div className={styles.setPriceStyles}>
          <p className={styles.setPriceTextStyles}>Set Ticket Price </p>
          <Input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            placeholder={'Enter Price'}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.overViewStyles}>
      {renderOverViewTopSection()}
      {renderOverViewBottomSection()}
      {modelPopUp()}
    </div>
  );
};

export default OverView;
