import styles from "./sectionFive.module.css";
import shair from '../../assets/shair.svg'
import bg3 from '../../assets/bg3.webp'

const SectionFive = () => {
  return (
    <section className={`${styles.sectionTwo} flex flex-col gap-3 text-black px-8% py-20`}>
      
      <h2 className={`${styles.efect} text-2xl font-semibold`}>Titulo</h2>
      <div className={`${styles.efect} flex justify-center items-center gap-3 mb-5`}>
        <hr className="w-32" />
        <img className={` ${styles.bigote} w-8`} src={shair} alt="" />
        <hr className="w-32" />
      </div>
      <article className={`${styles.container} flex justify-center flex-wrap items-center gap-20`}>
      <img className={`${styles.bg2} ${styles.efect} hover:animate-jump animate-once animate-ease-linear`} src={bg3} alt="" />
       <div className={`${styles.efect} ${styles.prices} flex flex-col gap-4 w-96`}>
          <h3 className="font-semibold text-2xl">Sobre nosotros</h3>
          <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, debitis nemo, molestias beatae, harum sequi eius quisquam assumenda iste ratione odio. Ea, earum autem laboriosam repudiandae rem accusantium quidem eaque!, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, et similique qui at maxime repellendus commodi facilis. Est illo ex dolore, fugiat vero quaerat qui debitis? Doloribus hic autem eius.</p>
          <div className="flex flex-col gap-3 ">
            
          </div>
       </div>
      </article>
    </section>
  );
};

export default SectionFive;
