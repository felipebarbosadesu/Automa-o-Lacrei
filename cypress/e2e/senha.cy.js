describe('Redefinir Senha', () => {
  beforeEach(() => {
    cy.visit('https://paciente-staging.lacreisaude.com.br/saude/paciente/redefinir-senha/')
  })
  it('Deve exibir mensagem de sucesso ao redefinir senha com email válido', () => {
    // Usa um e-mail que se espera estar cadastrado no ambiente de staging
    cy.get('#email').type(Cypress.env('USER_EMAIL'));

    // O botão deve ficar habilitado após digitar um email válido
    cy.contains('button', 'Redefinir senha').should('not.be.disabled');
    cy.contains('button', 'Redefinir senha').click();

    // Valida a mensagem de sucesso
    cy.contains('Enviamos um e-mail para você com as instruções de recuperação.', { timeout: 10000 }).should('be.visible');
  });
  
  it('Deve exibir erro ao tentar redefinir senha com email inválido', () => {
    // CORREÇÃO: Digita no campo de email ANTES de tentar clicar no botão
    cy.get('#email').type('email-invalido');

    // Valida que o botão permanece desabilitado com email inválido
    cy.contains('button', 'Redefinir senha').should('be.disabled');
  });
});