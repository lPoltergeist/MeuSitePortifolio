import React from 'react'
import {Container, TextContainer, InfosContainer, CodeItem} from './styles';


function HomeHero() {
  return (
    <Container>
        <img src='/profile.jpg' alt="Gabriel" />
    <div>
        <TextContainer>
            <h1>
                Olá
            </h1>
          <h2>Me chamo Gabriel</h2>
        </TextContainer>
        <InfosContainer>
            <CodeItem data-aos="fade-down">
                <span className="comment">//Minha Apresentação</span>
                <span className="purple">Infos</span> {'\u007B'}
                <div>
                    Nome: <span className="blue">Gabriel, </span>
                </div>
                <div>
                    Sobrenome: <span className="blue">José </span>
                </div>
                {'\u007B'}
            </CodeItem>
            <CodeItem data-aos="fade-up">
                <span className="comment">//Tecnologias que eu uso</span>
                <span className="purple">Infos</span> {'\u007B'}
                <div>
                    Função: <span className="blue">Dev Front-end </span>
                </div>
                <div>
                    Técnologias: <span className="blue">React, NextJS, CSS,<br/>  HTML, Node, JS e TS </span>
                </div>
                {'\u007B'}
            </CodeItem>
        </InfosContainer>
    </div>
    </Container>
  )
}

export default HomeHero