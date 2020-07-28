import React from 'react'

import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'
import Form from './styles'

function Categoria() {
  return (
    <PageDefault>
      <Form>
        <h1>Nova categoria</h1>
        <input type="text" placeholder="Nome" />
        <textarea cols="30" rows="10" placeholder="Descrição" />
        <input type="text" placeholder="Cor" />
        <input type="text" placeholder="Código de segurança" />
        <div>
          <Button className="btn-salvar">Salvar</Button>
          <Button className="btn-limpar">Limpar</Button>
        </div>
      </Form>
    </PageDefault>
  )
}

export default Categoria
