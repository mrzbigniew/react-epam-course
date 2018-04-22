import React from 'react';

import './test.scss';

const statuses = {
    hovered: 'hovered',
    normal: 'normal'
}
export class TestComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            className: statuses.normal
        };
    }

    _onMouseEnter = () => {
        const state = Object.assign({}, this.state);
        state.className = statuses.hovered;
        this.setState(state);
    }

    _onMouseLeave = () => {
        const state = Object.assign({}, this.state);
        state.className = statuses.normal;
        this.setState(state);
    }

    render() {
        return (
            <div className={this.state.className}
                 onMouseEnter={this._onMouseEnter}
                 onMouseLeave={this._onMouseLeave}
            >
                {this.props.children /* eslint-disable-line */}
            </div>
        )
    }
}
