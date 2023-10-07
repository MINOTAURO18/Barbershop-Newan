import NavBar from './components/navbar/Navbar'
import SectionOne from './components/sectionOne/SectionOne'
import SectionTwo from './components/sectionTwo/SectionTwo'
import SectionThree from './components/sectionThree/SectionThree'
import SectionFour from './components/sectionFour/SectionFour'
import { useState } from 'react'
import './index.css'

function App() {

  const [darkMode, setDarkMode] = useState(false)

 

  return (
    <main className={darkMode === false ? 'default' : 'dark'}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
    </main>
  )
}

export default App
