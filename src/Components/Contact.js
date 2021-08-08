import React, { Component } from 'react'; 
import './Contact.css';
import Face from './oren_circle_photo.JPG'
import WhatsappLogo from './WhatsappLogo.jpg'
import FacebookLogo from './FacebookLogo.jpg'
import EmailLogo from './EmailLogo.jpg' 



export default class Contact extends React.Component {
    render(){
      return (
            <div className = "ContactUs">
              <div className="ContactContainer">
                 <img id="imageCard" src={Face}></img>
                  <p id="messageToClient">אורן כהן</p>
                  <p id="contactDetails">
                  <a className="links" href="tel:0522862398" target="_blank">052-2862398</a>
                  <br/>
                  <a className="links" href="mailto: oren_cdj@yahoo.com" target="_blank">oren_cdj@yahoo.com</a><br/>
                  ירושלים, ישראל
                  </p>
                 <ul id="contactUL">
                    <li><a href="https://www.facebook.com/oren.orange.5" target="_blank"><img src={FacebookLogo} width='30px' height='30px'></img></a></li>
                    <li> <a id="WhatsappLogo" href="https://wa.me/972522862398/?text=היי אורן, מעוניינ/ת ליצור עמך קשר לאירוע שלי :)" target="_blank"><img src={WhatsappLogo} width='30px' height='30px'></img></a></li>
                 </ul>
              </div>
            </div>
        
      );
    }
}

//רו קשר עוד היום כדי שאוכל לקחת חלק בחוויה שלכם ואהפוך את האירוע שלכם לקסום