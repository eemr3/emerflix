import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import PacmanLoader from 'react-spinners/PacmanLoader'

import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'
import FormField from '../../../components/FormField'
function Categoria() {
  const initialValues = {
    titulo: '',
    cor: '#FF8847',
    link_extra: {
      text: '',
      url: '',
    },
  }

  const [categories, setCategories] = useState([])
  const [values, setValues] = useState(initialValues)

  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://emerflix.herokuapp.com/categorias'

  useEffect(() => {
    fetch(URL).then(async (responseServer) => {
      const response = await responseServer.json()

      setCategories([...response])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  function handleDelete() {}

  const { titulo, cor } = values

  return (
    <PageDefault>
      <form onSubmit={handleSubmit}>
        <h1>Nova categoria</h1>
        <FormField
          id="titulo"
          label="Nome da Categoria"
          name="titulo"
          type="text"
          value={titulo}
          onChange={handleChange}
        />

        <FormField
          id="descricao"
          label="Descrição da Categoria"
          name="descricao"
          type="textarea"
          value={values.descricao}
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
        <ButtonCategory>
          <Button className="btn-salvar">Salvar</Button>
          <Button className="btn-limpar" type="button">
            Limpar
          </Button>
        </ButtonCategory>
      </form>

      {categories.length === 0 && (
        <Loading>
          <PacmanLoader size={25} color={'#DC1A28'} />
        </Loading>
      )}
      <Table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descrião</th>
            <Th>Editar</Th>
            <Th>Apagar</Th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => {
            return (
              <tr key={index}>
                <td>{category.titulo}</td>
                <td>{category.descricao}</td>
                <Td>
                  <Button className="btn-edit">
                    <MdModeEdit size={25} />
                  </Button>
                </Td>
                <Td>
                  <Button className="btn-delete">
                    <MdDelete size={25} onClick={handleDelete} />
                  </Button>
                </Td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </PageDefault>
  )
}

export default Categoria

const Loading = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
`

const Th = styled.th`
  text-align: center !important;
`

const Td = styled.td`
  text-align: center !important;

  .btn-delete {
    background: var(--danger);
    width: 80px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }

  .btn-edit {
    background: var(--backEnd);
    width: 80px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
`

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
