import React from 'react'
import styled from 'styled-components'

import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'

import FormField from '../../../components/FormField'

function NovoVideo() {
  return (
    <PageDefault>
      <form onSubmit={() => {}}>
        <h1>Novo vídeo</h1>

        <FormField
          id="titulo"
          label="Título do vídeo"
          name="titulo"
          type="text"
          // value={titulo}
          // onChange={handleChange}
        />

        <FormField
          id="link"
          label="Link do vídeo"
          name="link"
          type="text"
          // value={values.descricao}
          // onChange={handleChange}
        />

        <FormField
          id="image"
          label="Link da imagem do vídeo"
          name="image"
          type="text"
          // value={cor}
          // onChange={handleChange}
        />
        <FormField
          id="image"
          label="Escolha um acategoria"
          name="image"
          type="text"
          // value={cor}
          // onChange={handleChange}
        />
        <FormField
          id="descrição"
          label="Descrição"
          name="descrição"
          type="textarea"
          // value={cor}
          // onChange={handleChange}
        />
        <FormField
          id="code"
          label="Código de seguranção"
          name="code"
          type="text"
          // value={cor}
          // onChange={handleChange}
        />

        <ButtonCategory>
          <Button className="btn-salvar">Salvar</Button>
          <Button className="btn-limpar" type="button">
            Limpar
          </Button>
        </ButtonCategory>
      </form>
    </PageDefault>
  )
}

export default NovoVideo

const ButtonCategory = styled.div`
  .btn-salvar {
    background: var(--primary);
    width: 180px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
  .btn-limpar {
    background: var(--blackLighter);
    width: 180px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
`
