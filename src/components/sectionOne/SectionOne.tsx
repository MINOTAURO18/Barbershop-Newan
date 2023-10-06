import styles from './sectionOne.module.css'
import whatsapp from '../../assets/whatsapp.svg'
import bigotes from '../../assets/bigotes.svg'


const SectionOne = () => {
    return(
        <section className={`${styles.sectionOne} flex flex-col justify-center items-center gap-5 text-white`}>
            <span className='text-2xl font-semibold'>Newan</span>
            <h1 className='text-6xl font-semibold'>BARBERSHOP</h1>
            <div className='flex justify-center items-center gap-3'>
                <hr className='w-32' />
                <img className='w-8' src={bigotes} alt="" />
                <hr className='w-32' />
            </div>
            <div>
                <a href="#" className='flex items-center justify-center border-2 border-amber-400 rounded-md gap-1 w-36 h-11'>
                    <img className='w-6' src={whatsapp} alt="logo de whatsapp" />
                    <span>Contactanos</span>
                </a>
            </div>
        </section>
    )
}

export default SectionOne;