import React from 'react';
import { Container, Button } from 'reactstrap';
import { is } from '@babel/types';
class home extends React.Component {
    state = {  
        scoreValue: 0,
        deck :[],
        rank: [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"],
        cardName: ["pick", "khesht", "del", "khaj" ],
        isStart: false,
    }

    playGame = (e) => {
        this.setState(prevState => ({isStart: !prevState.isStart}));
        this.makeCard();
    }

    makeCard = () => {

    }

    highterGame = (e) => {
        console.log("highter");
    }

    lowerGame = () => {
        console.log("lower");
    }

    render() {
        const { isStart } = this.state;
        return ( 
            <Container className="text-center">
                <h2>Score: <div className="score">0</div></h2>
                <div className="message">
                    {
                        isStart ?
                        'click in hight or lower'
                        : 
                        ' click start'
                    }
                </div>
                <div className="gameplay"></div>
                <Button type="button" className={`${isStart ? 'btn-hidden' : ''} ml-2 `} children={"Start"} onClick={this.playGame} />
                {
                    isStart && (
                        <React.Fragment>
                            <Button type="button" className="ml-2"children={"Highter"} onClick={this.highterGame} />
                            <Button type="button" className="ml-2" children={"Lower"} onClick={this.lowerGame} />
                        </React.Fragment>
                    )
                }
                
            </Container>
        );
    }
}
export default home;