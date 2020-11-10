// Função recebe Array de Cartas
function Taro(props) {
    return <>
        {props.taro.cards.map((card) => {
        return <>
        <h4>{card.name}</h4>
        <img src={props.taro.imagesUrl+card.image} alt="Cartas de Tarot"/>
              
        </>
        })}
    </>
}

export default Taro