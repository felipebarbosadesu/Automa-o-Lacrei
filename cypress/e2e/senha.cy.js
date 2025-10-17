describe('Redefinir Senha', () => {
  beforeEach(() => {
    cy.visit('https://paciente-staging.lacreisaude.com.br/saude/paciente/redefinir-senha/')
  })

  it('Deve exibir erro ao tentar redefinir senha com email inválido', () => {
    cy.get('input[name="email"]').type('emailinvalido')
    cy.contains('Enviar').click()
    cy.contains('E-mail inválido').should('be.visible')
  })
})
