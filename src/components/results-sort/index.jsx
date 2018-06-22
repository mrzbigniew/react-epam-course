import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../button';
import { setSearchResultsSortOrder } from '../../actions/results';

const ResultsSortComponent = ({
  dispatch, children, value, active,
}) => (
  active ? (<span className="btn btn-sm btn-success">{children}</span>)
    : (
        <Button className="btn btn-sm btn-link"
          onClick={
            () => dispatch(setSearchResultsSortOrder(value))
          }
        >
          {children}
        </Button>
    )
);

ResultsSortComponent.propTypes = {
  dispatch: PropTypes.func,
  children: PropTypes.node,
  value: PropTypes.string,
  active: PropTypes.bool,
};

const ResultsSort = connect((state, ownProps) => ({
  active: state.results.sort === ownProps.value,
}))(ResultsSortComponent);

export default ResultsSort;
