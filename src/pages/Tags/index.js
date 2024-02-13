import React from 'react';
import styles from './styles.module.css';
import Header from 'components/Header';
import Input from 'components/Input';
import { mapicon } from 'resources/Images/images';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const BusinessTags = () => {
  const navigate = useNavigate();

  const renderTagsTopSection = () => {
    return (
      <div className={styles.tagTopSectionStyles}>
        <Header
          headerDescpName={'Signup for business'}
          headerImgStyles={styles.overRideStyles}
        />
        <div className={styles.linkStyles}>
          <div className={styles.instaLinksStyles}>
            <p className={styles.instaTextStyles}>Instagram links</p>
            <Input type={'text'} placeholder={'Enter link here'} />
          </div>
          <div className={styles.locationStyles}>
            <p className={styles.locationTextStyles}>Location*</p>
            <div className={styles.gapOneStyles}>
              <Input type={'text'} placeholder={'Location'} />

              <div className={styles.gapTwoStyles}>
                <p className={styles.locateMapTextStyles}>Locate in map</p>
                <div className={styles.mapImgStyles}>
                  <img src={mapicon} alt="" className={styles.imageWidth} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTagsBottomSection = () => {
    return <Button btName={'Next'} onClick={() => navigate('/uploading')} />;
  };

  return (
    <div className={styles.tagsSectionStyles}>
      {renderTagsTopSection()}
      {renderTagsBottomSection()}
    </div>
  );
};

export default BusinessTags;
