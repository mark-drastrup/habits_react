import React, { Component } from 'react';
import { connect } from "react-redux";
import { FaPlus } from 'react-icons/fa';
import "../index.css"

class Navbar extends Component {

  render() {
    return (
      <div className="col-12 navbar d-flex justify-content-center">
        <FaPlus className="navbar__addBtn" onClick={() => this.props.changeView("newHabit")}></FaPlus>
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
