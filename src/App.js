import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Menu extends React.Component {
render() {
let myMenu = ['Home',
'About',
'Services',
'Portfolio',
'Contact us']
return (
  <div>
 <div className='header'>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
  </div>
{myMenu.map((val, idx) => {
return <div className='menu-item' key={idx}><Link label={val}/></div>
})}
</div>)
}}



class Link extends React.Component {
render() {
const url='/'+ this.props.label.toLowerCase().trim().replace(' ', '-')
return <div className='menu-bar'>
<a href={url}>
{this.props.label}
</a>
<br/>
</div>
}
}

export default Menu;
