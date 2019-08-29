import React, { Component } from 'react';
import { connect } from "react-redux";
import "../index.css"

class Habits extends Component {
  render() {
    let habits;
    if (this.props.allHabits.length !== 0) {
      habits = this.props.allHabits.map(habit => {
        return (
          <div className="habit d-flex align-items-center" key={habit.id} style={{ backgroundColor: habit.color }}>
            <div className="col-12 d-flex flex-column justify-content-center align-items-start">
              <span className="habit__title">{habit.name}</span>
              <span className="habit__progress">{habit.consecutive} in a row | Longest streak: 8</span>
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
