describe('App', () => {
    it('Should have correct title', () => {
        cy.visit('http://localhost:8080/');

        cy.title().should('include', 'React epam course');
    });

    context('App', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8080/');
        });

        describe("Logo", () => {
            it('Should have proper logo at header', () => {
                cy.get('#app .header .logo').should('contain', 'netflixroulette');
            });
        });

        describe('SearchForm', () => {
            it('Allow to type', () => {
                cy.get('#app .header .search-form input')
                .type('a')
                .type('b')
                .type('c')
                .should('have.value', 'abc');
            });
        });
    });
});
