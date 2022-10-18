describe('shared-ui: Toolbar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=toolbar--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Toolbar!');
    });
});
