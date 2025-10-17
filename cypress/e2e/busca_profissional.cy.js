// cypress/e2e/busca_profissional.cy.test.js

describe('Fluxo de Busca de Profissionais (searchTerm cases)', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/saude/paciente/profissional/busca/');
  });

  const cases = [
    {
      name: 'especialidade válida - Psicologia',
      input: 'Psicologia',
      expectResults: true,
      expectedUrlFragment: `q=${encodeURIComponent('Psicologia')}`
    },
    {
      name: 'termo inexistente - TermoInexistente12345',
      input: 'TermoInexistente12345',
      expectNoResults: true,
      expectedUrlFragment: `q=${encodeURIComponent('TermoInexistente12345')}`
    },
    {
      name: 'com espaços extras - deve ser tratado/trimado na URL',
      input: '  Psicologia  ',
      expectResults: true,
      // Normalize to trimmed value for URL expectation
      expectedUrlFragment: `q=${encodeURIComponent('Psicologia')}`
    },
    {
      name: 'caracteres especiais - encoding na URL',
      input: 'Cardiologia & Neurologia',
      expectedUrlFragment: `q=${encodeURIComponent('Cardiologia & Neurologia')}`
    },
    {
      name: 'case insensitive - psicologia (lowercase)',
      input: 'psicologia',
      expectResults: true,
      expectedUrlFragment: `q=${encodeURIComponent('psicologia')}`
    }
  ];

  cases.forEach((tc) => {
    it(`Busca: ${tc.name}`, () => {
      const inputSelector = 'input[placeholder="Busque por especialidade ou profissional"]';
      // Ensure input is clear, then type the test value
      cy.get(inputSelector).clear().type(tc.input);
      cy.get('form').submit();

      // Assert the URL contains the expected encoded query fragment when provided
      if (tc.expectedUrlFragment) {
        cy.url().should('include', tc.expectedUrlFragment);
      }

      // If we expect results, assert at least one professional card is visible
      if (tc.expectResults) {
        cy.get('.card-result-professional').should('have.length.greaterThan', 0);
      }

      // If we expect no results, assert the "Nenhum resultado..." message
      if (tc.expectNoResults) {
        cy.contains('h2', 'Nenhum resultado encontrado para essa busca').should('be.visible');
      }
    });
  });
});