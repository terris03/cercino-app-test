import React, { useRef, useState } from 'react';
import styles from './styles.module.css';
import Header from 'components/Header';
import {
  crossicon,
  pubiconsix,
  tickicon,
  uploadicon,
} from 'resources/Images/images';
import { CircularProgressbar } from 'react-circular-progressbar';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const UpLoadingImages = () => {
  const ref = useRef();
  const navigate = useNavigate();

  const [is_Img_Selected, setIs_Img_Selected] = useState(false);
  const [is_Completed, setIsCompleted] = useState(false);

  const handleClick = () => {
    ref.current.click();
  };

  const selectImage = (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    if (file.type == 'image/jpeg' || file.type == 'image/png') {
      //   setImgData(file);
      //   setImage(URL.createObjectURL(event.target.files[0]));
      console.log(file, 'file');
      setIs_Img_Selected(true);
      setTimeout(() => {
        setIsCompleted(true);
      }, 5000);
    }
  };

  const renderUpLoadingTopSection = () => {
    return (
      <div className={styles.loadingTopSectionStyles}>
        <Header
          headerDescpName={'Signup for business'}
          headerImgStyles={styles.overRideStyles}
        />
        <div className={styles.upLoadingSecStyles}>
          <p className={styles.uploadingTextStyles}>
            Upload Images of your Business*
          </p>
          {!is_Img_Selected ? (
            <form encType="multipart/form-data">
              <div
                onClick={handleClick}
                htmlFor="ff"
                className={styles.imageBorderStyles}
              >
                <div className={styles.imageUploadStyles}>
                  <img src={uploadicon} alt="" className={styles.imageWidth} />
                </div>
                <div className={styles.gapOneStyles}>
                  <p className={styles.dropFileTextStyles}>
                    Drop your file here , or &nbsp;
                    <span className={styles.browseTextStyles}>Browse</span>
                  </p>
                  <p className={styles.maxFileTextStyles}>
                    Maximum file size 5 mb
                  </p>
                </div>
              </div>
              <input
                type="file"
                onChange={selectImage}
                name="image"
                ref={ref}
                style={{ display: 'none' }}
              />
            </form>
          ) : (
            <div className={styles.onUploadingStyles}>
              <div className={styles.leftStyles}>
                <div className={styles.uploadingImgStyles}>
                  <img src={pubiconsix} alt="" className={styles.imageWidth} />
                </div>
                <div className={styles.leftDescpStyles}>
                  <p className={styles.imageNameTextStyles}>
                    Business image1.png
                  </p>
                  <div className={styles.gapTwoStyles}>
                    <p className={styles.jpgTextStyles}>JPG</p>
                    <div className={styles.dotTextStyles}></div>
                    <p className={styles.sizeOfImgeStyles}>1.5 MB</p>
                  </div>
                </div>
              </div>
              {!is_Completed ? (
                <React.Fragment>
                  <div
                    style={{
                      width: 64,
                      height: 64,
                    }}
                  >
                    <CircularProgressbar
                      value={30}
                      text={`${30}%`}
                      styles={{
                        path: {
                          stroke: `rgba(47, 46, 46, ${37 / 100})`,
                        },
                        trail: {
                          // Trail color
                          stroke: 'rgba(149, 149, 149, 1)',
                        },
                        text: {
                          fill: '#CCC',
                          textSize: '12px',
                          dominantBaseline: 'middle',
                          textAnchor: 'middle',
                          fontFamily: 'Futura-Medium',
                        },
                      }}
                    />
                  </div>
                  <div className={styles.crossImgStyles}>
                    <img src={crossicon} alt="" className={styles.imageWidth} />
                  </div>
                </React.Fragment>
              ) : (
                <div className={styles.tickCompletedStyles}>
                  <img src={tickicon} alt="" className={styles.imageWidth} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderUploadingBottomSection = () => {
    return (
      <Button
        btName={'Next'}
        onClick={() => is_Completed && navigate('/contactinfo')}
      />
    );
  };
  return (
    <div className={styles.upLoadingSection}>
      {renderUpLoadingTopSection()}
      {renderUploadingBottomSection()}
    </div>
  );
};

export default UpLoadingImages;
