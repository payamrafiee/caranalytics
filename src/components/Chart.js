import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {

  render() {
    const {numberOfCars, listOfLabels} = this.props
    return (
      <div style={{width: '100%', height: 500}}>
        <Bar
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
          data={{
            labels: listOfLabels,
            datasets: [
              {
                label: 'Number of cars you can buy',
                backgroundColor: 'rgba(66, 170, 244, 0.4)',
                borderColor: 'rgba(0, 148, 255, 0.6)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(66, 170, 244, 0.7)',
                hoverBorderColor: 'rgba(0, 148, 255, 0.7)',
                data: numberOfCars
              }
            ]
          }}
        />
      </div>
    );
  }
}

export default Chart;

