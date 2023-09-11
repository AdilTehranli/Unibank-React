import React from "react";
import styles from "../support/Support.module.scss";

const Support = () => {
  return (
    <div className={styles.section__support}>
      <div className="container">
        <div className={styles.section__support__sliders__df}>
          <div className={styles.section__support__sliders__left}>
            <div className={styles.section__support__sliders__left__texts}>
                <h2 className={styles.section__support__sliders__left__title} >Xidmət <br /> şəbəkəsi</h2>
                <p className={styles.section__support__sliders__left__desc}>Filial və UTM-lərin ünvanları, həmçinin - iş saatları və digər məlumatlar haqqında ətraflı.</p>
                <button className={styles.section__support__sliders__left__btn}>Daha etrafli</button>
            </div>
            <div className={styles.section__support__sliders__left__right}>
                <img className={styles.section__support__sliders__left__image} src="https://unibank.az/assets/images/Bitmap.png" alt="" />
            </div>
          </div>
          <div className={styles.section__support__sliders__right}>
            <p className={styles.section__support__sliders__right__title}>
            Sualın var? <br />
Bizimlə əlaqə saxla!
            </p>
            <p className={styles.section__support__sliders__right__desc}>Onlayn-məsləhətçi, 117 Çağrı mərkəzi və ya bank filiallarına müraciət et və suallarına cavab al. Rahat və asan!</p>
            <button className={styles.section__support__sliders__right__btn} >Daha etrafli</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
