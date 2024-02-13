import React, { useRef } from 'react';
import styles from './styles.module.css';
import Header from 'components/Header';
import Button from 'components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from 'components/Input';
import {
  crossicon,
  dateicon,
  genderequalityicon,
  lightdownarrow,
  plusicon,
  timeicon,
  uploadicon,
  wheelchairicon,
  whiteUparrow,
} from 'resources/Images/images';
import { ReactDOM } from 'react-dom';
import Popup from 'components/PopUp';

const CreatingEvent = () => {
  const naviagate = useNavigate();

  const ref = useRef();

  const [step, setStep] = useState(1);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [highLightDressCode, setHighLightDressCode] = useState(0);
  const [age, setAge] = useState(0);
  const [tags, setTags] = useState('');
  const [accessibility, setAccessibility] = useState(0);
  const [is_StepChanged, setIs_StepChanged] = useState(1);
  const [is_Img_Selected, setIs_Img_Selected] = useState(false);

  // function to open a popup
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const selectImage = (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    if (file.type == 'image/jpeg' || file.type == 'image/png') {
      //   setImgData(file);
      //   setImage(URL.createObjectURL(event.target.files[0]));
      console.log(file, 'file');
      setIs_Img_Selected(true);
    }
  };

  const handleClick = () => {
    ref.current.click();
  };

  const clubsData = [
    {
      name: 'Dance Clubs',
    },
    {
      name: 'Comedy Club',
    },
    {
      name: 'Lounge bar',
    },
    {
      name: 'Rooftop bar',
    },
    {
      name: 'Live Music',
    },
    {
      name: 'Karaoke bar',
    },
    {
      name: 'Other',
    },
  ];

  const timeData = [
    {
      descp: 'Starts At',
    },
    {
      descp: 'Closes At',
    },
  ];

  const ageData = [
    {
      age: '18+',
    },
    {
      age: '21+',
    },
    {
      age: '30+',
    },
    {
      age: 'All Ages',
    },
  ];

  const dressTypesData = [
    {
      dressCode: 'Casual',
    },
    {
      dressCode: 'Cocktail Attire',
    },
    {
      dressCode: 'Formal',
    },
    {
      dressCode: 'Casual Chic',
    },
    {
      dressCode: 'Smart Casual',
    },
  ];

  const accessibilityData = [
    {
      image: genderequalityicon,
      text: 'Gender Neutral Toilets',
    },
    {
      image: wheelchairicon,
      text: 'Wheelchair',
    },
  ];

  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  // function prettyDate2(time) {
  //   var date = new Date(parseInt(time));
  //   var localeSpecificTime = date.toLocaleTimeString();
  //   return localeSpecificTime.replace(/:\d+ /, ' ');
  // }

  const renderMethod = () => {
    if (step === 4) {
      naviagate('/overview');
    } else {
      setStep(step + 1);
    }
  };

  const handlePopUpMethod = () => {
    if (is_StepChanged === 1) {
      setIs_StepChanged(is_StepChanged + 1);
    } else {
      setPopupOpen(!isPopupOpen);
      setStep(step + 1);
    }
  };
  const selectTags = (index) => {
    setTags(index);
  };

  const selectDressCode = (index) => {
    setHighLightDressCode(index);
  };

  const selectAge = (index) => {
    setAge(index);
  };

  const selectAccessibility = (index) => {
    setAccessibility(index);
  };

  const renderCreatingTopSection = () => {
    return (
      <div className={styles.creatingTopSectionStyles}>
        <Header
          headerDescpName={'Creating event'}
          headerImgStyles={styles.overrideStyles}
        />
        <div className={styles.divderSection}>
          {Array.from(Array(4)).map((item, index) => (
            <div
              key={index}
              className={[
                styles.dividerLineStyles,
                index + 1 <= step && styles.dividerColorStyles,
              ].join(' ')}
            ></div>
          ))}
        </div>
        {stepOneSection()}
        {stepTwoSection()}
        {stepThreeSection()}
        {stepFourSection()}
      </div>
    );
  };

  const stepOneSection = () => {
    return (
      <React.Fragment>
        {step === 1 && (
          <div className={styles.gapSectionStyles}>
            <div className={styles.tellUsStyles}>
              <p className={styles.tellUsTextStyles}>Tell us about the event</p>
              <Input type={'text'} placeholder={'Event Name'} />
              <Input type={'text'} placeholder={'Describe the event'} />
            </div>
            <div className={styles.tagsStyles}>
              <p className={styles.tagTextStyles}>Tags</p>
              <div className={styles.tagsGapStyles}>
                {clubsData.map((item, index) => {
                  return (
                    <p
                      onClick={() => selectTags(index)}
                      key={index}
                      className={`${styles.clubTextStyles} ${
                        tags === index ? styles.highLightTagsStyles : ''
                      }`}
                    >
                      {item.name}
                    </p>
                  );
                })}
              </div>
              {tags === clubsData.length - 1 && (
                <Input type={'text'} placeholder={'Add a tag Name'} />
              )}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  };

  const stepTwoSection = () => {
    return (
      <React.Fragment>
        {step === 2 && (
          <div className={styles.timeStyles}>
            <div className={styles.startingStyles}>
              {timeData.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <p className={styles.startingTextStyles}>{item.descp}</p>
                    <div className={styles.dateAndTimeStyles}>
                      <div className={styles.dateAndImgStyles}>
                        <p className={styles.startTextStyles}>{currDate}</p>
                        <div className={styles.dateImgStyles}>
                          <img
                            src={dateicon}
                            alt=""
                            className={styles.imageWidth}
                          />
                        </div>
                      </div>
                      <div className={styles.timeAndImgStyles}>
                        <div className={styles.timeGapStyles}>
                          <p className={styles.timeTextStyles}>{currTime}</p>
                          {/* <p className={styles.amPmTextStyles}>PM</p> */}
                        </div>
                        <div className={styles.timeImgStyles}>
                          <img
                            src={timeicon}
                            alt=""
                            className={styles.imageWidth}
                          />
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  };

  const stepThreeSection = () => {
    return (
      <React.Fragment>
        {step === 3 && (
          <div className={styles.addPerformanceStyles}>
            <p className={styles.performanceTextStyles}>Performance </p>
            <div className={styles.addPerformanceGapStyles}>
              <div className={styles.plusImgStyles}>
                <img src={plusicon} alt="" className={styles.imageWidth} />
              </div>
              <p className={styles.addPerformancetextStyles}>Add Performance</p>
            </div>
            <Button
              btName={'Add'}
              btnStyles={styles.addBtnStyles}
              onClick={togglePopup}
            />
          </div>
        )}
      </React.Fragment>
    );
  };

  const renderpopUpStyles = () => {
    return (
      <div className={styles.popUPStyles}>
        <div className={styles.popUpTopStyles}>
          <p className={styles.createPerformanceTextStyles}>
            Create new performance
          </p>
          <div onClick={togglePopup} className={styles.crossImgStyles}>
            <img src={crossicon} alt="" className={styles.imageWidth} />
          </div>
        </div>
        {popUpStepOne()}
        {popUpStepTwo()}
        <Button btName={'Next'} onClick={() => handlePopUpMethod()} />
      </div>
    );
  };

  const popUpStepOne = () => {
    return (
      <React.Fragment>
        {is_StepChanged === 1 && (
          <div className={styles.inputGapStyles}>
            <div className={styles.performanceInputStyles}>
              <p className={styles.newPerformancetextStyles}>New Performance</p>
              <Input type={'text'} placeholder={'Performed by'} />
            </div>
            <div className={styles.performanceInputStyles}>
              <p className={styles.newPerformancetextStyles}>
                New Performance{' '}
              </p>
              <Input type={'text'} placeholder={'Performed by'} />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  };

  const popUpStepTwo = () => {
    return (
      <React.Fragment>
        {is_StepChanged === 2 && (
          <div className={styles.upLoadingStyles}>
            <p className={styles.upLoadTextStyles}>
              Upload Images of Performance
            </p>
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
                    Maximum file size 50 mb
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
          </div>
        )}
      </React.Fragment>
    );
  };

  const stepFourSection = () => {
    return (
      <React.Fragment>
        {step === 4 && (
          // <div className={styles.allowedSectionStyles}>
          <div className={styles.allowedStyles}>
            <p className={styles.allowedOnlyTextStyles}>Allowed only</p>
            {ageGroupSection()}
            {dressCodeSection()}
            {accessibilitySection()}
            {ticketsSection()}
            {priceSection()}

            {/* </div> */}
          </div>
        )}
      </React.Fragment>
    );
  };

  const ageGroupSection = () => {
    return (
      <div className={styles.ageGroupStyles}>
        <p className={styles.ageGroupTextStyles}>Age Groups</p>
        <div className={styles.ageGroupGapStyles}>
          {ageData.map((item, index) => {
            return (
              <p
                onClick={() => selectAge(index)}
                key={index}
                className={`${styles.ageNumStyles} ${
                  age === index ? styles.highLightAgeStyles : ''
                }`}
              >
                {item.age}
              </p>
            );
          })}
        </div>
      </div>
    );
  };

  const dressCodeSection = () => {
    return (
      <div className={styles.dressCodeStyles}>
        <p className={styles.dressCodeTextStyles}>Dress Code</p>
        <div className={styles.dressCodeGapStyles}>
          {dressTypesData.map((item, index) => {
            return (
              <p
                onClick={() => selectDressCode(index)}
                key={index}
                className={`${styles.dressCodeNametyles} ${
                  highLightDressCode === index
                    ? styles.highLightDressCodeStyles
                    : ''
                }`}
              >
                {item.dressCode}
              </p>
            );
          })}
        </div>
      </div>
    );
  };

  const accessibilitySection = () => {
    return (
      <div className={styles.accessibilityStyles}>
        <p className={styles.accessibilityTextStyles}>Accessibility</p>
        <div className={styles.accessibilityGapStyles}>
          {accessibilityData.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => selectAccessibility(index)}
                className={`${styles.accessibilityLeftStyles} ${
                  accessibility === index
                    ? styles.accessibilityActiveStyles
                    : ''
                }`}
              >
                <div className={styles.leftImgStyles}>
                  <img src={item.image} alt="" className={styles.imageWidth} />
                </div>
                <p className={styles.genderTextStyles}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const ticketsSection = () => {
    return (
      <div className={styles.ticketStyles}>
        <p className={styles.ticketTextStyles}>Ticket Availability </p>
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
    );
  };

  const priceSection = () => {
    return (
      <div className={styles.priceStyles}>
        <p className={styles.priceTextStyles}>Set Ticket Price </p>
        <Input
          type={'number'}
          onWheel={(event) => event.currentTarget.blur()}
          placeholder={'Enter price of vqt'}
        />
      </div>
    );
  };

  const renderCreatingBottomSection = () => {
    return (
      <Button
        btName={step === 4 ? 'submit' : 'Next'}
        // btName={'Next'}
        onClick={() => renderMethod()}
      />
    );
  };
  return (
    <div className={styles.outSideStyles}>
      <div className={styles.creatingEventSection}>
        {renderCreatingTopSection()}
        {renderCreatingBottomSection()}
      </div>
      <Popup
        show={isPopupOpen}
        onClose={togglePopup}
        showCloseButton={false}
        customPopUpStyles={styles.overRidePopUpStyles}
      >
        {renderpopUpStyles()}
      </Popup>
    </div>
  );
};

export default CreatingEvent;
