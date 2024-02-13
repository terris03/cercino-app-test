import React, { useState } from 'react';
import styles from './styles.module.css';
import {
  Googlepay,
  ApplePay,
  Stripe,
  downarrowicon,
  leftarrowicon,
  pubFouricon,
  snowicon,
  uparrowicon,
} from 'resources/Images/images';
import Divider from 'components/Divider';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [is_Show, setIs_Show] = useState(false);

  const paymentData = [
    {
      cardType: 'Credit / Debit card',
      image: [Stripe], // An array of images for this payment type
    },
    {
      cardType: 'Google / Apple pay',
      image: [Googlepay, ApplePay],
    },
  ];

  const Payments = () => {
    return (
      <div style={{ display: "flex", flexDirection: 'row' }}>
        <p>Payment Options.</p>
      </div>
    );
  };

  const renderpaymentTopSection = () => {
    return (
      <div className={styles.paymentTopSectionStyles}>
        <div onClick={() => navigate(-1)} className={styles.arrowIconStyles}>
          <img src={leftarrowicon} alt="" className={styles.imageWidth} />
        </div>
        <p className={styles.paymentTextStyles}>Payment</p>
      </div>
    );
  };

  const renderPaymentBottomSection = () => {
    return (
      <div className={styles.paymentBottomSectionStyles}>
        {venueDetails()}
        <div style={{display:'flex', flexDirection:"column", justifyContent:"space-around"}}>
        {paymentDetails()}
        {paymentButton()}
        </div>
      </div>
    );
  };

  const venueDetails = () => {
    return (
      <div className={styles.venueSectionStyles}>
        <p className={styles.venueTextStyles}>Venue Details</p>
        <div className={styles.venuePubDetailsStyles}>
          <div className={styles.veneLeftStyles}>
            <img src={pubFouricon} alt="" className={styles.imageWidth} />
          </div>
          <div className={styles.venueRightStyles}>
            <div className={styles.rightTopStyles}>
              <p className={styles.rightPubName}>ElectroGroove Band</p>
              <div className={styles.rightPubImgStyles}>
                <img src={snowicon} alt="" className={styles.imageWidth} />
              </div>
            </div>
            <div className={styles.rightMiddleStyles}>
              <p className={styles.rightMiddleTextStyles}>
                <span className={styles.rightOpenTextStyles}>Open&nbsp;</span>-
                &nbsp; Closes 3:00 AM
              </p>
              <p className={styles.rightDistanceStyles}>15 kms</p>
            </div>
            <div className={styles.rightBottomStyles}>
              <p className={styles.rightAvailableTextStyles}>Available</p>
              <p className={styles.rightAreaTextStyles}>20 Vqt’s</p>
            </div>
          </div>
        </div>
        <div className={styles.dottedStyles}></div>
        <div className={styles.ticketSectionStyles}>
          <div className={styles.ticketsLeftSection}>
            <p className={styles.ticketNoTextStyles}>Number Of Tickets</p>
            <div className={styles.areaSectionStyles}>
              <p className={styles.ticketAvailableTextStyles}>Available</p>
              <p className={styles.ticketAreaTextStyles}>20 Vqt’s</p>
            </div>
          </div>
          <div className={styles.ticketsRightSection}>
            <div className={styles.upArrowImgStyles}>
              <img src={uparrowicon} alt="" className={styles.imageWidth} />
            </div>
            <p className={styles.countValue}>01</p>
            <div className={styles.downArrowImgStyles}>
              <img src={downarrowicon} alt="" className={styles.imageWidth} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const paymentDetails = () => {
    return (
      <div className={styles.paymentSectionStyles}>
        <div
          className={styles.paymentTypeSection}
          onClick={() => setIs_Show(!is_Show)}
        >
          <p className={styles.textStyles}>Payment Types</p>
          <img src={downarrowicon} />
        </div>
        {is_Show && (
          <>
            {paymentData.map((item, index) => {
              return (
                <div className={styles.paymentTypeSection} key={index}>
                  <p className={styles.textStyles}>{item.cardType}</p>
                  <div>
                  {item.image.map((img, imgIndex) => {
                    return (
                      <img src={img} key={imgIndex} />
                    );
                  })}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  };
  

  const paymentButton = () => {
    return (
      <div className={styles.priceButtonStyles}>
        <div className={styles.priceLeftStyles}>
          <p className={styles.priceTextStyles}>Price</p>
          <p className={styles.amontCurrencyStyles}>1500 Kr</p>
        </div>
        <Button
          onClick={() => navigate('/qrcode')}
          btName={'Buy  VQT'}
          btnStyles={styles.buyStyles}
        />
      </div>
    );
  };

  return (
    <div className={styles.paymentSection}>
      {renderpaymentTopSection()}
      {renderPaymentBottomSection()}
    </div>
  );
};

export default Payment;
