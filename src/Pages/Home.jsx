import React from 'react'
import Header from '../Components/Home/Header'
import NAVBAR from '../Components/Home/Navbar'
import GridTemp from '../Components/Home/GridTemp'
import Cards from '../Components/Home/Card'
import Banner from '../Components/Home/Banner'
import Footor from '../Components/Home/Footor'
import Content from '../Components/Home/Content'
import MapComp from '../Components/Home/MapComp'
import ProductComp from '../Components/Home/ProductComp'

const Home = () => {
  return (
    <div>
        <Header/>
        <NAVBAR/>
        <GridTemp/>
        <Cards/>     
        <Banner/>
        <ProductComp/>
        <MapComp/>
        <Content/>


        <Footor/>
    </div>
  )
}

export default Home