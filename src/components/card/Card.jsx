import React from 'react';
import styles from '../card/Card.module.scss';


const Card = () => {
  return (
    
    <div className={styles.section__card}>
        <div className="container">
            <div className={styles.section__cards}>
                <div className={styles.section__card__offer}>
                    <p className={styles.section__card__title}>Nağd kreditlər</p>
                    <h2 className={styles.section__card__math}>16%</h2>
                    <p className='section__card__ofs'>-dən başlayaraq</p>
                    <button className={styles.section__card__btn}>Sifaris et</button>
                </div>
                <div className={styles.section__card__offer}>
                    <p className={styles.section__card__title}>Nağd kreditlər</p>
                    <h2 className={styles.section__card__math}>16%</h2>
                    <p className='section__card__ofs'>-dən başlayaraq</p>
                    <button className={styles.section__card__btn}>Sifaris et</button>
                </div>
                <div className={styles.section__card__offer}>
                    <p className={styles.section__card__title}>Nağd kreditlər</p>
                    <h2 className={styles.section__card__math}>16%</h2>
                    <p className='section__card__ofs'>-dən başlayaraq</p>
                    <button className={styles.section__card__btn}>Sifaris et</button>
                </div>
                <div className={styles.section__card__offer}>
                    <p className={styles.section__card__title}>Nağd kreditlər</p>
                    <h2 className={styles.section__card__math}>16%</h2>
                    <p className='section__card__ofs'>-dən başlayaraq</p>
                    <button className={styles.section__card__btn}>Sifaris et</button>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Card