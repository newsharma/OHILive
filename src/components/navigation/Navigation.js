import React, {Component} from 'react';
import {Nav, NavItem, Row} from 'react-bootstrap';
import './navigation.css';
import {LinkContainer} from 'react-router-bootstrap';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {activeKey: 1};
    this.handleNavItemSelect = this.handleNavItemSelect.bind(this);
  }

  handleNavItemSelect(selectedKey) {
    this.setState({activeKey: selectedKey});
  }

  render() {
    return (
      <div className='container-fluid'>
        <Row>
          <div className='app-title'>OHI LIVE</div>
          <Nav className='app-nav' activeKey={this.state.activeKey} onSelect={this.handleNavItemSelect}>
            <LinkContainer to='/overview'>
              <NavItem eventKey={1}>
                OVERVIEW
              </NavItem>
            </LinkContainer>
            <LinkContainer to='/top-practices'>
              <NavItem eventKey={2}>
                TOP PRACTICES
              </NavItem>
            </LinkContainer>
            <LinkContainer to='/outcomes'>
              <NavItem eventKey={3}>
                OUTCOMES
              </NavItem>
            </LinkContainer>
          </Nav>
        </Row>
      </div>

    );
  }
}

export default NavigationBar;
