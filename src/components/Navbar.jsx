import React, { Component } from 'react';
import { connect } from "react-redux";
import { FaPlus } from 'react-icons/fa';
import "../index.css"

class Navbar extends Component {

  render() {
    return (
      <div className="col-12 navbar d-flex justify-content-around">
        <span className="navbar__menuitem" onClick={() => this.props.changeView("habitList")}>List</span>
        <FaPlus className="navbar__menuitem" onClick={() => this.props.changeView("newHabit")}></FaPlus>
        <span className="navbar__menuitem" onClick={() => this.props.changeView("stats")}>Stats</span>
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
    changeView: (view) => {
      dispatch({
        type: "CHANGE_VIEW",
        data: view
      });
    },
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
