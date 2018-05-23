import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ResultsCount from '../../../../components/results-count';
import ResultsSort from '../../../../components/results-sort';
import ResultsBody from '../../../../components/results-body';
import Content from '../../../../components/content';
import Navbar from '../../../../components/navbar';
import movie from '../../../../reducers/movie';

import { SORT_BY_RATING, SORT_BY_RELEASE_DATE } from '../../../../actions/results';
import { SEARCH_BY_TITLE } from '../../../../actions/search';

let ResultsList = ({ movies, filter, text, sort }) => {

    const getFiltered = (data) => {
        return data.filter(
            movie => (
                (filter === SEARCH_BY_TITLE)
                    ? (movie.title.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)
                    : (movie.genres.some(
                                genre => genre.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1
                        )
                    )
                )
        )
    }

    const getSorted = (data) => {
        return data.sort(
            (current, next) => {
                const valueTransformer = sort === SORT_BY_RATING ? value => value.toString() : value => new Date(value)
                const currentValue = valueTransformer(sort === SORT_BY_RATING ? current['vote_average'] : current['release_date']);
                const nextValue = valueTransformer(sort === SORT_BY_RATING ? next['vote_average'] : next['release_date']);
                return currentValue === nextValue ? 0 : (currentValue > nextValue ? 1 : -1);
            }
        )
    }

    const results = getSorted(
        getFiltered(movies)
    );

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
}

ResultsList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
    text: PropTypes.string,
    sort: PropTypes.string
}

ResultsList = connect(
    (state) => ({
        movies: state.movies.data.data,
        filter: state.results.criteria.filter,
        text: state.results.criteria.text,
        sort: state.results.sort
    })
)(ResultsList);

export default ResultsList;
