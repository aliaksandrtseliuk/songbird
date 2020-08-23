import React from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

import classes from "./BirdInfo.module.scss";

const BirdInfo = (props) => {
  return (
    <div className={classes.BirdInfo}>
      <div className={classes.BirdInfo__image}>
        <img src={props.bird.image} alt={props.bird.name} />
      </div>
      <h3 className={classes.BirdInfo__title}>{props.bird.name}</h3>
      <h4 className={classes.BirdInfo__latin}>{props.bird.species}</h4>
      <div className={classes.BirdInfo__audio}>
        <AudioPlayer src={props.bird.audio} autoPlayAfterSrcChange={false} />
      </div>
      <p className={classes.BirdInfo__description}>{props.bird.description}</p>
    </div>
  );
};

export default BirdInfo;
