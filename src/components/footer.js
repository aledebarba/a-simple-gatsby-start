import React from 'react'
import styled from 'styled-components'
import Section from './section';

const Footer = (props) => {
  return (
    <Content>
      <Section>
        <div className="row pb-5">
          <div className="col">
            <p>
              This website's content is CopyRight(C) protected, in Brazil's territory by Law number 9.610 from 1998, and internationally by the articles in the Berne Conventions as agreed the signatured countries. 
              <br/>
              Before copying any of this web site's content, pleas ask permission to <a href="mailto: ale@alemacedo.com">ale@alemacedo.com</a>
            </p>
          </div>
          <div className="col">
          <p>
              O conteúdo deste website é protegido por leis de CopyRight(C) no Brasil pela Lei nº 9.610 de 1988 e internacionalmente pelos artigos da convenção de Berna, como acertado pelos países signatários.
              <br/>
              Antes de reproduzir qualquer conteúdo deste website, por favor, peça autorização para <a href="mailto: ale@alemacedo.com">ale@alemacedo.com</a>
            </p>
          </div>
        </div>    
      </Section>
    </Content>
  )
}
export default Footer

const Content = styled.div`
  background-color: var(--footer-bg);
  position: relative;
  min-height: 10vh;
  padding-top: 50px;
  & p {
    color: palevioletred;
  }

  & a { 
    color: white;
  }
`
