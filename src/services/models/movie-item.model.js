/* eslint-disable prop-types */

import PropTypes from 'prop-types';

const MovieItemModel = {
  id: PropTypes.number,
  title: PropTypes.string,
  tagline: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default MovieItemModel;
