import './Nav.css';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'; 
import Home from "./Home"; 
import Episodes from "./Epsiodes"; 
import About from './About'; 
import ContactUs from './ContactUs';   
import {Navbar, Nav, NavItem}  from 'reactstrap'; 
import insta from './insta.png'; 
import facebook from './facebook.png'; 
import twitter from './twitter.png'; 
import youtube from './youtube.png';


function App() {
  return (
      <Router>
          <div>
                <Navbar className="main-nav-bar" sticky="top" > 
                    <Nav className = "nav-bar">
                        <NavItem>
                            <Link to= "/" className="inactive">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to= "/episodes" className="inactive">Epsiodes</Link>
                        </NavItem>
                        <NavItem>
                            <Link to= "/about" className="inactive">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link to= "/contactus" className="inactive">Contact Us</Link>
                        </NavItem>
                    </Nav>
                        <Nav className="social">
                        <NavItem>
                            <a href= "https://www.instagram.com/theweeklyhuddle/"><img src={insta} alt="insta" onClick="https://www.instagram.com/theweeklyhuddle/"/></a>         
                        </NavItem>
                        <NavItem>
                            <a href= "https://www.facebook.com/weeklyhuddle/"><img src={facebook} alt="facebook" onClick="https://www.facebook.com/weeklyhuddle/"/></a>                       
                        </NavItem>
                        <NavItem>
                            <a href= "https://www.youtube.com/channel/UCG3-fEOhpWaXa9AZJnATcsg"><img src={youtube} alt="youtube" onClick="https://www.youtube.com/channel/UCG3-fEOhpWaXa9AZJnATcsg"/></a>                       
                        </NavItem>
                        <NavItem>
                            <a href= "https://twitter.com/WeeklyHuddle"><img src={twitter} alt="twitter" onClick="https://twitter.com/WeeklyHuddle"/></a>                         
                        </NavItem>
                        </Nav>
                </Navbar>
                <Navbar className="footer" fixed="bottom">
                    <Nav>
                        
                    </Nav>
                </Navbar>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/episodes" component={Episodes} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
          </Switch>
      </Router>
    
  );
}

export default App;
