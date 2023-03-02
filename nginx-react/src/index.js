import React from 'react';
import ReactDOM from 'react-dom/client';
import AnalyticsAdmin from './AnalyticsAdmin';
import AnalyticsData from './AnalyticsData';

import reportWebVitals from './reportWebVitals';

import { Button, Stack, Dropdown, Form, ListGroup, OverlayTrigger, Tooltip, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <AnalyticsAdmin />,
  },
  {
    path: "/data",
    element: <AnalyticsData />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Google Analytics API Test</Navbar.Brand>
        <Nav.Link href="/admin">AdminAPI</Nav.Link>
        <Nav.Link href="/data">DataAPI</Nav.Link>
      </Container>
    </Navbar>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
