import React from 'react'
import styles from './navBar.module.css'
import logo from '../../assets/logo.svg'
import facebook from '../../assets/face.svg'
import whatsapp from '../../assets/whatsapp.svg'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'

interface NavProps {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavProps> = ({darkMode, setDarkMode}) => {

    const dark = () => {
        darkMode === false ? setDarkMode(true) : setDarkMode(false)
      }
    return(
        <header className={`${styles.header} absolute w-full flex justify-between px-8%  h-14`}>
            <img className='w-10'  src={logo} alt="logo" />
            <div className={`${styles.redes} flex gap-3 items-center` }>
                <img onClick={dark} className='w-7' src={darkMode === false ? moon : sun} alt="" />
                <a href="#"><img className='w-7' src={whatsapp} alt="" /></a>
                <a href="#"><img className='w-7' src={facebook} alt="" /></a>
            </div>
        </header>
    )
}

export default NavBar;