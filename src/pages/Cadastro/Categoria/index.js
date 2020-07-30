import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'
function Categoria() {
  const initialValues = {
    titulo: '',
    cor: '',
    link_extra: {
      text: '',
      url: '',
    },
    texte: '',
  }

  const [categories, setCategories] = useState([])
  const [values, setValues] = useState(initialValues)

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'https://emerflix.herokuapp.com/categorias'
      fetch(URL).then(async (response) => {
        if (response.ok) {
          const resposta = await response.json()
          setCategories(resposta)
          return
        }
        throw new Error('Não foi possível pegar os dados')
      })
    }
  }, [])

  function handleSubmit(event) {
    event.preventDefault()

    setCategories([...categories, values])
    setValues(initialValues)
  }

  function setValue(key, value) {
    setValues({ ...values, [key]: value })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setValue(name, value)
  }

  const { titulo, cor } = values

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <h1>Nova categoria: {values.url}</h1>
        <FormField
          id="titulo"
          label="Nome da Categoria"
          name="titulo"
          type="text"
          value={titulo}
          onChange={handleChange}
        />

        <FormField
          id="text"
          label="Nome da Categoria"
          name="text"
          type="textarea"
          value={values.link_extra.text}
          onChange={handleChange}
        />

        <FormField
          id="cor"
          label="Cor"
          name="cor"
          type="color"
          value={cor}
          onChange={handleChange}
        />

        <FormField
          id="url"
          label="Url"
          name="url"
          type="text"
          value={values.link_extra.url}
          onChange={handleChange}
        />
        <ButtonCategory>
          <Button className="btn-salvar">Salvar</Button>
          <Button className="btn-limpar" type="button">
            Limpar
          </Button>
        </ButtonCategory>
      </form>
      <Table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descrião</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => {
            return (
              <tr key={index}>
                <td>{category.titulo}</td>
                <td>{category.link_extra.text}</td>
                <td>{category.cor}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </PageDefault>
  )
}

export default Categoria

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
const Table = styled.table`
  border: 1px solid #2a7ae4;
  border-collapse: collapse;
  width: 100%;
  margin: 20px 0;

  thead tr th {
    padding: 15px;
    border: 1px solid #2a7ae4;
  }
  thead {
    border-bottom: 1px solid #2a7ae4;
  }
  td,
  th {
    text-align: left;
    padding: 10px;
  }
`
