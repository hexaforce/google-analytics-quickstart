/* eslint-disable */

import { GET, POST } from './HttpClient'

import Metric from './AnalyticsDataMetric'
import Dimension from './AnalyticsDataDimension'

import { Button, Stack, Dropdown, Form, ListGroup, OverlayTrigger, Tooltip, Container, Row, Col } from 'react-bootstrap';
import React, { useState, useRef } from 'react';

import './AnalyticsData.css'

const AnalyticsData = () => {

  const [property_id, setPropertyId] = useState('');
  const [dimension_name, setDimensionName] = useState('deviceModel');
  const [metric_name, setMetricName] = useState('screenPageViews');
  const [start_date, setStartDate] = useState('5daysAgo');
  const [end_date, setEndDate] = useState('today');

  const onDimension = async (e) => {
    e.preventDefault()
    const item = Dimension.find(item => item.UI名 === e.target.innerText)
    setDimensionName(item.name)
  }

  const onMetric = async (e) => {
    e.preventDefault()
    const item = Metric.find(item => item.UI名 === e.target.innerText)
    setMetricName(item.name)
  }

  const onPropertyId = async (e) => {
    setPropertyId(e.target.value)
  }

  const onStartDate = async (e) => {
    setStartDate(e.target.value)
  }

  const onEndDate = async (e) => {
    setEndDate(e.target.value)
  }

  const runReport = async (e) => {
    const response = await POST(`/api/data/run-report/${property_id}`, { dimension_name: dimension_name, metric_name: metric_name, start_date: start_date, end_date: end_date })
    if (response.ok) {
      const body = await response.json();
      console.log(body)
    }
  }

  return (
    <Form className='m-3' >
      <Form.Group className="m-3">
        <Form.Label>PropertyId</Form.Label>
        <Form.Control type="property_id" placeholder="Property ID" onChange={onPropertyId} />
      </Form.Group>
      <div className="Container">
        <div className="OverflowY">
          <Form.Label>Dimension</Form.Label>
          <ListGroup onClick={onDimension}>
            {Dimension.map((e, i) => <OverlayTrigger key={i} overlay={<Tooltip >{e.説明}</Tooltip>}>
              <ListGroup.Item active={dimension_name === e.name} action variant="light">{e.UI名}</ListGroup.Item>
            </OverlayTrigger>
            )}
          </ListGroup>
        </div>
        <div className="OverflowY">
          <Form.Label>Metric</Form.Label>
          <ListGroup onClick={onMetric}>
            {Metric.map((e, i) => <OverlayTrigger key={i} overlay={<Tooltip>{e.説明}</Tooltip>}>
              <ListGroup.Item active={metric_name === e.name} action variant="light">{e.UI名}</ListGroup.Item>
            </OverlayTrigger>
            )}
          </ListGroup>
        </div>
        <Form.Group className="m-3">
          <Form.Label>StartDate</Form.Label>
          <Form.Control defaultValue="5daysAgo" type="start_date" placeholder="`YYYY-MM-DD` or `(N)daysAgo` or `yesterday` or `today`" onChange={onStartDate} />
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>EndDate</Form.Label>
          <Form.Control defaultValue="today" type="end_date" placeholder="`YYYY-MM-DD` or `(N)daysAgo` or `yesterday` or `today`" onChange={onEndDate} />
        </Form.Group>
      </div>
      <Button variant="primary" onClick={runReport}>
        Submit
      </Button>
    </Form>
  );
}

export default AnalyticsData;