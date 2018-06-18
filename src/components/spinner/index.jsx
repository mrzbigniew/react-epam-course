import React from 'react';

import styles from './styles/styles.scss';

const Spinner = () => (
        <div className={styles.spinner}>
            <div className={styles.blinker1}></div>
            <div className={styles.blinker2}></div>
        </div>
);

export default Spinner;
