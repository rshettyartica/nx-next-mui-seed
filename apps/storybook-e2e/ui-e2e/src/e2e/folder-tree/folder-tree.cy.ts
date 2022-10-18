describe('shared-ui: FolderTree component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=foldertree--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FolderTree!');
    });
});
