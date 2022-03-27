describe('Given an english visitor on the home page', () => {
    describe('When the homepage is loaded', () => {
        it('Should display headline', () => {
            cy.visit('/');

            cy.get('body').should('contain', 'Headline');
        });
    });
});
