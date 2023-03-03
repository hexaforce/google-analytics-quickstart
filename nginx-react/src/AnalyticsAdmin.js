/* eslint-disable */
// import './AnalyticsAdmin.css'

import { GET, POST } from './HttpClient'
import React, { useEffect, useState, useRef } from 'react';

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AnalyticsAdmin = () => {

  const [accounts, setAccounts] = useState();
  const [accountsColNames, setAccountsColNames] = useState();

  const [properties, setProperties] = useState();
  const [propertiesColNames, setPropertiesColNames] = useState();

  useEffect(async () => {

    const response1 = await GET('/api/admin/list-accounts')
    if (response1.ok) {
      const body1 = await response1.json();
      setAccounts(body1.accounts)
      setAccountsColNames(["name", "displayName", "regionCode", "createTime", "updateTime"])

      const properties_temp = []
      for (const account of body1.accounts) {
        const response2 = await GET('/api/admin/list-properties/' + account.name.split('s/')[1])
        if (response2.ok) {
          const body2 = await response2.json();
          if ('properties' in body2) {
            for (const property of body2.properties) {
              const response3 = await GET('/api/admin/list-data-streams/' + property.name.split('s/')[1])
              if (response3.ok) {
                const body3 = await response3.json();
                if ('dataStreams' in body3) {
                  property.dataStreams = body3.dataStreams
                }
              }
              properties_temp.push(property)
            }
          }
        }
      }
      setProperties(properties_temp)
      setPropertiesColNames(["name", "parent", "displayName", "industryCategory", "timeZone", "currencyCode", "serviceLevel", "account", "propertyType", "createTime", "updateTime", "deleteTime", "expireTime"])
    }
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Accounts</Card.Title>
              {accountsColNames && <Table className='m-5' striped bordered hover>
                <thead>
                  <tr>
                    {accountsColNames.map(colName => <th key={colName}>{colName}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((row, i) => <tr key={i}>{accountsColNames.map((colName, i) => <td key={i}>{colName in row ? row[colName] : ""}</td>)} </tr>)}
                </tbody>
              </Table>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Properties</Card.Title>
              {propertiesColNames && <Table className='m-5' striped bordered hover>
                <thead>
                  <tr>
                    {propertiesColNames.map(colName => <th key={colName}>{colName}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {properties.map((row, i) => <tr key={i}>{propertiesColNames.map((colName, i) => <td key={i}>{colName in row ? row[colName] : ""}</td>)} </tr>)}
                </tbody>
              </Table>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AnalyticsAdmin;