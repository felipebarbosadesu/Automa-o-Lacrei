Cypress.Commands.add('login', () => {
  // CORREÇÃO: Visita a página inicial, que é onde o formulário de login está.
  cy.visit('https://paciente-staging.lacreisaude.com.br/');

  // Digita o email e a senha
  // Usar .clear() é uma boa prática para garantir que o campo está limpo
  cy.get('#email')
  .should('be.visible')
  .clear({ force: true })
  .type('felipebarbosasud@gmail.com', { force: true });

  cy.get('#password')
  .should('be.visible')
  .clear({ force: true })
  .type('Kobemission1@', { force: true });

  // CORREÇÃO: Clica no botão que contém o texto "Entrar". É mais robusto que clicar no <span>.
  cy.contains('span', 'Entrar')
   .should('be.visible')
   .click({ force: true });


  // CORREÇÃO: Garante que o login redirecionou para a página de busca de profissionais.
  cy.url().should('include', '/profissional/busca');
});
