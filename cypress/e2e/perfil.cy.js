describe('Página de Perfil', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('https://paciente-staging.lacreisaude.com.br/perfil/')
  });

  it('Deve exibir informações do usuário logado', () => {
    // Navega para a página de perfil após o login
    cy.visit('/perfil/');

    // CORREÇÃO: Aguarda o título da página de perfil
    cy.contains('h1', 'Meu perfil', { timeout: 10000 }).should('be.visible');

    // Valida que o email do usuário logado aparece na página
    cy.contains(Cypress.env('USER_EMAIL')).should('be.visible');
  });
});
