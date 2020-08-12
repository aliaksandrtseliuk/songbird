import React from 'react'
import classes from './QuestionPlayer.module.scss'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'

const QuestionPlayer = props => {
  return (
    <div className={classes.QuestionPlayer}>
      <AudioPlayer
        src={props.audio} 
        autoPlayAfterSrcChange={false}
      />
    </div>
  )
}

export default QuestionPlayer