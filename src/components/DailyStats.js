import React, { Component } from 'react';
import { connect } from "react-redux";
import { Doughnut } from 'react-chartjs-2';
import moment from "moment";
import "../index.css"

class DailyStats extends Component {

  render() {
    const dailyHabits = this.props.allHabits.filter(habit => habit.interval === "daily");

    const today = moment();
    const dailyCharts = dailyHabits.map(habit => {
      const startDate = moment(habit.created);
      const difference = today.diff(startDate, "days")
      console.log("This is total", habit.total)
      return (
        <Doughnut
          key={habit.id}
          data={{
            labels: [
              'Total Days',
              'Habits done',
            ],
            datasets: [{
              data: [difference, habit.total],
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
)(DailyStats);
