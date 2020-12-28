import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'; 
import Home from "./Home"; 
import Episodes from "./Epsiodes";   
import {Navbar, Nav, NavItem, NavLink}  from 'reactstrap'; 
import insta from './insta.png'; 
import facebook from './facebook.png'; 
import twitter from './twitter.png'; 
import youtube from './youtube.png';


function App() {
  return (
      <Router>
          <div>
                <Navbar color= "dark" fixed="top"> 
                    <Nav className = "nav-bar">
                        <NavItem>
                            <Link to= "/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to= "/episodes">Epsiodes</Link>
                        </NavItem>
                        <NavItem>
                            <NavLink href= "/src/About.js">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href= "/src/ContactUs.js">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
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
                </Navbar>
                <Navbar color="dark" fixed="bottom">
                    <Nav className="footer">
                        <h6>The Weekly Huddle Podcast</h6>
                        <h6>Quincy Myles Jr.</h6>
                    </Nav>
                </Navbar>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/episodes" component={Episodes} />
          </Switch>
      </Router>
    
  );
}

export default App;
