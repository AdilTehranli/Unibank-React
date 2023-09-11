import React from "react";
import styles from "../ucard/Ucard.module.scss";
const Ucard = () => {
  return (
    <div className={styles.section__ucard}>
      <div className="container">
        <div className={styles.section__ucard__slider}>
          <div className={styles.section__ucard__df}>
            <div className={styles.section__ucard__slider_image}>
              <img
                className={styles.section__ucard__image}
                src="https://unibank.az/assets/static/Ucard/ucard.webp"
                alt=""
              />
            </div>
            <div className={styles.section__ucard__right}>
              <h3 className={styles.section__ucard__title}>
                Sənin kartın - UCarddır!
              </h3>
              <p className={styles.section__ucard__desc}>
                Bu kart sənə dünyanın istənilən yerində multivalyutalı
                hesablarla alış-veriş imkanı, 10 000 ₼-dək və 40 günədək faizsiz
                kredit xətti, 30%-dək keşbek və illik 6%-dək gəlir əldə etmək
                imkanı verir. Bir sözlə, bütün ehtiyaclar tək kartda!
              </p>
              <div className={styles.section__ucard__buttons}>
                <button className={styles.section__ucard__about}>Etrafli</button>
                <button className={styles.section__ucard__partny}>Partnyorlar</button>
                <button className={styles.section__ucard__partny}>Sexsi kabinet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ucard;
