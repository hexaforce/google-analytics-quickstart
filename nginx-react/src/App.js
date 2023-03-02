import { GET, POST } from './client'

import Metric from './Metric'
import Dimension from './Dimension'

import { Button, Stack, Dropdown, ListGroup, OverlayTrigger, Tooltip, Container, Row, Col } from 'react-bootstrap';

const App = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await GET('/api/analytics-data/flask-health-check')
    if (response.ok) {
      const body = await response.json();
      console.log(body)
    }
    console.log('You clicked submit.');
  }

  const apiUser = async (e) => {
    const response = await GET('/api/actor')
    if (response.ok) {
      const body = await response.json();
      console.log(body)
    }
  }

  const apiGet = async (e) => {
    const response = await GET('/api/get')
    if (response.ok) {
      const body = await response.json();
      console.log(body)
    }
  }

  const apiPost = async (e) => {
    const response = await POST('/api/post', { aaa: 'aaa', bbb: 100, ccc: true })
    if (response.ok) {
      const body = await response.json();
      console.log(body)
    }
  }

  const runReport = async (e) => {
    const response = await POST('/api/data/run-report/354244385', { dimension_name: 'browser', metric_name: 'screenPageViews', start_date: '14daysAgo', end_date: 'today' })
    if (response.ok) {
      const body = await response.json();
      console.log(body)
    }
  }

  const runReporta = async (e) => {

  }

  return (

    <Container>
      <Row variant="success">
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row>
      <Row>
        <Col sm>
          <ListGroup>
            {Metric.map((e, i) => <OverlayTrigger overlay={<Tooltip>{e.説明}</Tooltip>}>
              <ListGroup.Item key={i} action variant="light">{`${e.ui_name} (${e.UI名})`}</ListGroup.Item>
            </OverlayTrigger>
            )}
          </ListGroup>
        </Col>
        <Col sm>
          <ListGroup>
            {Dimension.map((e, i) => <OverlayTrigger overlay={<Tooltip>{e.説明}</Tooltip>}>
              <ListGroup.Item key={i} action variant="light">{`${e.ui_name} (${e.UI名})`}</ListGroup.Item>
            </OverlayTrigger>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>

  );
}




export default App;