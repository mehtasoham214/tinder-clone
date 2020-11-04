import React from "react";
import "./SwipeButton.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButton() {
  return (
    <div className="swipeButton">
      <IconButton>
        <ReplayIcon fontsize="large" className="swipeButton__repeat" />
      </IconButton>
      <IconButton>
        <CloseIcon fontsize="large" className="swipeButton__left" />
      </IconButton>
      <IconButton>
        <StarRateIcon fontsize="large" className="swipeButton__star" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontsize="large" className="swipeButton__right" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontsize="large" className="swipeButton__lightning" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
