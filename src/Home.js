import React from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap'; 
import Website_banner from './Website_banner.jpg'; 
import BID from './BID.jpg'; 
import WHscreen from './WHscreen.jpg'; 
import './Home.css'; 

    const items = [  
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

class Home extends React.Component {
    constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}


    render() {
        const { activeIndex } = this.state;

		const slides = items.map((item) => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
				>
					<img src={item.src} alt={item.altText} />
					<CarouselCaption captionHeader={item.caption} />
				</CarouselItem>
			);
		});
        return (
            <div>
                <Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
				>
					<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
					{slides}
					<CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
					<CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
				</Carousel>
            </div>    
       );
    }
}


export default Home; 
