import React from 'react';

import styles from './styles/styles.scss';

const NoResults = () => {
    return (
        <div className={styles.noResultsFound}>
            <span>No films found</span>
        </div>
    )
}

export default NoResults;
