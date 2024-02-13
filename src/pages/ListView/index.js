import React, { useContext } from 'react';
import styles from './styles.module.css';
import Search from 'components/Search';
import { puboneicon, pubtwoicon, snowicon } from 'resources/Images/images';
import Divider from 'components/Divider';
import Button from 'components/Button';
import List from 'components/List';
import { useNavigate } from 'react-router-dom';
import { AppDataContext } from 'providers/AppDataProvider';

const ListView = () => {
  const { strings } = useContext(AppDataContext);
  const navigate = useNavigate();
  const pubData = {
    trend: [
      {
        image: puboneicon,
        pubName: strings.listViewStrings.pubName,
        publogo: snowicon,
        available: strings.listViewStrings.available,
        area: strings.listViewStrings.area,
      },
      {
        image: pubtwoicon,
        pubName: strings.listViewStrings.pubName,
        publogo: snowicon,
        available: strings.listViewStrings.available,
        area: strings.listViewStrings.area,
      },
      {
        image: pubtwoicon,
        pubName: strings.listViewStrings.pubName,
        publogo: snowicon,
        available: strings.listViewStrings.available,
        area: strings.listViewStrings.area,
      },
      {
        image: pubtwoicon,
        pubName: strings.listViewStrings.pubName,
        publogo: snowicon,
        available: strings.listViewStrings.available,
        area: strings.listViewStrings.area,
      },
    ],
    ongoing: [
      {
        image: pubtwoicon,
        pubName: strings.listViewStrings.pubName,
        publogo: snowicon,
        available: strings.listViewStrings.available,
        area: strings.listViewStrings.area,
      },
      {
        image: pubtwoicon,
        pubName: strings.listViewStrings.pubName,
        publogo: snowicon,
        available: strings.listViewStrings.available,
        area: strings.listViewStrings.area,
      },
      {
        image: pubtwoicon,
        pubName: strings.listViewStrings.pubName,
        publogo: snowicon,
        available: strings.listViewStrings.available,
        area: strings.listViewStrings.area,
      },
      {
        image: pubtwoicon,
        pubName: strings.listViewStrings.pubName,
        publogo: snowicon,
        available: strings.listViewStrings.available,
        area: strings.listViewStrings.area,
      },
    ],
  };

  const renderListViewTopSection = () => {
    return (
      <>
        <div
          style={{
            padding: '24px 24px 0px 24px',
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '100%',
          }}
        >
          <Search list_t={false} />
        </div>
        <div className={styles.listViewTopStyles}>
          <div className={styles.trendingSectionStyles}>
            <p className={styles.trendingTextStyles}>
              {strings.listViewStrings.trending}
            </p>
            <div className={styles.gapSectionOneStyles}>
              {pubData.trend.map((item, index) => {
                return (
                  <div key={index} className={styles.trendingImgSectionStyles}>
                    <div className={styles.trendingImgStyles}>
                      <img
                        src={item.image}
                        alt=""
                        className={styles.imageWidth}
                      />
                    </div>
                    <div className={styles.pubNameSectionStyles}>
                      <div className={styles.gapSectionTwoStyles}>
                        <p className={styles.pubNameTextStyles}>
                          {item.pubName}
                        </p>
                      </div>
                      <div className={styles.pubAreaStyles}>
                        <p className={styles.areaTextStyles}>{item.area}</p>
                        <div className={styles.pubLogoStyles}>
                          <img
                            src={item.publogo}
                            alt=""
                            className={styles.imageWidth}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderListViewBottomSection = () => {
    return (
      <div className={styles.recentStylesSection}>
        <p className={styles.recentTextStyles}>
          {strings.listViewStrings.ongoing}
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            overflow: 'auto',
          }}
          className={styles.weirdscaling} // pc: height: '305px', phone: height: '356px',
        >
          {pubData.ongoing.map((val, index) => {
            return (
              <div className={styles.recentPubDetailsStyles}>
                <div className={styles.recentRightStyles}>
                  <div className={styles.recentRightPubTextStyles}>
                    <div className={styles.rightTopStyles}>
                      <p className={styles.rightPubName}>
                        {strings.listViewStrings.pubName}
                      </p>
                      <div className={styles.rightPubImgStyles}>
                        <img
                          src={snowicon}
                          alt=""
                          className={styles.imageWidth}
                        />
                      </div>
                    </div>
                    <p className={styles.rightMiddleTextStyles}>
                      <span className={styles.rightOpenTextStyles}>
                        {strings.listViewStrings.open}&nbsp;
                      </span>
                      - &nbsp;{strings.listViewStrings.close}
                    </p>
                    <div className={styles.rightBottomStyles}>
                      <p className={styles.rightAvailableTextStyles}>
                        {strings.listViewStrings.available}
                      </p>
                      <p className={styles.rightAreaTextStyles}>
                        {strings.listViewStrings.area}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => navigate('/clubdetails')}
                    btName={'Buy  VQT'}
                    btnStyles={styles.vqtBtnStyles}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.listViewOuterSection}>
        <div className={styles.listViewSection}>
          {renderListViewTopSection()}
          {renderListViewBottomSection()}
          <div
            style={{
              padding: '0px 24px 24px 24px',
              position: 'absolute',
              bottom: '0px',
              left: '0px',
              width: '100%',
            }}
          >
            <List map_off={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListView;
