// Comandos customizados do Cypress
Cypress.Commands.add('login', (email, senha) => {
  cy.visit('https://paciente-staging.lacreisaude.com.br/')
  cy.get('input[name="email"]').type(email)
  cy.get('input[name="password"]').type(senha)
  cy.contains('Entrar').click()
})
