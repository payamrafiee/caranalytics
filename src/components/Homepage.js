import React, { Component } from 'react';
import { Button, Container, Segment, Grid, Header} from 'semantic-ui-react';
import InputRange from 'react-input-range';
import { connect} from 'react-redux';
import 'react-input-range/lib/css/index.css';

import { reset, setPrice, setType } from '../store/actions/filters';

import Footer from '../components/Footer'
import Checkbox from './Checkbox';
import Chart from './Chart';

class Homepage extends Component {

  _onResetClick = () => {
    this.props.reset()
  }

  _onCheckboxClick = (e, {label, checked}) => {
    this.props.setType({[label]: checked})
  }

  render() {
    // const { numberOfMatch, listOfLabels, numberOfCars } = this.props.filters
    const {sedan, suv, coupe, convertible, hatchback, wagon, truck, van, minivan} = this.props.type
    return (
      <Container style={{marginTop: '3rem'}}>
        <Grid columns={2} stackable >
          <Grid.Column>
            <Segment>

              <Header as='h4'  style={{ paddingBottom: '1rem' }}>Price:</Header>
              <div style={{padding: '0 1rem 0 1rem'}}>
                <InputRange
                  step={1000}
                  maxValue={400000}
                  minValue={0}
                  value={this.props.price}
                  onChange={value => this.props.setPrice(value)}
                />
              </div>

              <Header as='h4'  style={{ paddingTop: '2rem' }}>Type:</Header>
              <Grid>
                <Grid.Column>
                  <Checkbox checked={sedan} label='sedan' onChange={this._onCheckboxClick}/>
                  <Checkbox checked={suv} label='suv' onChange={this._onCheckboxClick}/>
                  <Checkbox checked={coupe} label='coupe' onChange={this._onCheckboxClick}/>
                  <Checkbox checked={convertible} label='convertible' onChange={this._onCheckboxClick}/>
                  <Checkbox checked={hatchback} label='hatchback' onChange={this._onCheckboxClick}/>
                  <Checkbox checked={wagon} label='wagon' onChange={this._onCheckboxClick}/>
                  <Checkbox checked={truck} label='truck' onChange={this._onCheckboxClick}/>
                  <Checkbox checked={van} label='van' onChange={this._onCheckboxClick}/>
                  <Checkbox checked={minivan} label='minivan' onChange={this._onCheckboxClick}/>
                </Grid.Column>
              </Grid>

              <Header as='h4'  style={{ paddingTop: '2rem' }}>Country:</Header>
              <Grid>
                <Grid.Column>
                  <Checkbox label='USA' onChange={this._onCheckboxClick}/>
                  <Checkbox label='Germany' onChange={this._onCheckboxClick}/>
                  <Checkbox label='Japan' onChange={this._onCheckboxClick}/>
                  <Checkbox label='Italy' onChange={this._onCheckboxClick}/>
                </Grid.Column>
              </Grid>

              <div style={{marginTop: '3rem'}}>
                <Button secondary onClick={this._onResetClick}>Reset</Button>
              </div>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Chart />
          </Grid.Column>
        </Grid>
        <Footer />
      </Container>
    );
  }
}

const mapStateTopPrice = state => (
  {
    price: state.filters.price,
    type: state.filters.type,
    reset: state.filters.reset
  }
)

export default connect(mapStateTopPrice, {setPrice, setType, reset})(Homepage);
