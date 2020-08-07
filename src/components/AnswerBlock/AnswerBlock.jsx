import React from 'react'
import classes from './AnswerBlock.module.scss'
import AnswersList from './AnswersList/AnswersList.jsx'
import YourAnswerBlock from './YourAnswerBlock/YourAnswerBlock.jsx'

const AnswerBlock = props => {
  return (
    <section className={classes.AnswerBlock}>
      <AnswersList 
        answers={ props }
      />
      <YourAnswerBlock />
    </section>
  )
}

export default AnswerBlock