import React from 'react'; 
import Audio from 'react-h5-audio-player';
import DoriDori from './Doridori (Instrumental).mp3'; 
import 'react-h5-audio-player/lib/styles.css'; 
import Departure  from './Hunter x Hunter - Departure (Instrumental) (TV Size).mp3'; 

const playlist = [ 
    { name: 'DoriDori (Pokemon X & Y Ending)' , src: DoriDori}, 
    { name: 'Departure (Hunter X Hunter Opening)',  src: Departure}, 
]

interface PlayListState { 
    currentMusicIndex: number
}

class Episodes extends React.Component <null,PlayListState>{
    constructor(props){
        super(props); 
        this.state = { 
            currentMusicIndex: 0
        }
    }

    handleClickPrevious = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
    }))
  }

  handleClickNext = (): void => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
    }))
  }
   



    render() {
       
        return (
            <div>
                <h2>Episodes</h2>
                <h5>Come Hang with the Crew!</h5>
                <p>It's time to huddle up! A weekly NFL/Football podcast that is the equivalent of you and your buddies sitting down and talking 
                about the craziest things in football. So come have a seat and indulge in the some idiots 
                having fun bonding over the insanity that is the National Football League.</p>
                
                <Audio
                    header = {"Now playing " + [this.state.currentMusicIndex].src}
                    autoPlayAfterSrcChange={true}
                    showSkipControls={true}
                    showJumpControls={false}
                    src={playlist[this.state.currentMusicIndex].src}
                    onClickPrevious={this.handleClickPrevious}
                    onClickNext={this.handleClickNext}
                    
                />

            </div>
         
            
        ); 
    }
}
export default Episodes; 