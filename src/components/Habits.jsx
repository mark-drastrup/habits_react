import React, { Component } from 'react';
import { connect } from "react-redux";
import { FaCheck, FaTimes } from 'react-icons/fa';
import moment from "moment";
import axios from "axios";
import "../index.css";

class Habits extends Component {
  habitCompleted = async (habit) => {
    /* console.log(moment())
    console.log(moment(habit.updated)) */
    const today = moment();
    const lastUpdate = moment(habit.updated);
    const difference = today.diff(lastUpdate, 'days')
    if (habit.interval === "daily") {
      if (difference >= 1 && habit.isFirstCheckin) {
        const body = {
          consecutive: habit.consecutive + 1,
          isFirstCheckin: false,
          updated: moment()
        }
        if (body.consecutive > habit.longestStreak) {
          body.longestStreak = body.consecutive
        }
        await axios.patch(`http://localhost:8000/api/habits/${habit.id}/`, body);
        const habits = await axios("http://localhost:8000/api/habits/");
        this.props.fetchHabits(habits)
      } else if (difference >= 1) {
        await axios.patch(`http://localhost:8000/api/habits/${habit.id}/`, {
          consecutive: habit.connect + 1,
          updated: moment()
        });
        const habits = await axios("http://localhost:8000/api/habits/");
        this.props.fetchHabits(habits)
      } else {
        alert("You can only update once a day")
      }
    }

    if (habit.interval === "weekly") {
      if (difference >= 7 && habit.isFirstCheckin) {
        const body = {
          consecutive: habit.consecutive + 1,
          isFirstCheckin: false
        }
        if (body.consecutive > habit.longestStreak) {
          body.longestStreak = body.consecutive
        }
        await axios.patch(`http://localhost:8000/api/habits/${habit.id}/`, body);
        const habits = await axios("http://localhost:8000/api/habits/");
        this.props.fetchHabits(habits)
      } else if (difference >= 7) {
        await axios.patch(`http://localhost:8000/api/habits/${habit.id}/`, {
          consecutive: habit.connect + 1,
          updated: moment()
        });
        const habits = await axios("http://localhost:8000/api/habits/");
        this.props.fetchHabits(habits)
      } else {
        alert("You can only update once a week")
      }
    }

    if (habit.interval === "monthly") {
      if (difference >= 30 && habit.isFirstCheckin) {
        const body = {
          consecutive: habit.consecutive + 1,
          isFirstCheckin: false
        }
        if (body.consecutive > habit.longestStreak) {
          body.longestStreak = body.consecutive
        }
        await axios.patch(`http://localhost:8000/api/habits/${habit.id}/`, body);
        const habits = await axios("http://localhost:8000/api/habits/");
        this.props.fetchHabits(habits)
      } else if (difference >= 30) {
        await axios.patch(`http://localhost:8000/api/habits/${habit.id}/`, {
          consecutive: habit.connect + 1,
          updated: moment()
        });
        const habits = await axios("http://localhost:8000/api/habits/");
        this.props.fetchHabits(habits)
      } else {
        alert("You can only update once a month")
      }
    }
  }

  missedHabit = async (habit) => {
    await axios.patch(`http://localhost:8000/api/habits/${habit.id}/`, {
      consecutive: 0
    });
    const habits = await axios("http://localhost:8000/api/habits/");
    this.props.fetchHabits(habits)
  }

  render() {
    let habits;
    if (this.props.allHabits.length !== 0) {
      habits = this.props.allHabits.map(habit => {
        return (
          <div className="habit d-flex align-items-center" key={habit.id} style={{ backgroundColor: habit.color }}>
            <div className="col-12 d-flex justify-content-between align-items-center">
              <div className="col-10 d-flex flex-column justify-content-center align-items-start pl-0">
                <span className="habit__title">{habit.name}</span>
                <span className="habit__progress">{habit.consecutive} in a row | Longest streak: {habit.longestStreak}</span>
              </div>
              <div className="col-2 d-flex justify-content-around align-items-start pr-0">
                <span className="habit__icon">
                  <FaCheck onClick={() => this.habitCompleted(habit)}></FaCheck>
                </span>
                <span className="habit__icon">
                  <FaTimes onClick={() => this.missedHabit(habit)}></FaTimes>
                </span>
              </div>
            </div>
          </div>
        )
      })
    }
    return (
      <>
        {habits}
      </>
    );

  }
}

const mapStateToProps = state => {
  return {
    allHabits: state.allHabits,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHabits: async (habits) => {
      console.log(habits)
      dispatch({
        type: "FETCH_HABITS",
        data: habits
      });
    },
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Habits);
