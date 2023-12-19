/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import Square from '../Square';

import API from '../../api/api';
import classes from './styles.module.css';


export default function Chessboard() {
  const [chessboardData, setChessboardData] = useState(() => {
    const  initDashBoard = new Array(8);
    
    for (let i = 0; i < 8; i++) {
      initDashBoard[i] = new Array(8).fill(null);
    }
    
    return initDashBoard;
  });
  
  useEffect(async () => {
    // const board = await API.start();
    // setChessBoard(board);
  }, [])

  let colorCounter = 1;

  return (
    <div className={classes.board}>
      {
        chessboardData &&
        chessboardData.map((line, i) => {
          ++colorCounter;
          return line.map((squareData, j) => {
            ++colorCounter;
            return (
              <Square 
                key={`key_square_${i}:${j}`}
                squareData={squareData}
                colorCounter={colorCounter}
              />
            )
          })
        })
      }
    </div>
  )
}
