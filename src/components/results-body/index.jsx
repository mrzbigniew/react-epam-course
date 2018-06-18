import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NoResults from '../no-results/';
import ResultsItem from '../results-item/';

import styles from './styles/styles.scss';

const ResultsBody = ({ movies }) => (
        <div className={styles.resultsBody}>
            {movies && movies.length
                ? movies.map(movie => (
                    <Link key={movie.id} to={`/film/${movie.id}`}>
                        <ResultsItem
                            poster_path={movie.poster_path}
                            title={movie.title}
                            genre={movie.genres[0]}
                            release_year={movie.release_date.split('-')[0]}
                        />
                    </Link>
                    ))
                : <NoResults />}
        </div>
);

ResultsBody.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default ResultsBody;
