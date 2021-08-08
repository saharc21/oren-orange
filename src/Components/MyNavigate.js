import React, { Component } from 'react'; 
import './MyNavigate.css';
import Logo from './oren_logo.jpg';
import Logo2 from './Orange_Scratch.jpg';

export default class MyNavbar extends React.Component {
    render(){
      return (
        <div className="toping">
          <a href="/Home"><img id="mainLogo" src={Logo2}></img></a>
          <nav>
              <ul>
                  <li><a href="/Home">בית</a></li>
                  <li><a href="/Gallery">גלריה</a></li>
                  <li><a href="/Recommendation">המלצות</a></li>
                  <li><a href="/Contact">צור קשר</a></li>
              </ul> 
          </nav>

        </div>
        
      );
    }
}



