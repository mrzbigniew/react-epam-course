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

let ResultsList = ({ movies, sort, match }) => {
    const text = match.params.text;
    const filter = match.params.filter;
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

ResultsList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    match: PropTypes.object,
    sort: PropTypes.string
}

ResultsList = withRouter(connect(
    (state) => ({
        movies: state.movies.data.data,
        sort: state.results.sort
    })
)(ResultsList));

export default ResultsList;
