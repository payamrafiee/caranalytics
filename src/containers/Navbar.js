import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Segment, Container } from 'semantic-ui-react'

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Segment inverted style={{borderRadius: 0}}>
        <Container>
          <Menu inverted pointing secondary >
            <Link to='/' >
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            </Link>

            <Link to='/signup'>
              <Menu.Item
                name='Sign Up'
                active={activeItem === 'Sign Up'}
                onClick={this.handleItemClick}
              />
            </Link>

            <Link to='/signin'>
              <Menu.Item
                name='Sign In'
                active={activeItem === 'Sign In'}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu>
        </Container>
      </Segment>
    );
  }
}

export default Navbar;
