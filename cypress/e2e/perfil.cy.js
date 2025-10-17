describe('Página de Perfil', () => {
  beforeEach(() => {
    cy.visit('https://paciente-staging.lacreisaude.com.br/perfil/')
  })

  it('Deve exibir informações do usuário logado', () => {
    cy.contains('Meu perfil').should('be.visible')
  })
})
