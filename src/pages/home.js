import React from 'react';
import { Container, Button } from 'reactstrap';
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
        let temp = e.target.innerText;
        let myCard = this.drawCard();
        if(temp === "start"){
            console.log("click start")
            this.makeCard();
        }
    }

    drawCard = () => {
        const {deck} = this.state;
        if(deck.length > 0){
            var card = "";
            return card;
        }else{
            this.makeDeck();
            return this.drawCard();
        }
    }

    makeDeck = () => {
        const { cardName, rank, deck} = this.state;
        for(let i=0; i < cardName.length; i++){
            for(let j=0; j< rank.length; j++){
                let card = {};
                card.cardName = cardName[i];
                card.rank = rank[j];
                card.value = (j+1);
                deck.push(card);
            }
        }
        console.log(deck);
    }

    makeCard = () => {

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
                <div className="gameplay">
                {
                    isStart ? 
                    '{mycard.rank}'
                    :
                    ''
                }
                
                </div>
                <Button type="button" className={`${isStart ? 'btn-hidden' : ''} ml-2 `} children={"start"} onClick={this.playGame} />
                {
                    isStart && (
                        <React.Fragment>
                            <Button type="button" className="ml-2"children={"Highter"}  />
                            <Button type="button" className="ml-2" children={"Lower"}  />
                        </React.Fragment>
                    )
                }
                
            </Container>
        );
    }
}
export default home;