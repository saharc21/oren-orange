import './App.css';
import Home from './Components/Home';
import MyFooter from './Components/MyFooter';
import MyNavbar from './Components/MyNavigate';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        <div className="header">
          <MyNavbar/>
        </div>
        <div className="body">
          <Switch>
            <Route path="/Home">
              <Home/>
            </Route>
            <Route path="/Gallery">
            </Route>
            <Route path="/Recommendations">
            </Route>
            <Route path="/Contact">
              <Contact/>      
            </Route>
          </Switch>
        </div>
        <div className="footer">
          <MyFooter/>
        </div>

      </div>
    </Router>
    
  );
}

export default App;



// return (
//   <Router>
//     <div className="App">
//       <div className="header">
//         <MyNavbar/>
//       </div>
//       <div className="body">
//         <MyBody/>
//       </div>
//       <div className="footer">
//         <MyFooter/>
//       </div>
//     </div>
//   </Router>
  
// );
// }