import { Details } from './components/Details'
import { Events } from './components/Events'
import { FAQ } from './components/FaqAndLogo'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { RoadMap } from './components/RoadMap'
import { TokenOmics } from './components/TokenNomics'


function App() {
  

  return (
    <>
    <div className="w-[1512px] h-auto bg-[#0a0a0a] ">
       <Header/>
        <Details/>
        <Events/>
     <TokenOmics/>
     <RoadMap/>
     <FAQ/>
     <Footer/>
    </div>
    </>
  )
}

export default App