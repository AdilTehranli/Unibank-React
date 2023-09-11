import React from "react";
import styles from "../ubank/Ubank.module.scss";
const Ubank = () => {
  return (
    <div className={styles.section__ubank}>
      <div className="container">
        <div className={styles.section__ubank__slider}>
          <div className={styles.section__ubank__slider__df}>
            <div className={styles.section__ubank__slider__left}>
              <h3 className={styles.section__ubank__slider__left__h3}>UBank</h3>
              <p className={styles.section__ubank__slider__left__desc}>
                UBank 24/7 bank xidmətlərinə çıxışı smartfonunda təmin edən
                mobil tətbiqdir. Ödənişlərini banka gəlmədən, telefonunda bir
                toxunuşla həyata keçir!
              </p>
              <div className={styles.section__ubank__app__images}>

              <img src="https://unibank.az/assets/images/playstore.svg" className={styles.section__ubank__slider__left__google}></img>
              <img src="	https://unibank.az/assets/images/appstore.svg" className={styles.section__ubank__slider__left__ios}></img>
              <img src="https://unibank.az/assets/images/app-gallery.svg" className={styles.section__ubank__slider__left__ios}></img>
              </div>
              <button className={styles.section__ubank__btn}>Haqqinda</button>
            </div>
            <div className={styles.section__ubank__slider__phone__image}>
                <img className={styles.section__ubank__slider__phone__image__iphone} src="	https://unibank.az/assets/images/appbar2.png" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubank;
