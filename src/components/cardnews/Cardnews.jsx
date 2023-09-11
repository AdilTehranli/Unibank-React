import React from 'react';
import styles from '../cardnews/Cardnews.module.scss';
const Cardnews = () => {
  return (
    <div className={styles.section__cardnews}>
        <div className="container">
            <div className={styles.section__cardnews_cards}>
                <div className={styles.section__cardnews_card__item}>
                    <p className={styles.section__cardnews__title}>Unibank KB ASC Cloudflare Enterprise domeninin lisenziya uzadılması ilə bağlı kotirovka elan edir.</p>
                    <p className='section__cardnews__desc'>Kotirovkada iştirak etmək istəyənlər qiymət təklifini bağlı və möhürlənmiş zərfdə, kotirovka komissiyasının sədri Tural Həsənovun adına göndərməlidirlər. </p>
                    <p className='section__cardnews__datetime'>05.09.2023 </p>
                </div>
                <div className={styles.section__cardnews_card__item}>
                    <p className={styles.section__cardnews__title}>Unibank KB ASC Cloudflare Enterprise domeninin lisenziya uzadılması ilə bağlı kotirovka elan edir.</p>
                    <p className='section__cardnews__desc'>Kotirovkada iştirak etmək istəyənlər qiymət təklifini bağlı və möhürlənmiş zərfdə, kotirovka komissiyasının sədri Tural Həsənovun adına göndərməlidirlər. </p>
                    <p className='section__cardnews__datetime'>05.09.2023 </p>
                </div>
                <div className={styles.section__cardnews_card__item}>
                    <p className={styles.section__cardnews__title}>Unibank KB ASC Cloudflare Enterprise domeninin lisenziya uzadılması ilə bağlı kotirovka elan edir.</p>
                    <p className={styles.section__cardnews__datetime}>Kotirovkada iştirak etmək istəyənlər qiymət təklifini bağlı və möhürlənmiş zərfdə, kotirovka komissiyasının sədri Tural Həsənovun adına göndərməlidirlər. </p>
                    <p className={styles.section__cardnews__datetime}>05.09.2023 </p>
                </div>
            </div>
            <div className={styles.section__cardnews_btn_center}>

            <button className={styles.section__cardnews__btn}>Butun xeberler</button>
            </div>
        </div>
    </div>
  )
}

export default Cardnews