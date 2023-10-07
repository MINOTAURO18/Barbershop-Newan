import styles from './navBar.module.css'
import logo from '../../assets/logo.svg'
import facebook from '../../assets/face.svg'
import whatsapp from '../../assets/whatsapp.svg'


const NavBar = () => {

    
    return(
        <header className={`${styles.header} absolute w-full flex justify-between px-8%  h-14`}>
            <img className='w-10'  src={logo} alt="logo" />
            <div className={`${styles.redes} flex gap-3 items-center` }>
                <a href="#"><img className='w-7' src={whatsapp} alt="" /></a>
                <a href="#"><img className='w-7' src={facebook} alt="" /></a>
            </div>
        </header>
    )
}

export default NavBar;