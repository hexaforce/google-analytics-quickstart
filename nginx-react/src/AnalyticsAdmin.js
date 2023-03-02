/* eslint-disable */
// import './AnalyticsAdmin.css'

import { GET, POST } from './HttpClient'
import React, { useEffect, useState, useRef } from 'react';

import Table from 'react-bootstrap/Table';

const AnalyticsAdmin = () => {

  const [accounts, setAccounts] = useState();
  const [colNames, setColNames] = useState();

  useEffect(async () => {
    const response = await GET('/api/admin/list-accounts')
    if (response.ok) {
      const body = await response.json();
      // console.log(body.accounts)
      setAccounts(body.accounts)
      if (body.accounts.length > 0)
        setColNames(Object.keys(body.accounts[0]))
    }
  }, []);

  return (
    <>
      {colNames && <Table className='m-5' striped bordered hover>
        <thead>
          <tr>
            {colNames.map(colName => <th key={colName}>{colName}</th>)}
          </tr>
        </thead>
        <tbody>
          {accounts.map((row, i) => <tr key={i}>{colNames.map((colName, i) => <td key={i}>{row[colName]}</td>)} </tr>)}
        </tbody>
      </Table>}
    </>
  );
}

export default AnalyticsAdmin;