import React from "react";
import { Doughnut } from "react-chartjs-2";
import createReactClass from "create-react-class";

const getState = props => {
  return {
    labels: ["Done", "Not done"],
    datasets: [
      {
        data: [props.numerator, props.denominator - props.numerator],
        backgroundColor: [props.color1, props.color2]
      }
    ]
  };
};

export default createReactClass({
  getInitialState() {
    return getState(this.props);
  },

  render() {
    const options = {
      legend: {
        display: false
      },
      cutoutPercentage: 85,
      events: [],
      responsive: true,
      maintainAspectRatio: false
    };
    return (
      <div>
        <Doughnut data={this.state} options={options} />
      </div>
    );
  }
});
