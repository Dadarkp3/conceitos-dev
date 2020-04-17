import React from 'react';
import Header from './components/Header';

export default function App(){
  return (
    <>
      <Header title="React">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header  title="JamStack">  
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}