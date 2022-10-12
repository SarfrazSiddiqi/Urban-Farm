import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layouts/Header';
import Home from './components/Pages/Home';
import Plants from './components/Plants';
import Seeds from './components/Seeds';
import PlantCare from './components/PlantCare'
import Gifting from './components/Gifting'
import Offer from './components/Offer';

import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";


function App() {
  return (
    <Router>
    <>
      <Header />
      {/* <Home /> */}
      <Routes>
            <Route path ='/' element ={<Home />} />
            <Route path ='/plants' element ={<Plants />}/>
            <Route path ='/seeds' element = {<Seeds />} />
            <Route path ='/plantcare' element = {<PlantCare />} />
            <Route path ='/gifting' element = {<Gifting />} />
            <Route path ='/offer' element = {<Offer />} />
            </Routes>
      
    </>
    </Router>
  )
}

export default App