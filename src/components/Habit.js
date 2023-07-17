import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom";

const Habit = ({ habit }) => {
  const today = new Date();
  const todayDay = today.getDay();
  let countDone = 0;
  //loop for getting habit done count
  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      countDone++;
    }
  }

  // call use navigate hook from react-router-dom in a navigate varriable 
  const navigate = useNavigate();

  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();

  // function call after click delete button on habit list
  const handleDelete = () => {
    dispatch(deleteHabit(habit.id));
    alert("Habit Deleted Successfully")
  }

  // this function call after click week view button
  // this function used for set current habit id to localstorage and navigate to weekview page
  const setId = () => {
    localStorage.setItem("id", habit.id)
    navigate("/week-view");
  }


  return (
    <div id="cont" className="habit container col-12">
      <div className="habit-left">
        <i className="fa fa-bolt"></i>
        <div>
          <h4 style={{ textTransform: "capitalize" }}>{habit.name}</h4>
          <p className="text-dark">{countDone}/{todayDay + 1} days</p>
        </div>
      </div>
      <div className="habit-right">
        <button id="icon2" className="btn btn-dark" onClick={setId}>
          <i className="fa-solid fa-calendar-week" ></i></button>
        <button className="btn btn-danger">
          <i className="fa-solid fa-trash" onClick={handleDelete}></i>
        </button>

      </div>
    </div>


  );
};

export default Habit;
