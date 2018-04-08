import * as React from 'react';
import BertaHead from 'Berta/BERTA.png'

import styles from './styles.css';

export default ({ phrase }) => (
  <div className={styles.wrapper}>
    <img className={styles.berta} src={BertaHead} />
    <div className={styles.bubble}>
      {phrase}
    </div>
  </div>
)
