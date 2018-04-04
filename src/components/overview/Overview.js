import React, { Component } from 'react';
import './Overview.css';
import OverviewImage from '../../assets/images/overview.png';
import {Image} from 'react-bootstrap';

class Overview extends Component {
  render() {
    return (
      <div className='app-overview'>
        <h3>Your organization health looks good this month!</h3>
        <Image src={OverviewImage}/>
      </div>

    );
  }
}

export default Overview;
