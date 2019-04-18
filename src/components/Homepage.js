import React, { Component } from 'react';
import { Button, Container, Segment, Grid, Header} from 'semantic-ui-react';
import InputRange from 'react-input-range';
import { connect} from 'react-redux';
import 'react-input-range/lib/css/index.css';

import { reset, setPrice, setType, setCountry } from '../store/actions/filters';

import Footer from '../components/Footer'
import Checkbox from './Checkbox';
import Chart from './Chart';

class Homepage extends Component {

  _onResetClick = () => {
    this.props.reset()
  }

  _onCheckboxTypeClick = (e, {label, checked}) => {
    this.props.setType({[label]: checked})
  }

  _onCheckboxCountryClick = (e, {label, checked}) => {
    label = label.toLowerCase().replace(/\s/g,'');
    this.props.setCountry({[label]: checked})
  }

  render() {
    // const { numberOfMatch, listOfLabels, numberOfCars } = this.props.filters
    const {
      sedan, suv, coupe, convertible,
      hatchback, wagon, truck, van,
      minivan
    } = this.props.type;

    const {
      usa, german, japan, italy, britannia, sweden,
      southkorea, china
    } = this.props.country

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
                  <Checkbox checked={sedan} label='sedan' onChange={this._onCheckboxTypeClick}/>
                  <Checkbox checked={suv} label='suv' onChange={this._onCheckboxTypeClick}/>
                  <Checkbox checked={coupe} label='coupe' onChange={this._onCheckboxTypeClick}/>
                  <Checkbox checked={convertible} label='convertible' onChange={this._onCheckboxTypeClick}/>
                  <Checkbox checked={hatchback} label='hatchback' onChange={this._onCheckboxTypeClick}/>
                  <Checkbox checked={wagon} label='wagon' onChange={this._onCheckboxTypeClick}/>
                  <Checkbox checked={truck} label='truck' onChange={this._onCheckboxTypeClick}/>
                  <Checkbox checked={van} label='van' onChange={this._onCheckboxTypeClick}/>
                  <Checkbox checked={minivan} label='minivan' onChange={this._onCheckboxTypeClick}/>
                </Grid.Column>
              </Grid>

              <Header as='h4'  style={{ paddingTop: '2rem' }}>Country:</Header>
              <Grid>
                <Grid.Column>
                  <Checkbox checked={usa} label='USA' onChange={this._onCheckboxCountryClick}/>
                  <Checkbox checked={german} label='German' onChange={this._onCheckboxCountryClick}/>
                  <Checkbox checked={japan} label='Japan' onChange={this._onCheckboxCountryClick}/>
                  <Checkbox checked={italy} label='Italy' onChange={this._onCheckboxCountryClick}/>
                  <Checkbox checked={britannia} label='Britannia' onChange={this._onCheckboxCountryClick}/>
                  <Checkbox checked={sweden} label='Sweden' onChange={this._onCheckboxCountryClick}/>
                  <Checkbox checked={southkorea} label='South Korea' onChange={this._onCheckboxCountryClick}/>
                  <Checkbox checked={china} label='China' onChange={this._onCheckboxCountryClick}/>
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

const mapStateTopPrice = state => {
  const {price, type, country, reset} = state.filters;
  return {
    price,
    type,
    country,
    reset
  }
}

export default connect(mapStateTopPrice, {setPrice, setType, setCountry, reset})(Homepage);
