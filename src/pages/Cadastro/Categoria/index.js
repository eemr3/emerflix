import React, { useState } from 'react'

import PageDefault from '../../../components/PageDefault'
import Button from '../../../components/Button'
import Form from './styles'
import FormField from '../../../components/FormField'

function Categoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
    code: '',
  }

  const [categories, setCategories] = useState([])
  const [values, setValues] = useState(initialValues)

  function handleSubmit(event) {
    event.preventDefault()

    setCategories([...categories, values])
    setValues(initialValues)
  }

  function setValue(key, value) {
    setValues({ ...values, [key]: value })
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value)
  }

  return (
    <PageDefault>
      <Form onSubmit={handleSubmit}>
        <h1>Nova categoria: {values.name}</h1>
        <FormField
          id="name"
          label="Nome da Categoria"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        <FormField
          id="description"
          label="Descrição da categoria"
          name="description"
          type="text"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor da categoria"
          name="color"
          type="color"
          value={values.color}
          onChange={handleChange}
          className="color-categ"
        />

        <FormField
          id="code"
          name="code"
          type="text"
          value={values.code}
          onChange={handleChange}
          label="Código de segurança"
        />
        <div>
          <Button className="btn-salvar">Salvar</Button>
          <Button className="btn-limpar">Limpar</Button>
        </div>
      </Form>
      <ul>
        {categories.map((category, index) => {
          return <li key={index}>{category.name}</li>
        })}
      </ul>
    </PageDefault>
  )
}

export default Categoria
