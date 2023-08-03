/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavouriteButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <span style={{ position: 'relative' }}>
      <button onClick={handleLikeClick} style={{ position: 'absolute', top: 0, right: 0, border: 'none', background: 'transparent', cursor: 'pointer' }}>
        {isLiked ? <FavoriteIcon color="primary" fontSize="large" /> : <FavoriteBorderIcon color="primary" fontSize="large" />}
      </button>
    </span>
  );
};

export default FavouriteButton;