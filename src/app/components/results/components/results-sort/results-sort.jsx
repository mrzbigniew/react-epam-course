import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../../components/button/button';

const ResultsSort = ({sortItems, onClick, sortBy}) => {
    return (
        <div className="results-sort">
            <b>Sort by:</b> {sortItems.map(item => <Button
                key={item.label}
                className={`btn btn-sm btn-${item.value === sortBy
                ? 'success'
                : 'link'}`}
                onClick={() => onClick(item)}
                label={item.label}/>)}
        </div>
    );
}

ResultsSort.propTypes = {
    sortItems: PropTypes.arrayOf(PropTypes.shape({value: PropTypes.string, label: PropTypes.string})),
    onClick: PropTypes.func,
    sortBy: PropTypes.string
}

export default ResultsSort;
