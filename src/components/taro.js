import React from 'react'

// Importação Componentes e Páginas
import '../components/taro.css';

// Classe recebe Array de Cartas
class Taro extends React.Component() {
    constructor(props) {
        super(props)
        this.state = {
            deck: []
        }

        this.shuffleAll = this.shuffleAll.bind(this)
    }

    // Function shuffle Cards
    shuffleAll(e) {
        console.log(this.state.deck)
        let deck = this.state.deck

        var currentIndex = deck.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = deck[currentIndex];
            deck[currentIndex] = deck[randomIndex];
            deck[randomIndex] = temporaryValue;
        }

        this.setState({deck})

    }

    componentDidMount() {
        this.setState((state, props) => {
            return {deck: props.taro.cards}
        })
        console.log(this.state)
    }

    
    render() {
        return <>
            <button onClick={this.shuffleAll}> Iniciar o Jogo </button>
            {this.state.deck && this.state.deck.map((card, i) => {
                return <div key={'card_' + i} className="containerCards" >
                    <h6>{card.name}</h6>
                    <img src={this.props.taro.imagesUrl + card.image} alt="Cartas de Tarot" />
                </div> 
             })}
        </>

    }   
}

export default Taro