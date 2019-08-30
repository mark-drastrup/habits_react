import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import Habits from "./Habits"
import moment from "moment"

class HabitList extends Component {
  componentWillMount() {
    window.addEventListener('resize', this.props.handleWindowSizeChange);
  }
  async componentDidMount() {
    const habits = await axios("http://localhost:8000/api/habits/");
    /* console.log(habits.data[4].created)
    console.log(moment(habits.data[4].created)) */
    //console.log(moment(habits.data[0].created))
    this.props.handleWindowSizeChange()
    this.props.fetchHabits(habits)
  }

  render() {
    return (
      <div className="col-md-4 col-sm-12">
        <Habits></Habits>
      </div>
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
    fetchHabits: (habits) => {
      dispatch({
        type: "FETCH_HABITS",
        data: habits
      });
    },
    handleWindowSizeChange: () => {
      dispatch({
        "type": "SET_CURRENT_SCREENSIZE",
        "data": window.innerWidth
      })
    }
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitList);
