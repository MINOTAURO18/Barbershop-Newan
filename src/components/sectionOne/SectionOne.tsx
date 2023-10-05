import styles from './sectionOne.module.css'
import whatsapp from '../../assets/whatsapp.svg'


const SectionOne = () => {
    return(
        <section className={`${styles.sectionOne} flex flex-col justify-center items-center text-white`}>
            <span className='text-2xl font-semibold'>Newan</span>
            <h1>BARBERSHOP</h1>
            <div>
                <a href="#">
                    <img className='w-6' src={whatsapp} alt="logo de whatsapp" />
                    <span>Contactanos</span>
                </a>
            </div>
        </section>
    )
}

export default SectionOne;