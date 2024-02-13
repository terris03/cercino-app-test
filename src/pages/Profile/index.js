import React, { useState,useEffect } from 'react';
import styles from './styles.module.css';
import axios from 'axios';
import {
  addicon,
  leftarrowicon,
  mailicon,
  pubfiveicon,
  rightarrowicon,
  snowicon,
  uparrowtwo,
} from 'resources/Images/images';
import { useNavigate } from 'react-router-dom';
import List from 'components/List';
import Foldable from 'components/foldable_component';

const Profile = () => {
  const navigate = useNavigate();

  const renderProfileArrrowSection = () => {
    return (
      <div className={styles.profileStyles}>
        <p
          className={styles.logoutTextStyles}
          onClick={() => {
            navigate('/login');
          }}
        >
          Logout
        </p>
      </div>
    );
  };
  const favoriteData = [
    {
      image: pubfiveicon,
      pubName: 'ElectroGroove Club',
      snowImage: snowicon,
      openTime: 'Open - Closes 3:00 AM',
      distance: '15 kms',
    },
    {
      image: pubfiveicon,
      pubName: 'ElectroGroove Club',
      snowImage: snowicon,
      openTime: 'Open - Closes 3:00 AM',
      distance: '15 kms',
    },
  ];
  let search_fav_Data={
    '':''
  }
  useEffect(()=>{
    axios
      .get('http://localhost:8080/profile_search')
      .then(function (response) {
        // handle success
        search_fav_Data = response.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  })
  const historyData = [
    {
      name: 'ElectroGroove Club',
      snowImg: snowicon,
      time: '11:30 PM',
      num: '20',
      vqt: 'VQT’S',
      date: '22-04-2023',
    },
    {
      name: 'ElectroGroove Club',
      snowImg: snowicon,
      time: '11:30 PM',
      num: '20',
      vqt: 'VQT’S',
      date: '22-04-2023',
    },
  ];

  const renderNameSection = () => {
    return (
      <div className={styles.nameSectionStyles}>
        <p className={styles.nameTextStyles}>JohnAndrew</p>
        <div className={styles.mailSectionStyles}>
          <div className={styles.mailImgStyles}>
            <img src={mailicon} alt="" className={styles.imageWidth} />
          </div>
          <p className={styles.mailTextStyles}>Andrew@gmail.com</p>
        </div>
      </div>
    );
  };

  const RenderFavoriteVenueSection = () => {
    const [toggle, setToggle] = useState(false);
    const [text, setText] = useState('');
    return (
      <div className={styles.favoriteSectionStyles}>
        <div
          className={styles.gapTwoStyles}
          onClick={() => {
            setToggle((n) => !n);
          }}
        >
          <p className={styles.favoriteTextStyles}>Favorite Venues</p>
          <div className={styles.favoriteImgStyles}>
            <img
              src={addicon}
              alt=""
              className={styles.imageWidth}
              style={{ transform: `rotate(${toggle ? '45deg' : '0deg'})` }}
            />
          </div>
        </div>
        {toggle ? (
          <>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            {Object.entries(search_fav_Data)
              .filter((value) => {
                return value[0].includes(text) || text === '';
              })
              .map((value) => (
                <p style={{ color: 'white' }}>
                  {value[0]}
                  {'\n'}
                </p>
              ))}
          </>
        ) : (
          <>
            {favoriteData.map((item, index) => {
              return (
                <div key={index} className={styles.favoritePubDetailsStyles}>
                  <div className={styles.favoriteLeftStyles}>
                    <img
                      src={item.image}
                      alt=""
                      className={styles.imageWidth}
                    />
                  </div>
                  <div className={styles.favoriteRightStyles}>
                    <div className={styles.rightTopStyles}>
                      <p className={styles.rightPubName}>{item.pubName}</p>
                    </div>
                    <div className={styles.rightBottomStyles}>
                      <p className={styles.rightBottomTextStyles}>
                        {item.openTime}
                      </p>
                      <p className={styles.rightDistanceStyles}>
                        {item.distance}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  };

  const renderBookingHistorySection = () => {
    return (
      <Foldable text={'Booking History'} fold_style={{ gap: '12px' }}>
        {historyData.map((item, index) => {
          return (
            <div key={index} className={styles.historyPubDetailsStyles}>
              <div className={styles.historyTopSectionStyles}>
                <div className={styles.historyTopStyles}>
                  <p className={styles.historyPubName}>{item.name}</p>
                </div>
              </div>
              <div className={styles.historyBottomStyles}>
                <div className={styles.historyAreaStyles}>
                  <p className={styles.leftNumTextStyles}>{item.num}</p>
                  <p className={styles.leftVqtsTextStyles}>{item.vqt}</p>
                </div>
                <p className={styles.historyDateTextStyles}>{item.date}</p>
              </div>
            </div>
          );
        })}
      </Foldable>
    );
  };

  const RenderHelpCenterSection = () => {
    const [textvalue, settextvalue] = useState('');
    return (
      <Foldable style_prop={{ paddingBottom: '100px' }} text={'Help Center'}>
        <textarea
          value={textvalue}
          onChange={(e) => settextvalue(e.target.value)}
        />
        <button
          onClick={() => {
            window.alert(textvalue);
          }}
          className={styles.helpCenterbuttonStyles}
          style={{
            width: 'min-content',
            fontSize: '9px',
            'align-self': 'left',
            backgroundColor: 'purple',
          }}
        >
          Click
        </button>
      </Foldable>
    );
  };
  return (
    <>
      <div className={styles.profileSection}>
        {renderProfileArrrowSection()}
        {renderNameSection()}
        <RenderFavoriteVenueSection />
        {renderBookingHistorySection()}
        <RenderHelpCenterSection />
      </div>
      <div
        style={{
          padding: '24px 24px',
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          width: '100%',
        }}
      >
        <List map_off={true} value={2} />
      </div>
    </>
  );
};

export default Profile;
