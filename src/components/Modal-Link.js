import React, { Component, useState } from 'react';
import Modal from 'react-modal';
import GPBadge from '../images/google-play-badge.png';
import aBadge from '../images/apple-app-store-badge.png';
import '../App.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'Column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '500px',
    height: '500px',
  },
};

const badgeStyle = {
  width: '350px',
  height: 'auto',
  margin: 'auto',
  alignSelf: 'center',
};

function Popup() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  Modal.setAppElement('#root');

  return (
    <div>
      <button className='btn btn-primary btn-modal' onClick={openModal}>
        Connect Now
      </button>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <h2 className='modal-header'>Get the App</h2>
        <span className='modal-close' onClick={closeModal}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' enable-background='new 0 0 40 40'>
            <line x1='15' y1='15' x2='25' y2='25' stroke='#333' stroke-width='2.5' stroke-linecap='round' stroke-miterlimit='10'></line>
            <line x1='25' y1='15' x2='15' y2='25' stroke='#333' stroke-width='2.5' stroke-linecap='round' stroke-miterlimit='10'></line>
            <circle class='circle' cx='20' cy='20' r='19' opacity='0' stroke='#000' stroke-width='2.5' stroke-linecap='round' stroke-miterlimit='10' fill='none'></circle>
            <path d='M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z' class='progress' stroke='#333' stroke-width='2.5' stroke-linecap='round' stroke-miterlimit='10' fill='none'></path>
          </svg>
        </span>

        <a href='https://play.google.com/store/apps/details?id=com.kaizen9.fet.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target='_blank' rel='noopener noreferrer' className='badge-link'>
          <img alt='Get it on Google Play' src={GPBadge} style={badgeStyle} />
        </a>
        <a href='https://www.apple.com/ios/app-store/' target='_blank' rel='noopener noreferrer' className='badge-link'>
          <img alt='Get it on Google Play' src={aBadge} style={badgeStyle} />
        </a>
      </Modal>
    </div>
  );
}

export default Popup;
