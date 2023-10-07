import styles from "./sectionFour.module.css";
import shair from "../../assets/shair.svg";

const SectionFour = () => {
  return (
    <section
      className={`${styles.sectionFour} px-8% py-20 flex flex-col gap-5 justify-center items-center`}
    >
      <h2>Nuestros Barberos</h2>
      <div className="flex justify-center items-center gap-3 mb-5">
        <hr className="w-32" />
        <img className={` ${styles.shair} w-8`} src={shair} alt="" />
        <hr className="w-32" />
      </div>

      <article>
        <div className={`${styles.card}`}>
          <div className={`${styles.cardbordertop}`}></div>
          <div className={`${styles.img}`}></div>
          <span> Person</span>
          <p className={`${styles.job}`}> Job Title</p>
          <button> Click</button>
        </div>
      </article>
    </section>
  );
};

export default SectionFour;
