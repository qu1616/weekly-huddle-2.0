import React from 'react'; 
import Audio from 'react-audio-player'; 
import mp3 from './Doridori(Instrumental).mp3'; 
import hp3 from './Hunter x Hunter - Departure (Instrumental) (TV Size).mp3'; 

class Episodes extends React.Component {
   



    render() {
       
        return (
            <div>
                <h2>Episodes</h2>
                <h5>Come Hang with the Crew!</h5>
                <p>It's time to huddle up! A weekly NFL/Football podcast that is the equivalent of you and your buddies sitting down and talking 
                about the craziest things in football. So come have a seat and indulge in the some idiots 
                having fun bonding over the insanity that is the National Football League.</p>
                
                <h2>Newest Episode</h2> 
                <Audio src = {mp3} controls /> 

                <h2>Last Epsiode</h2>
                <Audio src = {hp3} controls />

                <h2>Previous Episodes</h2>


            </div>
         
            
        ); 
    }
}
export default Episodes; 