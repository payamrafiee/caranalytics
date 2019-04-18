import React, { PureComponent } from 'react';
import { Header } from 'semantic-ui-react'
import _ from 'lodash';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { connect } from 'react-redux'

class Chart extends PureComponent {
  render() {
    const {data, numberOfCars} = this.props
    return (

      <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
        <Header as='h4'  style={{ color: '#848587'}}>{numberOfCars} Match Cars</Header>
        <BarChart
          width={500}
          height={400}
          data={data}
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

function sort(dataset, price, type, country) {
  let numberOfCars = 0
  const data = []
  const collections = _.filter(dataset, function(o) {
    if (o.price_start >= price.min && o.price_start <= price.max && type[o.type] && country[o.country]) return o;
  });
  const listOfLabels = [...new Set(collections.map(car => car.make))]
  for(let i in listOfLabels) {
    const count = _.filter(collections, function(o) {
      if(o.make === listOfLabels[i]) {
        return o
      }
    }).length
    numberOfCars = numberOfCars+  count
    data.push({make: listOfLabels[i], counts: count})
  }

  return {data, numberOfCars}
}

const mapStateToProps = state => {
  const dataset = state.dataset
  const {price, type, country} = state.filters
  const data = sort(dataset, price, type, country)

  return {
    data: data.data,
    numberOfCars: data.numberOfCars
  }
}

export default connect(mapStateToProps)(Chart);
