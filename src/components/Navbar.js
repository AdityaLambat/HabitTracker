import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/features/habitSlice";
import moment from "moment/moment";

const Navbar = ({ name }) => {
  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();

  // change state acording time
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  // function for add habit 
  const handleSave = () => {
    const habitName = document.getElementById("habitName").value;
    dispatch(addHabit(habitName));
    alert("Habit Added Successfully");
    document.getElementById("habitName").value = "";
  }

  const date = moment().format("MMMM DD YYYY");
  const time = moment().format("HH:mm:ss");

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <h3 className="navbar-brand">Time :  {/* According to time its shows morning,afternoon,evening and night */}
            {hour <= 12
              ? "Morning"
              : hour <= 17
                ? "Afternoon"
                : hour <= 21
                  ? "Evening"
                  : "Night"} {time}</h3>
                  <h3 className="navbar-brand">Date : {date}</h3>
          <div className="d-flex">
            <h4 id="icon" className="navbar-brand"><i className="fa-solid fa-list"></i>{name}</h4>
            <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <i className="fa-solid fa-plus"></i><b>Add Habits</b>
            </button>
          </div>
        </div>
      </nav>

      {/* modal for add habit form */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                New Habit
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="habitName" placeholder="Enter Habit Title" autoComplete="off"/>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal"><b>Cancel</b></button>
              <button type="button" className="btn btn-success" onClick={handleSave}><b>Save</b></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
