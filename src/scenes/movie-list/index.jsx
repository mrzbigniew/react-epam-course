import React from 'react';

import Container from '../../components/container';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Content from '../../components/content';
import Logo from '../../components/logo';

import SearchForm from './components/search-form';
import ResultsList from './components/results-list';

import './styles/styles.scss';

const MovieList = () => {
    return (
        <Container>
            <Header>
                <Logo />
                <SearchForm />
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

export default MovieList;
