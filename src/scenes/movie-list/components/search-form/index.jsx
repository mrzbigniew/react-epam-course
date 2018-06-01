import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchField from '../../../../components/search-field';
import SearchButton from '../../../../components/search-button';
import FilterLink from '../../../../components/filter-link';

import './styles/styles.scss';
import { SEARCH_BY_TITLE, SEARCH_BY_GENRE, setSearchText } from '../../../../actions/search';
import { setSearchResults } from '../../../../actions/results';

let SearchForm = ({ history, setText, filter, text }) => {
    const search = () => {
        history.push(`/search/${filter} ${text}`);
    }
    return (
        <form className="search-form" onSubmit={(e) => { e.preventDefault(); search(); }}>
            <div className="row no-gutters">
                <div className="col-12">
                    <SearchField onChange={setText} />
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
};

SearchForm.propTypes = {
    movies: PropTypes.array,
    history: PropTypes.object,
    doSearch: PropTypes.func,
    setText: PropTypes.func,
    filter: PropTypes.string,
    text: PropTypes.string
}

SearchForm = withRouter(connect(
    (state) => ({
        filter: state.search.filter,
        text: state.search.text
    }),
    (dispatch) => ({
        setText: (text) => {
            dispatch(setSearchText(text));
        }
    })
)(SearchForm));

export default SearchForm;
