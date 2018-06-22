import { connect } from 'react-redux';
import { setSearchFilter } from '../../actions/search';
import Link from '../link';

const mapStateToProps = (state, ownProps) => ({
  active: state.search.filter === ownProps.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setSearchFilter(ownProps.filter));
  },
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default FilterLink;
