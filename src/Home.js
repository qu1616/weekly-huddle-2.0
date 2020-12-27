import React from 'react';
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap'; 


class Home extends React.Component {
    render(){
        return (
            <div>
                <Navbar color= "dark"> 
                    <Nav className = "nav-bar">
                        <NavItem>
                            <NavLink href= "/src/Home.js">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href= "/src/Epsiodes.js">Epsiodes</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href= "/src/About.js">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href= "/src/ContactUs.js">ContactUs</NavLink>
                        </NavItem>
                    </Nav>
                        <NavItem>
                            <NavLink href= "https://twitter.com/WeeklyHuddle">Twitter</NavLink>                       
                        </NavItem>
                        <NavItem>
                            <NavLink href= "https://www.facebook.com/weeklyhuddle/">FaceBook</NavLink>                       
                        </NavItem>
                        <NavItem>
                            <NavLink href= "https://www.youtube.com/channel/UCG3-fEOhpWaXa9AZJnATcsg">YouTube</NavLink>                       
                        </NavItem>
                        <NavItem>
                            <NavLink href= "https://www.instagram.com/theweeklyhuddle/">Instagram</NavLink>                       
                        </NavItem>
                </Navbar>
            </div>
       );
    }
}


export default Home; 
