import React, { useState } from "react";
import Display from "../Display/Display";
import "./main.css";

class Tren {
  constructor(date, distance) {
    this.date = date
    this.distance = distance
  }
}

function Steps() {
  let [listArr, setListArr] = useState([]);

  const stepsForm = (e) => {
    e.preventDefault();
    let [date, distance] = e.target;
    let tren = new Tren(date.value, distance.value);
    setListArr(prev => [...prev, tren]);
  }

  listArr.sort((a, b) => {
    return a.date > b.date ? 1 : -1;
  });
  return (
    <div className="steps">
      <form className="steps__form" onSubmit={stepsForm}>
        <div className="form__box">
          <label className="form__title" htmlFor="date">Дата (дд.мм.гг)</label>
          <input className="form__input-date" type="date" name="date"/>
        </div>
        <div className="form__box">
          <label className="form__title" htmlFor="distance">Пройдено, км</label>
          <input className="form__input-distance" type="text" name="distance"/>
        </div>
        <button className="form__btn" type="submit">ОК</button>
      </form>

      <Display item={listArr}/>
    </div>
  );
}

export default Steps;