import React from 'react';
import Container from '../../components/container';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Content from '../../components/content';
import NoResults from '../../components/no-results';
import Logo from '../../components/logo';

import SearchField from './components/search-field';
import SearchFilter from './components/search-filter';
import SearchButton from './components/search-button';

import './styles/styles.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search_filter: [{
                label: 'Title',
                value: 'title',
                selected: true
            }, {
                label: 'Genre',
                value: 'genre',
                selected: false
            }],
            search_params: {
                search_phrase: '',
                search_by: ''
            }
        }
    }

    onFilterChang = (filterValue) => {
        this.setState({
            search_params: {
                search_by: filterValue
            }
        });

        this.setState({
            search_filter: this.state.search_filter.map(
                item => {
                    item.selected = item.value === filterValue;
                    return item;
                }
            )
        });
    }

    onSearch = () => {
        this.search();
    }

    onKeyUp = (event) => {
        if (event.key === 'Enter') {
            this.search()
        } else {
            this.setState({
                search_params: {
                    search_phrase: event.target.value
                }
            });
        }
    }

    search() {

    }

    render() {
        return (
            <Container>
                <Header>
                    <div className="search-form">
                        <div className="row no-gutters">
                            <div className="col-12">
                                <SearchField onKeyUp={this.onKeyUp} />
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-6">
                                <SearchFilter buttons={this.state.search_filter} onClick={this.onFilterChang} />
                            </div>
                            <div className="col-6">
                                <div className="row no-gutters justify-content-end">
                                    <SearchButton onClick={this.onSearch} label="search"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content>
                    <NoResults />
                </Content>
                <Footer>
                    <Logo />
                </Footer>
            </Container>
        );
    }
}
