describe('Página de Cadastro - Conta Existente', () => {
  beforeEach(() => {
    // Visita a página de cadastro
    cy.visit('https://paciente-staging.lacreisaude.com.br/cadastro/');
  });

  it('Deve exibir erro ao tentar cadastrar com email já existente', () => {
    // Preenche campos de nome e sobrenome
    cy.get('#first_name').type('Felipe', { force: true });
    cy.get('#last_name').type('Vieira Barbosa', { force: true });

    // Usa um email já cadastrado
    cy.get('#email').type('felipebarbosasud@gmail.com', { force: true });
    cy.get('#email2').type('felipebarbosasud@gmail.com', { force: true });

    // Preenche senha e confirmação
    cy.get('#password1').type('Kobemission1@', { force: true });
    cy.get('#password2').type('Kobemission1@', { force: true });

    // Marca checkboxes
    cy.get('input[name="accepted_privacy_document"]').check({ force: true });
    cy.contains('Tenho 18 anos ou mais').click({ force: true });

    // Clica em "Cadastrar"
    cy.contains('span', 'Cadastrar').click({ force: true });

    // Valida que mensagem de erro é exibida
    cy.contains('Este e-mail já está cadastrado', { timeout: 10000 })
      .should('be.visible');
  });
});
