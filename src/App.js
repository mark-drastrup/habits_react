import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import HabitList from "./components/HabitList"
import NewHabit from "./components/NewHabit"
import Navbar from "./components/Navbar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid p-0 d-flex flex-column justify-content-between h-100">
          <div className="row no-gutters h-100">
            {this.props.activeView === "habitList" ?
              <HabitList></HabitList>
              :
              <NewHabit></NewHabit>
            }
          </div>
          <div className="row no-gutters">
            <Navbar></Navbar>
          </div>
        </div>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    allHabits: state.allHabits,
    activeView: state.activeView
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
)(App);
