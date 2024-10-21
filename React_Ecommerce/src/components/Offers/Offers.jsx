import React from 'react';
import './Offers.css';
import bulkimg from '../assets/bulkimg.png';

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h2>Explore the latest tech gadgets and accessories designed to enhance your digital lifestyle</h2>
        <h2 style={{ color: 'gold' }}>Exclusive Offers For You</h2>
        <p>ONLY ON OUR WEBSITE</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={bulkimg} alt="Exclusive Offers" />
      </div>
    </div>
  );
};

export default Offers;
