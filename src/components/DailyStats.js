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
      return (
        <div className="chart" key={habit.id}>
          <h3 className="chart__title">{habit.name}</h3>
          <Doughnut
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
        </div>
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
