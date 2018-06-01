import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, info) {
        this.setState({error: error, errorInfo: info});
    }

    render() {
        return (!this.state.error
            ? this.props.children
            : <div className="row">
                <div className="col">
                    <h2>Error!</h2>
                    <div><strong>{this.state.error.toString()}</strong></div>
                    <div>{this.state.errorInfo.componentStack}</div>
                </div>
            </div>);
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node
}
