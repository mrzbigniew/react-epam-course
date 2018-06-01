import React from 'react';

import Container from '../../components/container';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Content from '../../components/content';
import Logo from '../../components/logo';

import BackToSearch from './components/back-to-search';
import MovieDetails from './components/movie-details';
import ResultsList from './components/results-list';

import './styles/styles.scss';

const Movie = () => {
    return (
        <Container>
            <Header>
                <div className="row no-gutters justify-content-between">
                    <Logo />
                    <BackToSearch />
                </div>
                <MovieDetails />
            </Header>
            <Content>
                <ResultsList />
            </Content>
            <Footer>
                <Logo />
            </Footer>
        </Container>
    );
};

export default Movie;
