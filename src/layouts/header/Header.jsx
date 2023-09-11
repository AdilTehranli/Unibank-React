import React from "react";
import styles from "../header/Header.module.scss";
import "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__offer}>
          <ul className={styles.header__offer__items}>
            <li>Kartlar</li>
            <li>Kreditlər</li>
            <li>Əmanətlər</li>
            <li>Köçürmələr</li>
            <li>Rəqəmsal bankçılıq</li>
            <li>Əlavə xidmətlər</li>
          </ul>
          <div className={styles.header__call}>
            <button className={styles.header__call_btn}>117</button>
          </div>
        </div>
        <div className={styles.header_slider}>
          <div className={styles.header__slider__df}>
            <div className="header__slider__image">
              <img
                src="https://unibank.az/uploads/banners/1693917765banner-tehsil-iscilerine.png"
                alt=""
              />
            </div>
            <div className={styles.header__slider__text}>
              <h4 className={styles.header__slider__text__h4}>Təhsil işçilərinə 0% <br /> komissiya!</h4>
              <p className={styles.header__slider__parag}>
Sentyabrın 30-dək bütün təhsil işçiləri üçün 0% komissiyalı nağd <br /> kredit!
</p>
<div className={styles.header__slider__buttons}>
  <button className={styles.header__slider__delivery}>Sifaris et</button>
  <button className={styles.header__slider__about}>Etrafli</button>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
