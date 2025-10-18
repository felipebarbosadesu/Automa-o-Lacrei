describe('Página de Redefinição de Senha - STG', () => {

  beforeEach(() => {
    // Visita a página de redefinição de senha antes de cada teste
    cy.visit('https://paciente-staging.lacreisaude.com.br/saude/paciente/redefinir-senha/');
  });

  it('Deve exibir corretamente todos os elementos visuais da página', () => {
    // Verifica a URL
    cy.url().should('include', '/redefinir-senha');

    // Verifica os textos principais
    cy.contains('h4', 'Redefinir senha').should('be.visible');
    cy.contains('Vamos enviar um link em seu e-mail para redefinir a sua senha.').should('be.visible');

    // Verifica o campo de email e seu placeholder
    cy.get('#email').should('be.visible').and('have.attr', 'placeholder', 'Digite seu e-mail');

    // Verifica os botões
    cy.contains('button', 'Enviar link').should('be.visible');
    cy.contains('button', 'Voltar').should('be.visible');
  });

  it('Deve habilitar o botão "Enviar link" apenas ao digitar um e-mail válido', () => {
    // Botão "Enviar link" deve iniciar desabilitado
    cy.contains('button', 'Enviar link').should('be.disabled');

    // Digita um texto inválido
    cy.get('#email').type('emailinvalido');
    cy.contains('button', 'Enviar link').should('be.disabled');

    // Limpa o campo e digita um email válido
    cy.get('#email').clear().type('felipebarbosasud@gmail.com');
    cy.contains('button', 'Enviar link').should('be.enabled');
  });
  
  it('Deve navegar para a tela de verificação e exibir os elementos corretos', () => {
    // Digita um email válido
    cy.get('#email').type('felipebarbosasud@gmail.com');

    // Clica no botão para enviar o link
    cy.contains('button', 'Enviar link').click();

    // Verifica se a URL mudou para a tela de verificação
    cy.url().should('include', '/redefinir-senha/verificar');

    // Verifica os textos e elementos da tela de verificação
    cy.contains('h3', 'Verifique seu e-mail para redefinir a senha').should('be.visible');
    cy.contains('Caso o e-mail fornecido exista, será enviada um link para redefinição de senha.').should('be.visible');
    cy.contains('a', 'Reenviar').should('be.visible');
    cy.contains('button', 'Voltar para a tela inicial').should('be.visible');
  });
});