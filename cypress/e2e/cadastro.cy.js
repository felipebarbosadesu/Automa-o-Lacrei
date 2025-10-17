describe('Cadastro de Paciente', () => {
  beforeEach(() => {
    cy.visit('https://paciente-staging.lacreisaude.com.br/cadastro/')
  })

  it('Deve cadastrar novo paciente com sucesso', () => {
    cy.get('input[name="nome"]').type('Felipe Teste')
    cy.get('input[name="email"]').type(`teste${Date.now()}@teste.com`)
    cy.get('input[name="senha"]').type('Senha@123')
    cy.contains('Cadastrar').click()
    cy.url().should('include', '/saude/paciente/pos-cadastro')
  })
})
