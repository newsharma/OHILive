import React, { Component } from 'react';
import './TopPractices.css';
import {Col, ListGroup, ListGroupItem, ProgressBar, Row} from 'react-bootstrap';

class TopPractices extends Component {
  render() {
    const Data = [
      {
        title: 'Personal ownership',
        range: 65
      },
      {
        title: 'People perf. review.',
        range: 93
      },
      {
        title: 'Talent Acquisition.',
        range: 89
      },
      {
        title: 'Supportive Leadership',
        range: 87
      }
    ];

    return (
      <div className='app-top-practices container'>
        <h3>TopPractices</h3>
        <ListGroup>
          {
            Data.map((item, index) => {
              return (
                <ListGroupItem key={index}>
                  <Row>
                    <Col xs={11}>{item.title}</Col>
                    <Col xs={1}>{item.range}</Col>
                  </Row>
                  <ProgressBar now={item.range}/>
                </ListGroupItem>
              )
            })
          }
        </ListGroup>
      </div>

    );
  }
}

export default TopPractices;
