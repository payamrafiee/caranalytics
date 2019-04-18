import React, { PureComponent } from 'react';
import { Header } from 'semantic-ui-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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

export default Chart;
