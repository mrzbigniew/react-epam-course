import React from 'react';
import PropTypes from 'prop-types';
import MovieImage from '../../../../../components/movie-image/movie-image';

import './styles/styles.scss';

const ResultsItem = () => {
    return (
        <div className="result-item" onClick={this.props.onClick}>
            <div><MovieImage
                width="200"
                src={this.props.poster_path}
                alt={this.props.title}
                className="movie-image"/></div>
            <div className="w-100 d-flex justify-content-between">
                <span>{this.props.title}</span>
                <span>{this.props.release_year}</span>
            </div>
            <div className="w-100 d-flex justify-content-start align-items-start">
                {this.props.genre || ''}
            </div>
        </div>
    );
}

ResultsItem.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_year: PropTypes.string,
    genre: PropTypes.string,
    onClick: PropTypes.func
}

export default ResultsItem;
