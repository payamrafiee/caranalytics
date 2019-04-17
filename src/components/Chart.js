import React, { PureComponent } from 'react';
import _ from 'lodash';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { connect } from 'react-redux'

class Chart extends PureComponent {
  render() {
    return (
      <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <BarChart
          width={500}
          height={400}
          data={this.props.data}
          margin={{
          right: 40,
          top: 20
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="make" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="counts" fill="#66a0ff" />
        </BarChart>
      </div>
    );
  }
}

function sort(dataset, price, type) {
  const numberOfCars = []
  const data = []
  const collections = _.filter(dataset, function(o) {
    if (o.price_start >= price.min && o.price_start <= price.max && type[o.type]) return o;
  });
  const listOfLabels = [...new Set(collections.map(car => car.make))]
  for(let i in listOfLabels) {
    const count = _.filter(collections, function(o) {
      if(o.make === listOfLabels[i]) {
        return o
      }
    }).length
    numberOfCars.push(count)
    data.push({make: listOfLabels[i], counts: count})
  }

  return data
}

const mapStateToProps = state => {
  const dataset = state.dataset
  const {price, type} = state.filters
  const data = sort(dataset, price, type)

  return {
    data: data
  }
}

export default connect(mapStateToProps)(Chart);
