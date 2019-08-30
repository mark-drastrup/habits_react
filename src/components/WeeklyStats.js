import React, { Component } from 'react';
import { connect } from "react-redux";
import { Doughnut } from 'react-chartjs-2';
import moment from "moment";
import "../index.css"

class WeeklyStats extends Component {

  render() {
    const weeklyHabits = this.props.allHabits.filter(habit => habit.interval === "weekly");
    const today = moment();
    const weeklyCharts = weeklyHabits.map(habit => {
      const startDate = moment(habit.created);
      const difference = startDate.diff(today, "weeks")
      return (
        <div className="chart" key={habit.id}>
          <h3 className="chart__title">{habit.name}</h3>
          <Doughnut
            key={habit.id}
            data={{
              labels: [
                'Habits done',
                'Total Weeks',
              ],
              datasets: [{
                data: [difference, habit.total + 1],
                backgroundColor: [
                  '#61bd68',
                  '#1981bb',
                ],
                hoverBackgroundColor: [
                  '#61bd68',
                  '#1981bb',
                ]
              }]
            }}
          >
          </Doughnut>
        </div>
      )
    })
    return (
      <>
        {weeklyCharts}
      </>
    );

  }
}

const mapStateToProps = state => {
  return {
    allHabits: state.allHabits,

  };
};

export default connect(
  mapStateToProps,
  null
)(WeeklyStats);
