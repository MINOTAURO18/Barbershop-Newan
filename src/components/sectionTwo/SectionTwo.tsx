import styles from "./sectionTwo.module.css";
import shair from '../../assets/shair.svg'
import bg2 from '../../assets/bg2.webp'

const SectionTwo = () => {
  return (
    <section className={`${styles.sectionTwo} flex flex-col gap-3 text-black px-8% py-20`}>
      
      <h2 className={`${styles.efect} text-2xl font-semibold`}>Titulo</h2>
      <div className={`${styles.efect} flex justify-center items-center gap-3 mb-5`}>
        <hr className="w-32" />
        <img className={` ${styles.bigote} w-8`} src={shair} alt="" />
        <hr className="w-32" />
      </div>
      <article className={`${styles.container} flex justify-center flex-wrap items-center gap-20`}>
      <img className={`${styles.bg2} ${styles.efect}`} src={bg2} alt="" />
       <div className={`${styles.efect} ${styles.prices} flex flex-col gap-4 w-96`}>
          <h3 className="font-semibold text-2xl">Servicios</h3>
          <div className="flex flex-col gap-3 ">
            <span className="flex justify-between">
              <h4>corte de cabello</h4>
              <h5>10.000</h5>
            </span>
            <span className="flex justify-between items-center">
              <h4>corte de cabello</h4>
              <h5>10.000</h5>
            </span>
            <span className="flex justify-between items-center">
              <h4>corte de cabello</h4>
              <h5>10.000</h5>
            </span>
            <span className="flex justify-between items-center">
              <h4>corte de cabello</h4>
              <h5>10.000</h5>
            </span>
            <span className="flex justify-between items-center">
              <h4>corte de cabello</h4>
              <h5>10.000</h5>
            </span>
          </div>
          <a className={`${styles.btn}`} href="#">Citas</a>
       </div>
      </article>
    </section>
  );
};

export default SectionTwo;
