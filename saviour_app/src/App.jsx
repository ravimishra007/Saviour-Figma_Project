import { Details } from './components/Details'
import { Events } from './components/Events'
import { FaqAndLogo } from './components/FaqAndLogo'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { RoadMap } from './components/RoadMap'

import { TokenNomics } from "./components/TokenNomics"

function App() {
  

  return (
    <>
    <div className="w-[1512px] h-auto bg-[#0a0a0a] ">
       <Header/>
        <Details/>
        <Events/>
     <TokenNomics/>
     <RoadMap/>
     <FaqAndLogo/>
     <Footer/>
    </div>
    </>
  )
}

export default App