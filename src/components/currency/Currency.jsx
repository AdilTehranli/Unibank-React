import React from 'react';
import styles from '../currency/Currency.module.scss';

const Currency = () => {
  return (
    <div className={styles.currency}>
        <div className="container">
            <div className={styles.currency__slider}>
                <div className={styles.currency__slider__title}>
                    <h3 className={styles.currency__slider__title__h3}></h3>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Currency