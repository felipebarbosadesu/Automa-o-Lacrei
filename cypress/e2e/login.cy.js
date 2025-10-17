// cypress/e2e/login.cy.js

describe('Fluxo de Login', () => {
  beforeEach(() => {
    // CORREÇÃO: Visita a página inicial (raiz "/"), que é onde o formulário de login se encontra.
    // Adicionado um timeout maior para dar conta de possíveis lentidões do ambiente de staging.
    cy.visit('/', { timeout: 30000 });
  });

  it('Deve realizar login com sucesso usando credenciais válidas', () => {
    // CORREÇÃO: Usa as chaves (nomes das variáveis) do arquivo cypress.env.json.
    cy.get('#email').type(Cypress.env('USER_EMAIL'));
    cy.get('#password').type(Cypress.env('USER_PASSWORD'));
    cy.contains('button', 'Entrar').click();

    // Valida o redirecionamento e a presença de um elemento na página de busca
    cy.url().should('include', '/profissional/busca');
    cy.contains('h1', 'Busque por profissionais').should('be.visible');
  });
});
