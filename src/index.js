import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Stranger';

const element1 = React.createElement('div', null, `Hello ${name}`);

class Greater1 extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            data: {
                value: params.name
            }
        }
    }

    clean() {
        this.setState({
            data: {
                value: ''
            }
        })
    }

    change(event) {
        this.setState({
            data: {
                value: event.target.value
            }
        })
    }

    render() {
        return (
            <div>Hello 1: {this.state.data.value}
                <div>
                    <input type="text" value={this.state.data.value} onChange={(event) => this.change(event)} placeholder=""/>
                    <button onClick={(event) => this.clean(event)}>clean</button>
                </div>
            </div>
        );
    }
}

const Greater2 = (params) => {
    return (
        <div>
            Hello 2: {params.name}
        </div>
    )
}

class Greater3 extends React.PureComponent {
    constructor(params) {
        super(params);
    }

    render() {
        return (
            <div>Hello 3: {this.props.name}</div> // eslint-disable-line
        )
    }
}

class Greater4 extends React.Component {
    constructor(params) {
        super(params);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.name !== this.props.name; // eslint-disable-line
    }

    render() {
        return (
            <div>Hello 4: {this.props.name}</div> // eslint-disable-line
        );
    }
}

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    change(e) {
        this.props.doOnChange(e.target.value); // eslint-disable-line
    }

    shouldComponentUpdate(nextProps){
        return nextProps.name !== this.props.name; //eslint-disable-line
    }

    render() {
        return (
            <div>
                Child text: <input onChange={(e) => this.change(e)} type="text" value={this.props.name}/>
            </div>
        );
    }
}

class Container extends React.Component {
    constructor(params) {
        super(params);
        this.state = {
            params: params
        };
    }

    onChange(e) {
        this.setState({
            params: {
                name: e.target.value
            }
        });
    }

    onEditorChange(value) {
        this.setState({
            params: {
                name: value
            }
        });
    }

    render() {
        return (
            <div>
                Name: <input type="text" value={this.state.params.name} onChange={(e) => { this.onChange(e) }}/>
                {React.createElement('div', {className: 'first-component'},'Hello: ' + this.state.params.name) }
                <Greater1 name={this.state.params.name} />
                <Greater2 name={this.state.params.name} />
                <Greater3 name={this.state.params.name} />
                <Greater4 name={this.state.params.name} />
                <Editor  doOnChange={(v) => this.onEditorChange(v)} name={this.state.params.name}/>
            </div>
        );
    }
}

const container = React.createElement(
    'div',
    {
        className: 'container'
    },
    <div> Hello World </div>,
    element1,
    <Greater1 name={name}/>,
    <Greater2 name={name}/>,
    <Greater3 name={name}/>,
    <Container name={name}/>
);

ReactDOM.render(container, document.querySelector('#app'));

module.hot.accept();
