import React from 'react';
import Apple from '../images/apple.png';

import GPBadge from '../images/google-play-badge.png';
import aBadge from '../images/apple-app-store-badge.png';

function Landing() {
  const badgeStyle = {
    width: '250px',
    height: 'auto',
    margin: 'auto',
    alignSelf: 'center',
  };

  return (
    <div className='container' id='outer-container'>
      <div className='landing-page' id='page-wrap'>
        <div className='landing-content'>
          <h1 className='header'>Redefine Dating With Trove</h1>
          <div className='buttons'>
            {/* <Popup /> */}
            <a href='https://play.google.com/store/apps/details?id=com.kaizen9.fet.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target='_blank' rel='noopener noreferrer' className='badge-link'>
              <img alt='Get it on Google Play' src={GPBadge} style={badgeStyle} />
            </a>
            <a href='https://www.apple.com/ios/app-store/' target='_blank' rel='noopener noreferrer' className='badge-link'>
              <img alt='Get it on Google Play' src={aBadge} style={badgeStyle} />
            </a>
            {/* <button className='btn btn-primary'>
              
            </button> */}
          </div>
        </div>
        <img src={Apple} alt='iosApp' className='iphone' />
      </div>
    </div>
  );
}

export default Landing;
