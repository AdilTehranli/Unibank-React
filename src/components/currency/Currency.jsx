import React from "react";
import styles from "../currency/Currency.module.scss";

const Currency = () => {
  return (
    <div className={styles.currency}>
      <div className="container">
        <div className={styles.currency__slider}>
          <div className={styles.currency__slider__title}>
            <h3 className={styles.currency__slider__title__h3}>
              Valyuta məzənnələri
            </h3>
          </div>
          <div className={styles.currency__slider__excange__df}>
            <div className={styles.currency__slider__exchange}>
              <div className={styles.currency__slider__exchange__title}>
                Nagd
              </div>
              <div className="currency__slider__exchange__date">
                Yeniləndi 12.09.2023
              </div>
              <div className={styles.currency__slider__exchange__body}>
                <table>
                  <thead>
                    <tr>
                      <th>Valyuta</th>
                      <th>Alış</th>
                      <th>Satış</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>USD</td>
                      <td>1.6940 </td>
                      <td>1.7005 </td>
                    </tr>
                    <tr>
                      <td>GBP</td>
                      <td>2.0916 </td>
                      <td>2.1395 </td>
                    </tr>
                    <tr>
                      <td>EUR</td>
                      <td>1.7927 </td>
                      <td>1.8366 </td>
                    </tr>
                    <tr>
                      <td>RUB</td>
                      <td>0.0146 </td>
                      <td>0.0183 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.currency__slider__exchange}>
              <div className={styles.currency__slider__exchange__title}>
                Nagd
              </div>
              <div className="currency__slider__exchange__date">
                Yeniləndi 12.09.2023
              </div>
              <div className={styles.currency__slider__exchange__body}>
                <table>
                  <thead>
                    <tr>
                      <th>Valyuta</th>
                      <th>Alış</th>
                      <th>Satış</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>USD</td>
                      <td>1.6940 </td>
                      <td>1.7005 </td>
                    </tr>
                    <tr>
                      <td>GBP</td>
                      <td>2.0916 </td>
                      <td>2.1395 </td>
                    </tr>
                    <tr>
                      <td>EUR</td>
                      <td>1.7927 </td>
                      <td>1.8366 </td>
                    </tr>
                    <tr>
                      <td>RUB</td>
                      <td>0.0146 </td>
                      <td>0.0183 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.currency__slider__exchange}>
              <div className={styles.currency__slider__exchange__title}>
                Nagd
              </div>
              <div className="currency__slider__exchange__date">
                Yeniləndi 12.09.2023
              </div>
              <div className={styles.currency__slider__exchange__body}>
                <table>
                  <thead>
                    <tr>
                      <th>Valyuta</th>
                      <th>Alış</th>
                      <th>Satış</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>USD</td>
                      <td>1.6940 </td>
                      <td>1.7005 </td>
                    </tr>
                    <tr>
                      <td>GBP</td>
                      <td>2.0916 </td>
                      <td>2.1395 </td>
                    </tr>
                    <tr>
                      <td>EUR</td>
                      <td>1.7927 </td>
                      <td>1.8366 </td>
                    </tr>
                    <tr>
                      <td>RUB</td>
                      <td>0.0146 </td>
                      <td>0.0183 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className={styles.currency__slider__calculater}>
            <div className={styles.currency__slider__calculater_items}>
              <div className={styles.currency__slider__calculater_item__texts}>
                <h4
                  className={styles.currency__slider__calculater_item__text_h4}
                >
                  Valyuta kalkulyatoru
                </h4>

                
                <p className={styles.currency__slider__calculater_item__text_p}>
                  Nağd məzənnə əsasında hesablanır
                </p>
              </div>
              <div className={styles.currency__slider__calculater_item__inps}>
                <div className={styles.currency__slider__calculater_item__inp_en}>
                  <input  className={styles.currency__slider__calculater_item__inps_m} type="text" />
                </div>
                <div className={styles.currency__slider__calculater_item__inp_en}>
                  <input className={styles.currency__slider__calculater_item__inps_m} type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
