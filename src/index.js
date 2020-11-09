import ReactDOM from 'react-dom'
import React from 'react'

// Importação Componentes e Página
import CardList from './CardList'

const rootComponent = document.getElementById("root")
ReactDOM.render(
    <>
    <h1> Jogo de Tarot </h1>
    <CardList/>    
    </>
    , rootComponent )









/*

Criar um jogo de Tarot, permitindo o sorteio de uma carta.

E as especificações são:

Tela de apresentação exibindo todas as cartas com seu conteúdo visível, e com um botão para iniciar o jogo.
Ao clicar no botão, as cartas deverão ser viradas – escondendo o conteúdo – e embaralhadas.
Permitir que o usuário selecione apenas uma carta, clicando na mesma.
Apresentar a carta selecionada, o nome da carta e uma descrição. (a descrição pode ser um lorem ipsum)
OBS: As imagens e nomes das cartas estão listadas no arquivo tarot.json, esse arquivo deve ser consumido via http request. A propriedade image de cada carta deve ser concatenada com a propriedade imagesUrl, para obter o endereço final da imagem. Utilize o valor da propriedade imageBackCard para obter a imagem do fundo da carta.

Pré-requisitos
Aplicação feita em React
Gerar versão de produção
Criar micro commits ou commits por features
Detalhar nos comentários dos commits as decisões tomadas.

 >>>>>>>>>>> FAVICON


*/


