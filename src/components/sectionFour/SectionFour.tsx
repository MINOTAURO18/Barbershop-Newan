import styles from "./sectionFour.module.css";
import shair from "../../assets/shair.svg";
import profile1 from "../../assets/profile1.webp";
import profile2 from "../../assets/profile2.webp";
import profile3 from "../../assets/profile3.webp";

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

      <article className="flex justify-center items-center gap-16 flex-wrap">
        <div className={`${styles.card} ${styles.efect}`}>
          <div className={`${styles.cardbordertop}`}></div>
          <img className={`${styles.img}`} src={profile1}/>
          <span> Person</span>
          <p className={`${styles.job}`}> Job Title</p>
          <button> Click</button>
        </div>

        <div className={`${styles.card} ${styles.efect}`}>
          <div className={`${styles.cardbordertop}`}></div>
          <img className={`${styles.img}`} src={profile2}/>
          <span> Person</span>
          <p className={`${styles.job}`}> Job Title</p>
          <button> Click</button>
        </div>

        <div className={`${styles.card} ${styles.efect}`}>
          <div className={`${styles.cardbordertop}`}></div>
          <img className={`${styles.img}`} src={profile3}/>
          <span> Person</span>
          <p className={`${styles.job}`}> Job Title</p>
          <button> Click</button>
        </div>
      </article>

      <span className={styles.item}></span>
      <span className={styles.item2}></span>
      <span className={styles.item3}></span>
      <span className={styles.item4}></span>
    </section>
  );
};

export default SectionFour;
