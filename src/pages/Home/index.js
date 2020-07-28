import React from 'react'
import data from '../../data/dados_iniciais.json'

import Header from '../../components/header'
import BannerMain from '../../components/BannerMain'
import Carrousel from '../../components/Carousel'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div style={{ backgrounColor: '#141414' }}>
      <Header />
      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription={''}
      />
      {data.categorias.map((categoria) => (
        <Carrousel key={categoria.cor} category={categoria} />
      ))}
      <Footer />
    </div>
  )
}

export default Home
