import styles from './sectionThree.module.css'
import haircut from '../../assets/haircut.svg'
import img1 from '../../assets/img1.webp'
import img2 from '../../assets/img2.webp'
import img3 from '../../assets/img3.webp'



const SectionThree = () => {
    return (
        <section className={`${styles.sectionThree} px-8% py-20 justify-center items-center flex flex-col gap-5 text-white`}>
            <h2 className='font-semibold '>Tipos de cortes</h2>
            <div className='flex justify-center items-center gap-3'>
                <hr className='w-32' />
                <img className={`${styles.haircut} w-8`} src={haircut} alt="" />
                <hr className='w-32' />
            </div>

            <article className={`${styles.cards} flex gap-8 flex-wrap justify-center`}>
                <div className={`${styles.efect} relative`}>
                    <img className='w-80 rounded-xl' src={img1} alt="" />
                    <span>tipo 1</span>
                </div>
                <div className={`${styles.efect} relative`}>
                    <img className='w-80 rounded-xl' src={img2} alt="" />
                    <span>tipo 1</span>
                </div>

                <div className={`${styles.efect} relative`}>
                    <img className='w-80 rounded-xl' src={img3} alt="" />
                    <span>tipo 1</span>
                </div>
            </article>
        </section>
    )
}

export default SectionThree;