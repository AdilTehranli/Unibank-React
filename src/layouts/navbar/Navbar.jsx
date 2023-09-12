import React from 'react'
import styles from '../navbar/Navbar.module.scss'
import 'bootstrap/scss/bootstrap.scss';


const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <div className="container">
        <div className={styles.navbar__logo}>
            <img className={styles.navbar__logo__img} src="https://unibank.az/assets/images/logonew-orange1.png" alt="" />
        </div>
        <div className={styles.navbar_display}>
        <div className={styles.navbar__orders}>
            <ul className={styles.navbar__orders__item}> 
                <li>Xidmət şəbəkəsi </li>
                <li>Bank haqqında</li>
                <li>Keşbek</li>
                <li>Tariflər</li>
                <li>İnsan Resursları</li>
                <li>Bankla əlaqə və təkliflər</li>
                <li>F.A.Q</li>
            </ul>
        </div>
        <div className={styles.navbar__chooses}>
            <div className={styles.navbar_choses__private_bc}>

            <p className={styles.navbar_choses__private}>Ferdi</p>
            <p className='navbar__choses__corpotare'>Biznes</p>
            </div>
            <div className={styles.navbar__chosess_dark_i}>

            <p className={styles.navbar__choses__darklight}><i class="fa-solid fa-circle-half-stroke"></i></p>
            </div>
            <div className={styles.navbar__choses__langs}>

            <p className={styles.navbar__choses__language__en}>ENG</p>
            </div>
            <div className={styles.navbar__choses__langs}>

            <p className={styles.navbar__choses__language__en}>RUS</p>
            </div>
            <div className={styles.navbar__choses__langs}>

            <p className={styles.navbar__choses__language__en}><i class="fa-solid fa-magnifying-glass"></i></p>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default Navbar