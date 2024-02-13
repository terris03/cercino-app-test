import React, { useState } from 'react';
import styles from './styles.module.css';
import {
  dootedicon,
  downarrowicon,
  facebookicon,
  imagefouricon,
  imageoneicon,
  imagethreeicon,
  imagetwoicon,
  instaicon,
  leftarrowicon,
  mapicon,
  plusicon,
  tipsypubicon,
  twittericon,
  yellowstaricon,
} from 'resources/Images/images';
import BusinessList from 'components/BusinessList';
import { useNavigate } from 'react-router-dom';

const BusinessProfile = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('Images');
  const [is_Show, setIs_Show] = useState(false);
  const [show, setShow] = useState(false);

  const imageData = [
    {
      images: imageoneicon,
    },
    {
      images: imagetwoicon,
    },
    {
      images: imagethreeicon,
    },
    {
      images: imagefouricon,
    },
  ];

  const tagsData = [
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

  const tabs = ['Images', 'Details'];

  const businessProfileTopSection = () => {
    return (
      <div className={styles.topStyles}>
        <div onClick={() => navigate(-1)} className={styles.arrowImgStyles}>
          <img src={leftarrowicon} alt="" className={styles.imageWidth} />
        </div>
        <div className={styles.dottedImgStyles}>
          <img src={dootedicon} alt="" className={styles.imageWidth} />
        </div>
      </div>
    );
  };

  const businessprofileMiddleSection = () => {
    return (
      <div className={styles.aboutProfileSection}>
        <div className={styles.pubImageStyles}>
          <img src={tipsypubicon} alt="" className={styles.imageWidthStyles} />
        </div>
        {aboutPubDetails()}
        {aboutPubImageAndDetailsSection()}
      </div>
    );
  };

  const aboutPubDetails = () => {
    return (
      <div className={styles.aboutPubDetails}>
        <p className={styles.pubName}>ElectroGroove Club</p>
        <div className={styles.pubReviewsStyles}>
          <div className={styles.starRatingStyles}>
            <img src={yellowstaricon} alt="" className={styles.imageWidth} />
          </div>
          <p className={styles.ratingTextStyles}>
            <span className={styles.ratingSpanTextStyles}>4 /</span> 5
          </p>
        </div>
        <div className={styles.locationStyles}>
          <div className={styles.locationImgStyles}>
            <img src={mapicon} alt="" className={styles.imageWidth} />
          </div>
          <p className={styles.locationTextStyles}>
            123 ,calben , random street
          </p>
        </div>
      </div>
    );
  };

  const aboutPubImageAndDetailsSection = () => {
    return (
      <div className={styles.imageAndDetailsSection}>
        <div className={styles.dividerStyles}>
          <div className={styles.textStyles}>
            {tabs.map((item, index) => (
              <p
                key={index}
                onClick={() => setTab(item)}
                className={[
                  styles.imageTextStyles,
                  tab !== item && styles.detailsTextStyles,
                ].join(' ')}
              >
                {item}
              </p>
            ))}
          </div>
          <div className={styles.divderSection}>
            {tabs.map((item, index) => (
              <div
                key={index}
                className={[
                  styles.dividerLineStyles,
                  tab === item && styles.dividerColorStyles,
                ].join(' ')}
              ></div>
            ))}
          </div>
          {renderImagesSection()}
          {renderDetailsSection()}
        </div>
      </div>
    );
  };

  const renderImagesSection = () => {
    return (
      <React.Fragment>
        {tab === 'Images' && (
          <div className={styles.imagesSectionStyles}>
            <div className={styles.imageGridStyles}>
              {imageData.map((item, index) => {
                return (
                  <div key={index} className={styles.imageIconStyles}>
                    <img
                      src={item.images}
                      alt=""
                      className={styles.imageRadiusWidth}
                    />
                  </div>
                );
              })}
            </div>
            <div className={styles.addNewImageStyles}>
              <div className={styles.plusIconStyles}>
                <img src={plusicon} alt="" className={styles.imageWidth} />
              </div>
              <p className={styles.addNewTextStyles}>Add New Post</p>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  };

  const renderDetailsSection = () => {
    return (
      <React.Fragment>
        {tab === 'Details' && (
          <div className={styles.detailsSectionStyles}>
            {rulesSection()}
            {tagsSection()}
            {descriptionSection()}
            {reviewSection()}
            {followUsSection()}
          </div>
        )}
      </React.Fragment>
    );
  };

  const rulesSection = () => {
    return (
      <div className={styles.rulesStyles}>
        <div className={styles.ageTextSectionStyles}>
          <p className={styles.ageTextStyles}>Age</p>
          <p className={styles.ageNumStyles}>21+</p>
        </div>

        <div className={styles.dressCodeTextSectionStyles}>
          <p className={styles.dressCodeTextStyles}>DressCode</p>
          <p className={styles.dressTypeStyles}>Casual</p>
        </div>

        <div className={styles.clubSectionStyles}>
          <p className={styles.clubTextStyles}>Type</p>
          <p className={styles.clubTypeStyles}> Rooftop Bar</p>
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
            {tagsData.map((item, index) => {
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

  const reviewSection = () => {
    return (
      <div className={styles.reviewSectionStyles}>
        <div className={styles.reviewTopStyles}>
          <p className={styles.reviewTextStyles}>Reviews</p>
          <div className={styles.reviewImgStyles}>
            <img src={downarrowicon} alt="" className={styles.imageWidth} />
          </div>
        </div>
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
          <div className={styles.instaImageStyles}>
            <img src={twittericon} alt="" className={styles.imageWidth} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.businessProfileSection}>
      <div className={styles.insideStyles}>
        {businessProfileTopSection()}
        {businessprofileMiddleSection()}
        <BusinessList />
      </div>
    </div>
  );
};

export default BusinessProfile;
