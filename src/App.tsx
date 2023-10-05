import NavBar from './components/navbar/Navbar'
import { useState } from 'react'
import './index.css'

function App() {

  const [darkMode, setDarkMode] = useState(false)

 

  return (
    <main className={darkMode === false ? 'default' : 'dark'}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
    </main>
  )
}

export default App
