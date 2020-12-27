import React, { useState } from 'react';
import {Navbar, Nav, NavItem, NavLink, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap'; 
import Website_banner from './Website_banner.jpg'; 
import BID from './BID.jpg'; 
import WHscreen from './WHscreen.jpg'; 


class Home extends React.Component {
    



    
    items = [  
        { 
            src: Website_banner,
            altText: 'slide1',
            caption: 'The Weekly Huddle: Steaming on all major platforms!' 
        },
        {
            src: BID,  
            altText: 'slide2',   
            caption: 'Check our Break It Down series on youtube!'
        },  
        {
            src: WHscreen,   
            altText: 'slide3',   
            caption: 'We are the Weekly Huddle Podcast. Huddle up!'
        }
    ]; 

    Activity = (props) =>  {
        const [activeIndex, setActiveIndex] = useState(0); 
        const [animating, setAnimating] = useState(false); 
    

        const next = () => {
            if (animating) return; 
            const nextIndex = activeIndex === items.length -1 ? 0 : activeIndex + 1; 
            setActiveIndex(nextIndex); 
        }
    }

    previous = () => { 
        if (animating) return; 
        setActiveIndex(newIndex); 
    }

    goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={items.src} alt={items.altText} />
                <CarouselCaption captionText={items.captionText} captionHeader={items.caption} />
            </CarouselItem>
        );
    }); 
     



    render() {
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
             
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHnadler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev"  directionText="Previous" onClickHnadler={previous} />
                    <CarouselControl direction="next"  directionText="Next" onClickHnadler={next} />
                </Carousel>
            </div>
                    
       );
    }
}


export default Home; 
