import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../../components/button/button';

const ResultsSort = ({sortConfig, onClick}) => {
    return (
        <div>
            <b>Sort by:</b> {sortConfig.map(item => <Button
                key={item.label}
                className={`btn btn-sm btn-${item.selected
                ? 'success'
                : 'link'}`}
                onClick={() => onClick(item)}
                label={item.label}/>)}
        </div>
    );
}

ResultsSort.propTypes = {
    sortConfig: PropTypes.arrayOf(PropTypes.shape({value: PropTypes.string, label: PropTypes.string, selected: PropTypes.bool})),
    onClick: PropTypes.func
}

export default ResultsSort;
