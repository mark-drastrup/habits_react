import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

class NewHabit extends Component {
  submit = async () => {
    await axios.post("http://localhost:8000/api/habits/", {
      name: this.props.inputValue,
      user: "http://localhost:8000/api/users/1/",
      color: this.props.color,
      consecutive: 0,
      created: new Date(),
      updated: new Date()
    });
    this.props.resetValues();
  }

  render() {
    return (
      <div className="col-md-4 col-sm-12 newhabit d-flex flex-column">
        <div className="newhabit__header d-flex justify-content-between align-items-center">
          <span className="newhabit__header__cancel" onClick={this.props.goBack}>Cancel</span>
          <span className="newhabit__header__save" onClick={this.submit}>Save</span>
        </div>
        <div className="newhabit__content d-flex flex-column justify-content-around">
          <div className="d-flex flex-column newhabit__inputgroup">
            <h3 className="newhabit__title">New Habit</h3>
            <input type="text" className="newhabit__input" value={this.props.inputValue} onChange={this.props.updateValue}></input>
          </div>
          <div className="d-flex flex-column">
            <h3 className="newhabit__title">How Often</h3>
            <div className="d-flex justify-content-around newhabit_regularity">
              <div
                onClick={() => this.props.setInterval("daily")}
                className={"newhabit_regularity_item " + (this.props.interval === "daily" ? "active" : "")}
              >
                Daily
              </div>
              <div
                onClick={() => this.props.setInterval("weekly")}
                className={"newhabit_regularity_item " + (this.props.interval === "weekly" ? "active" : "")}
              >
                Weekly
              </div>
              <div
                onClick={() => this.props.setInterval("monthly")}
                className={"newhabit_regularity_item " + (this.props.interval === "monthly" ? "active" : "")}
              >
                Monthly
              </div>
            </div>
          </div>
          <div className="d-flex flex-column newhabit__inputgroup">
            <h3 className="newhabit__title">Color</h3>
            <div className="d-flex justify-content-around newhabit_regularity">
              <div
                onClick={() => this.props.setColor("#8d5cb2")}
                className={"newhabit__colorpicker purple " + (this.props.color === "#8d5cb2" ? "active" : "")}>
              </div>
              <div
                onClick={() => this.props.setColor("#61bd68")}
                className={"newhabit__colorpicker green " + (this.props.color === "#61bd68" ? "active" : "")}>
              </div>
              <div
                onClick={() => this.props.setColor("#1981bb")}
                className={"newhabit__colorpicker blue " + (this.props.color === "#1981bb" ? "active" : "")}>
              </div>
              <div
                onClick={() => this.props.setColor("#bc4341")}
                className={"newhabit__colorpicker red " + (this.props.color === "#bc4341" ? "active" : "")}>
              </div>
              <div
                onClick={() => this.props.setColor("#17a2b8")}
                className={"newhabit__colorpicker cyan " + (this.props.color === "#17a2b8" ? "active" : "")}>
              </div>
            </div>
          </div>
        </div>

      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    allHabits: state.allHabits,
    interval: state.interval,
    color: state.color,
    inputValue: state.inputValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInterval: async (interval) => {
      dispatch({
        type: "SET_INTERVAL",
        data: interval
      });
    },
    setColor: async (color) => {
      dispatch({
        type: "SET_COLOR",
        data: color
      });
    },
    updateValue: async (e) => {
      dispatch({
        type: "UPDATE_VALUE",
        data: e.target.value
      });
    },
    resetValues: () => {
      dispatch({
        type: "RESET_VALUES",
      });
    },
    goBack: () => {
      dispatch({
        type: "GO_BACK"
      })
    }
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewHabit);
