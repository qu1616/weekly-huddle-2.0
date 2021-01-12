import React from 'react'; 
import Audio from 'react-h5-audio-player';
import DoriDori from './Doridori (Instrumental).mp3'; 
import 'react-h5-audio-player/lib/styles.css'; 
import {Container, Row, Col, Table} from 'reactstrap'; 






class Episodes extends React.Component <null,PlayListState>{


    render() {
       
        return (
            <div>

                <h2>Episodes</h2>
                <h5>Come Hang with the Crew!</h5>
                <p>It's time to huddle up! A weekly NFL/Football podcast that is the equivalent of you and your buddies sitting down and talking 
                about the craziest things in football. So come have a seat and indulge in the some idiots 
                having fun bonding over the insanity that is the National Football League.</p>
          
            <Container>
                <Row> 
                    <Col lg={4}>
                         <Audio
                            src={DoriDori}
                            showJumpControls={false}
                            customAdditionalControls ={[]} 
                            layout="horizontal-reverse"
                            customVolumeControls={[]}
                        />
                    </Col>
                </Row>
            </Container>                   
            <Table responsive size="sm">
                <tbody>
                    <tr>
                        <tr>
                        <td>Episode 1: </td>
                        </tr>

                        <tr>
                        <td>Episode 2: </td>
                        </tr>

                        <tr>
                        <td>Episode 3: </td>
                        </tr>

                        <tr>
                        <td>Episode 4: </td>
                        </tr>

                        <tr>
                        <td>Episode 5: </td>
                        </tr>

                        <tr>
                        <td>Episode 6: </td>
                        </tr>

                        <tr>
                        <td>Episode 7: </td>
                        </tr>

                        <tr>
                        <td>Episode 8: </td>
                        </tr>

                        <tr>
                        <td>Episode 9: </td>
                        </tr>

                        <tr>
                        <td>Episode 10: </td>
                        </tr>

                        <tr>
                        <td>Episode 11: </td>
                        </tr>

                        <tr>
                        <td>Episode 12: </td>
                        </tr>

                        <tr>
                        <td>Episode 13: </td>
                        </tr>

                        <tr>
                        <td>Episode 14: </td>
                        </tr>

                        <tr>
                        <td>Episode 15: </td>
                        </tr>

                        <tr>
                        <td>Episode 16: </td>
                        </tr>

                        <tr>
                        <td>Episode 17: </td>
                        </tr>

                        <tr>
                        <td>Episode 18: </td>
                        </tr>

                        <tr>
                        <td>Episode 19: </td>
                        </tr>

                        <tr>
                        <td>Episode 20: </td>
                        </tr>

                        <tr>
                        <td>Episode 21: </td>
                        </tr>

                        <tr>
                        <td>Episode 22: </td>
                        </tr>

                        <tr>
                        <td>Episode 23: </td>
                        </tr>

                        <tr>
                        <td>Episode 24: </td>
                        </tr>

                        <tr>
                        <td>Episode 25: </td>
                        </tr>
                    </tr>
                </tbody>
            </Table>
            </div>
         
            
        ); 
    }
}
export default Episodes; 