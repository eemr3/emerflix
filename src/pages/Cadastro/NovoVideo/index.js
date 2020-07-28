import React from 'react'

import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'
import Form from './styles'

function NovoVideo() {
  return (
    <PageDefault>
      <Form>
        <h1>Novo vídeo</h1>
        <input type="text" placeholder="Título" />
        <input type="text" placeholder="Link do vídeo" />
        <input type="text" placeholder="Link da imagem do vídeo" />
        <input type="text" placeholder="Escolha um acategoria" />
        <textarea name="" id="" cols="30" rows="8" placeholder="Descrição" />
        <input type="text" placeholder="Código de seguranção" />
        <div>
          <Button className="btn-salvar">Salvar</Button>
          <Button className="btn-limpar">Limpar</Button>
        </div>
      </Form>
    </PageDefault>
  )
}

export default NovoVideo
