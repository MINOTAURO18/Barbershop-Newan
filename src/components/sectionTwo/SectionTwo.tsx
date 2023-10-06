import styles from "./sectionTwo.module.css";
import bigotes from '../../assets/bigotes.svg'
import bg2 from '../../assets/bg2.webp'

const SectionTwo = () => {
  return (
    <section className={`${styles.sectionTwo} flex flex-col gap-3 text-black px-8% py-20`}>
      
      <h2 className="text-2xl font-semibold">Titulo</h2>
      <div className="flex justify-center items-center gap-3">
        <hr className="w-32" />
        <img className={` ${styles.bigote} w-8`} src={bigotes} alt="" />
        <hr className="w-32" />
      </div>
      <img className={`${styles.bg2}`} src={bg2} alt="" />
    </section>
  );
};

export default SectionTwo;
