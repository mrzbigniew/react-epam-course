import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/styles.scss';

const MovieDescription = ({ description }) => (
        <div className={styles.moviesDescription}>
            <p>{description}</p>
        </div>
);

MovieDescription.propTypes = {
  description: PropTypes.string,
};

export default MovieDescription;
