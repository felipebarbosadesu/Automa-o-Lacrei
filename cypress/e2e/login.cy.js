// cypress/e2e/login.cy.js

describe.only('Fluxo de Login', () => {
  beforeEach(() => {
    cy.visit('https://paciente-staging.lacreisaude.com.br/login/');
  });

  it('Deve realizar login com sucesso usando credenciais válidas', () => {
    // Utiliza as credenciais configuradas no arquivo cypress.env.json
    // Nota: O usuário e senha devem ser válidos no ambiente de staging
    cy.get('input[name="email"]').type(Cypress.env('felipebarbosasud@gmail.com'));
    cy.get('input[name="password"]').type(Cypress.env('Kobemission1@'));
    cy.contains('button', 'Entrar').click();

    // Valida o redirecionamento e a presença de um elemento na página de busca
    cy.url().should('include', '/profissional/busca');
    cy.contains('h1', 'Busque por profissionais').should('be.visible');
  });

  it('Deve exibir uma mensagem de erro para credenciais inválidas', () => {
    cy.get('input[name="email"]').type('email.invalido@naoexiste.com');
    cy.get('input[name="password"]').type('senhaincorreta');
    cy.contains('button', 'Entrar').click();

    // Valida a exibição da mensagem de erro
    cy.contains('E-mail ou senha inválidos.').should('be.visible');
  });
});
