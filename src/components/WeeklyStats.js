import React, { Component } from 'react';
import { connect } from "react-redux";
import { Doughnut } from 'react-chartjs-2';
import moment from "moment";
import "../index.css"

class WeeklyStats extends Component {

  render() {
    const dailyHabits = this.props.allHabits.filter(habit => habit.interval === "weekly");
    const today = moment();
    const dailyCharts = dailyHabits.map(habit => {
      const startDate = moment(habit.created);
      console.log(startDate)
      const difference = startDate.diff(today, "weeks")
      console.log("This is difference", difference)
      return (
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
      )
    })
    return (
      <>
        {dailyCharts}
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
