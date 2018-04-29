import React from 'react';

import Container from '../components/container/container';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Content from '../components/content/content';
import Logo from '../../components/logo/logo';
import Search from '../components/search/search';
import Results from '../components/results/results';

export default class FilmSearch extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <div className="row">
                        <div className="col-2">
                            <Logo/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <Search/>
                        </div>
                    </div>
                </Header>
                <Content>
                    <Results/>
                </Content>
                <Footer>
                    <Logo/>
                </Footer>
            </Container>
        );
    }
}
