import React from 'react'
import classes from './styles.module.css';

export default function Square({ squareData, colorCounter }) {

  // console.log('#1: square data:', squareData);
  return (
    <div className={`${classes.square} center ${colorCounter % 2 === 0 ? classes.blackSquare : classes.whiteSquare}`}>
      {
        squareData &&
        <p>Figure</p>
      }
    </div>
  )
}