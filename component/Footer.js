import React, { useState, useEffect } from 'react'

export default function Footer() {
  const images = ['./ho1.jpg', './ho2.jpg', './ho3.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the currentImageIndex to the next image in the array
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='end flex justify-around'>
        <div className='End_note'>
          <p>Everything you need to grow your
          </p>
          <p>  Real Estate business.</p>
          <button className='start_now'>
            Talk to Us
          </button>
        </div>
        <div>
          <img src={images[currentImageIndex]} />
        </div>
      </div>
      <div className='footer bg-black'>
        <hr className='footer_line' />
        <div className='flex justify-around mt-10 '>
          <p>CALEBOMOJUWON@GMAIL.COM</p>
          <p>Copyright CHASE</p>
          <div className='flex '>
            <img className='footer_icon' width="25" height="25" src="https://img.icons8.com/ios/50/EBEBEB/instagram-new--v1.png" alt="instagram-new--v1" />
            <img className='footer_icon' width="25" height="25" src="https://img.icons8.com/ios-filled/50/EBEBEB/twitter.png" alt="twitter" />
            <img className='footer_icon' width="25" height="25" src="https://img.icons8.com/ios/50/EBEBEB/facebook-new.png" alt="facebook-new" />
            <img className='footer_icon' width="25" height="25" src="https://img.icons8.com/ios-filled/50/EBEBEB/behance.png" alt="behance" />
          </div>
        </div>
      </div>
    </div>
  )
}
