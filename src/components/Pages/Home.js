import React from 'react'
import Footer from '../Layouts/Footer'
import BestSeller from '../UI/home/BestSeller'
import Categories from '../UI/home/Categories'
import HeaderCarousel from '../UI/home/HeaderCarousel'
import NewArivals from '../UI/home/NewArivals'

function Home() {
  return (
    <div>
      
     <HeaderCarousel />
     <Categories />
     <BestSeller />
     <NewArivals />
     <Footer />
    </div>

  )
}

export default Home