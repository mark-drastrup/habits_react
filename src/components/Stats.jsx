import React, { Component } from 'react';
import { connect } from "react-redux";
import DailyStats from "./DailyStats"
import WeeklyStats from "./WeeklyStats"
import MonthlyStats from "./MonthlyStats"
import "../index.css"

class Stats extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-12 stats d-flex flex-column">
        <div className="stats__header d-flex justify-content-between align-items-center">
          <span className="stats__header__daily" onClick={() => this.props.changeStatsView("daily")}>Daily</span>
          <span className="stats__header__weekly" onClick={() => this.props.changeStatsView("weekly")}>Weekly</span>
          <span className="stats__header__monthly" onClick={() => this.props.changeStatsView("monthly")}>Monthly</span>
        </div>
        <div className="stats__content d-flex flex-column justify-content-center">
          {this.props.statsView === "daily" && <DailyStats></DailyStats>}
          {this.props.statsView === "weekly" && <WeeklyStats></WeeklyStats>}
          {this.props.statsView === "monthly" && <MonthlyStats></MonthlyStats>}
        </div>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    statsView: state.statsView
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeStatsView: (view) => {
      dispatch({
        type: "CHANGE_STATS_VIEW",
        data: view
      });
    },
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
