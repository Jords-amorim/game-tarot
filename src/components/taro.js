// Importação Componentes e Páginas
import '../components/taro.css';

// Função recebe Array de Cartas
function Taro(props) {
    return <>
        {props.taro.cards.map((card) => {
        return <>
        <div className="containerCards" >
        <h6>{card.name}</h6>
        <img src={props.taro.imagesUrl+card.image} alt="Cartas de Tarot"/>

        </div>
        
              
        </>
        })}
    </>
}

export default Taro