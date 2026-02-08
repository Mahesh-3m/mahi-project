import React from 'react'
//import Navbar from '.../components/navbar/navbar.'
import Mainpage from './pages/mainpage'
import StoreContextProvider from "./context/StoreContext"
const App=()=>{
  return(
    <div>
      <StoreContextProvider>
      <Mainpage/>
      </StoreContextProvider>
    </div>
  )
}
export default App