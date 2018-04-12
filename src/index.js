import React from 'react';
import ReactDOM from 'react-dom';

class Greater1 extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            data: {
                value: params.name
            }
        }
    }

    handleChange() {

    }

    onChange(event) {
        this.setState({
            data: {
                value: event.target.value
            }
        })
    }

    render() {
        return (
            <div>Hello {this.state.data.value}
                <div>
                    <input type="text" value={this.state.data.value} onChange={(event) => this.onChange(event)} placeholder=""/>
                    <button onClick={(event) => this.handleChange(event)}>change</button>
                </div>
            </div>
        );
    }
}

const Greater2 = (params) => {
    return (
        <div>
            Hello {params.name}
        </div>
    )
}

const name = 'Zbigniew';

const container = React.createElement(
    'div',
    {
        className: 'container'
    },
    <div> Hello World </div>,
    React.createElement('div', null, `Hello ${name}`),
    <Greater1 name={name}/>,
    <Greater2 name={name}/>
);

ReactDOM.render(container, document.querySelector('#app'));

module.hot.accept();
