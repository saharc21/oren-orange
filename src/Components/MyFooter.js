import React, { Component } from 'react'; 
import './MyFooter.css';
import EmailLogo from './EmailLogo.jpg';
import WhatsappLogo from './WhatsappLogo.jpg'
import FacebookLogo from './FacebookLogo.jpg'
 
export default class MyFooter extends React.Component {
    render(){
      return (
            <div className = "credit">
                <div id ="CreditText">Website by Sahar Cohen ©</div>
            </div>
        
      );
    }
}