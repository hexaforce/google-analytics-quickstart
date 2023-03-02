import Card from 'react-bootstrap/Card';
import { GET, POST } from './HttpClient'
import React, { useEffect, useState, useRef } from 'react';

const App = () => {

  const [body, setBody] = useState();

  useEffect(async () => {
    const response = await GET('/api/info')
    if (response.ok) {
      const body = await response.json();
      // console.log(body)
      setBody(body)
    }
  }, []);

  return (
    <Card className='mx-5'>
      <Card.Body>
        <Card.Title>Server Info</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">GCP Project : {body.project_id}</Card.Subtitle>
        <Card.Text>
          {body.client_email}
        </Card.Text>
        <Card.Link href="https://developers.google.com/analytics/devguides/config/admin/v1">Admin V1 alpha version : {body.admin_v1alpha_package_version}</Card.Link>
        <Card.Link href="https://developers.google.com/analytics/devguides/reporting/data/v1/rest">Data V1 beta version : {body.data_v1beta_package_version}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default App;