import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchField from '../../../../components/search-field';
import SearchButton from '../../../../components/search-button';
import FilterLink from '../../../../components/filter-link';

import './styles/styles.scss';
import { SEARCH_BY_TITLE, SEARCH_BY_GENRE, setSearchText, searchMovies } from '../../../../actions/search';

let SearchForm = ({dispatch, text, filter}) => {
    const search = () => {
        dispatch(searchMovies(filter, text));
    }

    return (
        <form className="search-form" onSubmit={(e) => {e.preventDefault(); search()}}>
            <div className="row no-gutters">
                <div className="col-12">
                    <SearchField onChange={(value) => dispatch(setSearchText(value))}/>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-6">
                    <FilterLink filter={SEARCH_BY_TITLE}>
                        title
                    </FilterLink>
                    <FilterLink filter={SEARCH_BY_GENRE}>
                        genre
                    </FilterLink>
                </div>
                <div className="col-6">
                    <div className="row no-gutters justify-content-end">
                        <SearchButton onClick={() => search()}>
                            search
                        </SearchButton>
                    </div>
                </div>
            </div>
        </form>
    )
}

SearchForm.propTypes = {
    dispatch: PropTypes.func,
    text: PropTypes.string,
    filter: PropTypes.string
}

SearchForm = connect(
    (state) => ({
        filter: state.search.filter,
        text: state.search.text
    })
)(SearchForm);

export default SearchForm;
