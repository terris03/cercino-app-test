import React, { useContext } from 'react';
import styles from './styles.module.css';
import {
  a_exploreicon,
  na_exploreicon,
  a_profileicon,
  na_profileicon,
  a_scannericon,
  na_scannericon,
  listicon,
  mapicon,
} from 'resources/Images/images';
import { AppDataContext } from 'providers/AppDataProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const List = ({ value, map_off }) => {
  const { strings } = useContext(AppDataContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.profileMainStyles}>
      {!map_off ? (
        <div
          onClick={
            location.pathname === '/Home'
              ? () => navigate('/listview')
              : () => navigate('/Home')
          }
          className={styles.listSectionStyles}
        >
          <div className={styles.listImgStyles}>
            <img
              src={location.pathname === '/Home' ? listicon : mapicon}
              alt=""
              className={styles.imageWidthStyles}
            />
          </div>
          <p className={styles.listViewTextStyles}>
            {location.pathname === '/Home'
              ? strings.listStrings.list
              : strings.listStrings.map}
          </p>
        </div>
      ) : (
        <></>
      )}

      <div className={styles.bottomListSection}>
        <div
          onClick={value !== 0 ? () => navigate('/Home') : () => {}}
          className={`${styles.exploreSectionStyles} ${
            value === 0 ? 'selected' : 'nselected'
          }`}
        >
          <div className={styles.icon}>
            <img
              src={value === 0 ? a_exploreicon : na_exploreicon}
              className={styles.imageWidthStyles}
              alt=""
            />
          </div>
        </div>
        <div
          onClick={value !== 1 ? () => navigate('/myvqts') : () => {}}
          className={`${styles.scannerSectionStyles} ${
            value === 1 ? 'selected' : 'nselected'
          }`}
        >
          <div className={styles.icon}>
            <img
              src={value === 1 ? a_scannericon : na_scannericon}
              className={styles.imageWidthStyles}
              alt=""
            />
          </div>
        </div>
        <div
          onClick={value !== 2 ? () => navigate('/profile') : () => {}}
          className={`${styles.profileSectionStyles} ${
            value === 2 ? 'selected' : 'nselected'
          }`}
        >
          <div className={styles.icon}>
            <img
              src={value === 2 ? a_profileicon : na_profileicon}
              className={styles.imageWidthStyles}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default List;
