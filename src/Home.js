import React from "react";

// Importação Componentes e Páginas
import Taro from "./components/taro";
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taro: { cards: [] },
    };
  }

  // Função Fetch request Json
  tarotImages() {
    fetch("/resources/cards.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ taro: data });
      });
  }
  componentDidMount() {
    this.tarotImages();
  }

  render() {
    return (
      <div className="pageLading">
        <aside className="animationRight">
          <header>
            <h1> Jogo de Tarot </h1>
            <button>Iniciar o Jogo</button>
          </header>
          <footer>
            <strong> Feche os olhos e pense em uma pergunta. </strong>
            <p>
              Pensou? Agora, escolha uma carta. Tarot é
              sobre sorte e azar, sobre partir ou ficar, sobre desistir ou
              continuar. Além disso, é sobre quem somos. Sobre quem somos de
              verdade. Quem é você?
            </p>
          </footer>
        </aside>
        <main className="taroCards">
          <Taro taro={this.state.taro} />
        </main>
      </div>
    );
  }
}

export default Home;
