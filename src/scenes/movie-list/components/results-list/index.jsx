import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ResultsCount from '../../../../components/results-count';
import ResultsSort from '../../../../components/results-sort';
import ResultsBody from '../../../../components/results-body';
import Content from '../../../../components/content';
import Navbar from '../../../../components/navbar';
import movie from '../../../../reducers/movie';

import { SORT_BY_RATING, SORT_BY_RELEASE_DATE, getFiltered, sortResults } from '../../../../actions/results';

const ResultsListComponent = ({ movies, sort, match }) => {
  const { text, filter } = match.params;

  const results = sortResults(getFiltered(movies, filter, text), sort);
  return (
        <Content>
            <Navbar className="navbar-expand-lg navbar-light bg-light justify-content-between">
                <ResultsCount moviesCount={results.length} />
                <div>
                    <ResultsSort value={SORT_BY_RATING}>rating</ResultsSort>
                    <ResultsSort value={SORT_BY_RELEASE_DATE}>release date</ResultsSort>
                </div>
            </Navbar>
            <Content>
                <ResultsBody movies={results} />
            </Content>
        </Content>
  );
};

ResultsListComponent.propTypes = {
  movies: PropTypes.any,
  match: PropTypes.object,
  sort: PropTypes.string,
};

const ResultsList = withRouter(connect(state => ({
  movies: state.movies.data.data,
  sort: state.results.sort,
}))(ResultsListComponent));

export default ResultsList;
