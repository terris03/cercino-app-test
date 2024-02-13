import React, { useState } from 'react';
import styles from './styles.module.css';
import { uparrowtwo, addicon } from 'resources/Images/images';
/**
 *
 * @param {{fold_style:React.CSSProperties,text:String,children:any}} fold_style
 * @returns
 */
const Foldable = ({ children, text, fold_style = {}, style_prop = {} }) => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className={styles.historySectionStyles} style={style_prop}>
      <div
        className={styles.gapHistoryStyles}
        onClick={() => {
          settoggle((a) => !a);
        }}
      >
        <p className={styles.historyTextStyles}>{text}</p>
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
        <div style={fold_style} className={styles.fold_sec}>
          {children}
        </div>
      ) : (
        <div style={{ display: 'none' }}></div>
      )}
    </div>
  );
};
export default Foldable;
