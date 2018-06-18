import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ResultsBody from '../../../../components/results-body';
import Content from '../../../../components/content';
import Navbar from '../../../../components/navbar';

import ResultsGenreInfo from '../../../../components/results-genre-info';

const ResultsListComponent = ({ movies, match }) => {
  const movie = movies.find(m => m.id.toString() === match.params.id);
  const sameMovies = movies.filter(current => current.genres[0] === movie.genres[0]);

  return (
        <Content>
            <Navbar className="navbar-expand-lg navbar-light bg-light justify-content-between">
                <ResultsGenreInfo genre={movie.genres[0]} />
            </Navbar>
            <Content>
                <ResultsBody movies={sameMovies} />
            </Content>
        </Content>
  );
};

ResultsListComponent.propTypes = {
  movies: PropTypes.array,
  match: PropTypes.object,
};

const ResultsList = withRouter(connect(state => ({
  movies: state.movies.data.data,
}))(ResultsListComponent));

export default ResultsList;
