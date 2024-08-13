import React, { useState } from 'react';
import '../Home/Home.css'

const Bookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <i 
      className={`fa ${isBookmarked ? 'fa-heart' : 'fa-heart-o'} bookmark`} 
      onClick={handleBookmarkClick}
    >
      {isBookmarked ? 'Job saved' : 'Save Job'}
    </i>
  );
};

export default Bookmark;
