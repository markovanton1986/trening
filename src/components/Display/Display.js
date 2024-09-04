import React from "react";
import "./main.css";

function Display(props) {
  let { item } = props;
  
  let itemArr = item.map((value) => (
    <div className="display__record" key={Math.random()}>
      <div className="record__date">{value.date}</div>
      <div className="record__distance">{value.distance}</div>
      <div className="record__actions">X</div>
    </div>
  ));
  return (
    <div className="steps__display">
      <div className="display__box-title">
        <span className="display__title-date">Дата (дд.мм.гг)</span>
        <span className="display__title-distance">Пройдено, км</span>
        <span className="display__title-actions">Действия</span>
      </div>
      <div className="display__list">{itemArr}</div>
    </div>
  );
}

export default Display;