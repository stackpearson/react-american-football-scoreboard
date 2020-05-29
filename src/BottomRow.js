import React from "react";
import "./App.css";
import { useState } from 'react'

const BottomRow = () => {

const [currentDown, setDown] = useState(0)
const [currentQuarter, setQuarter] = useState(1)
const [currentToGo, setToGo] = useState(0)
const [currentBallOn, setBallOn] = useState(0)

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{currentDown}</div>
        <div className="downIncrementer">
          <button className="downIncrease" onClick={() => setDown (currentDown + 1)}>+</button>
          <button className="downIncrease" onClick={() => setDown (0)}>0</button>
        </div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{currentToGo}</div>
        <div className="yardOnIncrementer">
          <input className="toGoInput" placeholder="Yards"></input>
          <button className="toGoUpdate" onClick={() => setToGo (document.querySelector('.toGoInput').value)}>Update</button>
        </div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{currentBallOn}</div>
        <div className="yardOnIncrementer">
          <input className="ballOnInput" placeholder="Yards"></input>
          <button className="ballOnIncrease" onClick={() => setBallOn(document.querySelector('.ballOnInput').value)}>Update</button>
        </div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{currentQuarter}</div>
        <div className="ballOnIncrementer">
          <button className="onIncrease" onClick={() => setQuarter(currentQuarter + 1)}>+</button>
          <button className="downIncrease" onClick={() => setQuarter(1)}>0</button>
        </div>
      </div>
    </div>
  );
};

export default BottomRow;
