import React from 'react';
import styles from '../footer/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer} >
        <div className="container">
            <div className={styles.footer__orders}>
                <div className={styles.footer__orders__menu}>
                    <ul className={styles.footer__orders__menu__ul}>
                        Kartlar    
                        <li className={styles.footer__orders__menu__li}>Kartlar</li>
                        <li className={styles.footer__orders__menu__li}>Debet kartlar</li>
                        <li className={styles.footer__orders__menu__li}>Diger</li>
                    </ul>
                </div>

                <div className={styles.footer__orders__menu}>
                    <ul className={styles.footer__orders__menu__ul}>
                        kreditler    
                        <li className={styles.footer__orders__menu__li}>Nagd</li>
                        <li className={styles.footer__orders__menu__li}>Mikro</li>
                        <li className={styles.footer__orders__menu__li}>Ipoteka</li>
                    </ul>
                </div>

                <div className={styles.footer__orders__menu}>
                    <ul className={styles.footer__orders__menu__ul}>
                    Əmanətlər    
                        <li className={styles.footer__orders__menu__li}>Müddətli</li>
                        <li className={styles.footer__orders__menu__li}>Proqressiv</li>
                        <li className={styles.footer__orders__menu__li}>Yığım</li>
                        <li className={styles.footer__orders__menu__li}>Faizlər əvvəlcədən</li>
                        <li className={styles.footer__orders__menu__li}>Topla</li>
                    </ul>
                </div>

                <div className={styles.footer__orders__menu}>
                    <ul className={styles.footer__orders__menu__ul}>
                    Köçürmələr    
                        <li className={styles.footer__orders__menu__li}>Ölkəxarici</li>
                        <li className={styles.footer__orders__menu__li}>Ölkədaxili</li>
                    </ul>
                </div>
    
                
                <div className={styles.footer__orders__menu}>
                    <ul className={styles.footer__orders__menu__ul}>
                    Rəqəmsal bankçılıq    
                        <li className={styles.footer__orders__menu__li}>UBank</li>
                        <li className={styles.footer__orders__menu__li}>Şəxsi kabinet</li>
                        <li className={styles.footer__orders__menu__li}>Unimiles şəxsi kabinet</li>
                        <li className={styles.footer__orders__menu__li}>Onlayn kredit ödənişi</li>
                        <li className={styles.footer__orders__menu__li}>Onlayn kredit müraciəti</li>
                    </ul>
                </div>

                <div className={styles.footer__orders__menu}>
                    <ul className={styles.footer__orders__menu__ul}>
                    Əlavə xidmətlər   
                        <li className={styles.footer__orders__menu__li}>Hesablaşma-kassa xidməti</li>
                        <li className={styles.footer__orders__menu__li}>POS terminal / Smart kassa</li>
                        <li className={styles.footer__orders__menu__li}>Depozit qutuları</li>
                        <li className={styles.footer__orders__menu__li}>Onlayn ticarət (eCommerce)</li>
                    </ul>
                </div>

                
                <div className={styles.footer__orders__menu}>
                    <ul className={styles.footer__orders__menu__ul}>
                    Bank haqqında 
                        <li className={styles.footer__orders__menu__li}>Rəhbərlik</li>
                        <li className={styles.footer__orders__menu__li}>Müxbir hesablar</li>
                        <li className={styles.footer__orders__menu__li}>Təklif və Şikayətlər</li>
                        <li className={styles.footer__orders__menu__li}>İnsan resursları</li>
                        <li className={styles.footer__orders__menu__li}>Hesabatlar</li>
                        <li className={styles.footer__orders__menu__li}>Digər sənədlər</li>
                    </ul>
                </div>
                
            </div>
            
            <div className={styles.footer__information__df}>
                <div className={styles.footer__information__text}>
                    <p className={styles.footer__information__text__date}> © 2023, Unibank - Sənin Bankın</p>
                    <p className={styles.footer__information__text__desc}>Unibank Azərbaycan Respublikası Mərkəzi Bankının 73 saylı 14 dekabr 2010-cu il tarixli lisenziyası əsasında fəaliyyət göstərir.
Bütün hüquqlar qorunur.</p>
                </div>
                <div className={styles.footer__information__images}>
                    <img className={styles.footer__information__image} src="	https://unibank.az/assets/images/adif.png" alt="" />
                    <img className={styles.footer__information__image}  src="https://unibank.az/assets/images/infobank.png?v4" alt="" />
                    <img className={styles.footer__information__image}  src="	https://unibank.az/assets/images/msp.png?v5" alt="" />
                    <img className={styles.footer__information__image}  src="https://unibank.az/assets/images/msp.png?v5" alt="" />
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Footer