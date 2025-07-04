import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./pages/Header"
import PriceContent from "./pages/PriceContent"
import PriceCards from './pages/PriceCards'
import Carosuel from './pages/Carosuel'
import Footer from './pages/Footer';
import Content from "./pages/Content"
import Benefits from './pages/Benefits';
import BenefitCard from "./pages/BenefitCard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black'>
      <Header></Header>
      <PriceContent></PriceContent>
      <PriceCards></PriceCards>
      <Carosuel></Carosuel>
      <BenefitCard></BenefitCard>
      <Benefits></Benefits>
      <Content></Content>
      <Footer></Footer>
      
    </div>
     
    </>
  )
}

export default App
