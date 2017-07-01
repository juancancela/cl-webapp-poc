import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import FindYourPath from '../FindYourPath/FindYourPath'

const App = () => (
  <div>
    <NavigationBar />
    <br />
    {/*<UniversityDropdown />*/}
    <FindYourPath />
  </div>
);

export default App;
