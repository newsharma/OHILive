import React, {Component} from 'react';
import {Col, ProgressBar, Row, Table} from 'react-bootstrap';
import './Outcomes.css';

class Outcomes extends Component {
  render() {
    return (
      <div className='app-outcomes container'>
        <h3>Overall Outcomes</h3>
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>Outcomes</th>
            <th>Difference</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <Row>
                <Col xs={11}>
                  <div>Direction</div>
                  <ProgressBar now={98}/>
                </Col>
                <Col xs={1}>98</Col>
              </Row>
            </td>
            <td>-5</td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col xs={11}>
                  <div>Leadership</div>
                  <ProgressBar now={65}/>
                </Col>
                <Col xs={1}>65</Col>
              </Row>
            </td>
            <td>+5</td>
          </tr>
          <tr>
            <td>
              <Row>
                <Col xs={11}>
                  <div>Work Environment</div>
                  <ProgressBar now={68}/>
                </Col>
                <Col xs={1}>68</Col>
              </Row>
            </td>
            <td>+6</td>
          </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Outcomes;
