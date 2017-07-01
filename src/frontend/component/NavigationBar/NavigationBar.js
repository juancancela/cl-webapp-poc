import React, { PropTypes } from 'react'
import { AppBar } from 'react-toolbox/lib/app_bar'
import Logo from '../Logo/Logo.js'
import UniversityDropdown from '../UniversityDropdown/UniversityDropdown'
import NavigationBarButton from '../NavigationBarButton/NavigationBarButton'
import theme from './NavigationBar.css'
import CollegeSearchBar from '../CollegeSearchBar/CollegeSearchBar'

const NavigationBar = ({ children, ...other }) => (
  <div>
    <AppBar {...other} theme={theme}>
      <Logo />
      <CollegeSearchBar />
      <div style={{'marginLeft': 'auto'}}>
        <NavigationBarButton label='Solutions' primary raised />
        <NavigationBarButton label='How It Works' primary raised />
        <NavigationBarButton label='Explore' primary raised />
        <NavigationBarButton label='Sign Up' primary raised />
        <NavigationBarButton label='Log In' primary raised />
      </div>
    </AppBar>
  </div>
);

NavigationBar.propTypes = {
  children: PropTypes.node
};

export default NavigationBar;
