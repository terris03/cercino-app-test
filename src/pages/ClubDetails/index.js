import React, { useContext, useState } from 'react';
import styles from './styles.module.css';
import {
  downarrowicon,
  facebookicon,
  instaicon,
  leftarrowicon,
  mapicon,
  pubFouricon,
  pubimageone,
  pubimagetwo,
  snowicon,
} from 'resources/Images/images';
import Button from 'components/Button';
import { AppDataContext } from 'providers/AppDataProvider';
import Divider from 'components/Divider';
import { useNavigate } from 'react-router-dom';

const ClubDetails = () => {
  const { strings } = useContext(AppDataContext);
  const navigate = useNavigate();

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
      <React.Fragment>
        <div onClick={() => navigate(-1)} className={styles.arrowIconStyles}>
          <img src={leftarrowicon} alt="" className={styles.imageWidth} />
        </div>
      </React.Fragment>
    );
  };

  const renderclubDetailsTopSection = () => {
    return (
      <div className={styles.clubTopSectionStyles}>
        <div className={styles.clubDetailsStyles}>
          <div className={styles.gapOneStyles}>
            <div className={styles.detailsTopStyles}>
              <p className={styles.liveBandTextStyles}>Live band</p>
              <div className={styles.liveLogoStyles}>
                <img src={snowicon} alt="" className={styles.imageWidth} />
              </div>
            </div>
            <div className={styles.detailsMiddleStyles}>
              <p className={styles.startTextStyles}>Starts at - 3:00 Pm</p>
              <p className={styles.distanceTextStyles}>15 kms</p>
            </div>
            <div className={styles.detailsBottomStyles}>
              <p className={styles.availableTextStyles}>Available</p>
              <p className={styles.availableAreaStyles}>20 Vqt’s</p>
            </div>
          </div>
          <Button onClick={() => navigate('/payment')} btName={'Buy  VQT'} />
        </div>
      </div>
    );
  };

  const renderclubDetailsBottomSection = () => {
    return (
      <div className={styles.clubBottomStyles}>
        {venueSection()}
        {ageSection()}
        {imagesSection()}
        {tagsSection()}
        <Divider />
        {descriptionSection()}
        <Divider />
        {followUsSection()}
      </div>
    );
  };

  const venueSection = () => {
    return (
      <div className={styles.venueSectionStyles}>
        <div className={styles.gapTwoStyles}>
          <p className={styles.venueTextStyles}>Venue</p>
          <div className={styles.venuImgStyles}>
            <img src={mapicon} alt="" className={styles.imageWidth} />
          </div>
        </div>
        <div className={styles.venuePubDetailsStyles}>
          <div className={styles.veneLeftStyles}>
            <img src={pubFouricon} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.venueRightStyles}>
            <div className={styles.rightTopStyles}>
              <p className={styles.rightPubName}>
                {strings.listViewStrings.pubName}
              </p>
              <div className={styles.rightPubImgStyles}>
                <img src={snowicon} alt="" className={styles.imageWidth} />
              </div>
            </div>
            <div className={styles.rightMiddleStyles}>
              <p className={styles.rightMiddleTextStyles}>
                <span className={styles.rightOpenTextStyles}>
                  {strings.listViewStrings.open}&nbsp;
                </span>
                - &nbsp;{strings.listViewStrings.close}
              </p>
              <p className={styles.rightDistanceStyles}>15 kms</p>
            </div>
            <p className={styles.rightBottomTextStyles}>
              1123, landmark , street , State
            </p>
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

  const followUsSection = () => {
    return (
      <div className={styles.followUsSectionStyles}>
        <p className={styles.followUsTextStyles}>Follow us on</p>
        <div className={styles.socialMediaStyles}>
          <div className={styles.facebookImageStyles}>
            <img src={instaicon} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.instaImageStyles}>
            <img src={facebookicon} alt="" className={styles.imageWidth} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.clubDetailsSection}>
      {renderArrowSection()}
      {renderclubDetailsTopSection()}
      {renderclubDetailsBottomSection()}
    </div>
  );
};

export default ClubDetails;
