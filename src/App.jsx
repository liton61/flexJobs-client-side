// import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactTab from './ReactTab';
import './App.css';

function App() {
  const location = useLocation();

  // Update the website title based on the current route
  document.title = `Flex Jobs | ${location.pathname}`;

  return (
    <>
      <h1>Flex Jobs</h1>
      <ReactTab />
    </>
  );
}

export default App;
