
describe('Smoke Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Login');
    const username = cy.get('input[name="username"]');
    username.value = 'testuser';
    const password = cy.get('input[name="password"]');
    password.value = 'password123';
    const submitButton = cy.get('button[type="submit"]');
    submitButton.click();
    cy.findByTestId('menu-list').should('exist');
  });
});