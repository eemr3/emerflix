import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'

const Erro = styled.div`
  h1 {
    font-size: 4em;
    text-align: center;
  }

  div {
    font-size: 1.5em;
    text-align: center;
  }
`
const Erro404 = () => {
  return (
    <PageDefault>
      <Erro>
        <h1>Opss! página não encontrada.</h1>
        <div>
          <Link to="/">Voltar para a home</Link>
        </div>
      </Erro>
    </PageDefault>
  )
}

export default Erro404
