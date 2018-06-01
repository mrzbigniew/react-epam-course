import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

const ResultsSort = ({sortItems, onClick, sortBy}) => {
    return (
        <div className="results-sort">
            <b>Sort by:</b> {sortItems.map(item => <Button
                key={item}
                className={`btn btn-sm btn-${item === sortBy
                ? 'success'
                : 'link'}`}
                onClick={() => onClick(item)}
                label={item.replace(/[^a-zA-Z0-9]+/g,' ')}/>)}
        </div>
    );
}

ResultsSort.propTypes = {
    sortItems: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    sortBy: PropTypes.string
}

export default ResultsSort;
