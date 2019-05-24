import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class Navbar extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={styles.header}>
          <div className="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/explore">Explore</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/login">Log In</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/signup">Sign Up</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}

const styles = {
  header: {
    backgroundColor: 'white',
  },
};

export default Navbar;
