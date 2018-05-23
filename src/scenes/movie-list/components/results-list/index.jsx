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

const getFiltered = (data, filter, text) => {
    return filter && text
        ? (
            data.filter(
                movie => (
                    (filter === SEARCH_BY_TITLE)
                        ? (movie.title.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)
                        : (movie.genres.some(
                            genre => genre.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1
                        )
                        )
                )
            )
        )
        : []
}

const getSorted = (data, sort) => {
    return data.sort(
        (current, next) => {
            const valueTransformer = sort === SORT_BY_RATING ? value => value.toString() : value => new Date(value)
            const currentValue = valueTransformer(sort === SORT_BY_RATING ? current['vote_average'] : current['release_date']);
            const nextValue = valueTransformer(sort === SORT_BY_RATING ? next['vote_average'] : next['release_date']);
            return currentValue === nextValue ? 0 : (currentValue > nextValue ? 1 : -1);
        }
    )
}

let ResultsList = ({ movies }) => {
    return (
        <Content>
            <Navbar className="navbar-expand-lg navbar-light bg-light justify-content-between">
                <ResultsCount moviesCount={movies.length} />
                <div>
                    <ResultsSort value={SORT_BY_RATING}>rating</ResultsSort>
                    <ResultsSort value={SORT_BY_RELEASE_DATE}>release date</ResultsSort>
                </div>
            </Navbar>
            <Content>
                <ResultsBody movies={movies} />
            </Content>
        </Content>
    );
};

ResultsList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
}

ResultsList = connect(
    (state) => ({
        movies: getSorted(
            getFiltered(
                state.movies.data.data,
                state.results.criteria.filter,
                state.results.criteria.text
            ),
            state.results.sort
        )
    })
)(ResultsList);

export default ResultsList;
