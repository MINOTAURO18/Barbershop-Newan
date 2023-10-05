import NavBar from './components/navbar/Navbar'
import SectionOne from './components/sectionOne/SectionOne'
import { useState } from 'react'
import './index.css'

function App() {

  const [darkMode, setDarkMode] = useState(false)

 

  return (
    <main className={darkMode === false ? 'default' : 'dark'}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <SectionOne/>
    </main>
  )
}

export default App
