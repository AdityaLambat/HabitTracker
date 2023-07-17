import React from "react";
import { Link } from "react-router-dom";
import DayView from "./DayView";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const WeekView = () => {
  // call use selector hook for getting state from reducer
  let habitsState = useSelector((state) => state.habits);

  // getting habit from habits state acording to local storage id and set it on habit
  let habit = {}
  for (let i = 0; i < habitsState.length; i++) {
    if (habitsState[i].id === Number(localStorage.getItem("id"))) {
      habit = habitsState[i];
    }
  }

  return (
    <>
      <Navbar name="Week View" />
      <div id="cont" className="container col-18">
        <div id="nav2" className="navbar">
          <h3 className="text-center" style={{ textTransform: "capitalize" }}>Habit Title : {habit.name}</h3>
          <button className="btn btn-outline-dark" type="button">
            <Link to="/"><b>Detail View</b></Link>
          </button>
        </div>
        <div className="days-container">
          {habit.weekLog.map((day, index) => <DayView day={day} key={index} />)}
        </div>
      </div>
    </>
  );
};

export default WeekView;
