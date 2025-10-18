🧪 Projeto de Automação de Testes - Lacrei Saúde

Este repositório é dedicado à automação de testes End-to-End (E2E) para a plataforma Lacrei Saúde, focando em garantir a qualidade e a estabilidade dos principais fluxos da aplicação de pacientes no ambiente de staging.

O projeto utiliza Cypress, um framework moderno de testes em JavaScript, para criar testes rápidos, confiáveis e fáceis de depurar.

📋 Fluxos de Teste Cobertos

Atualmente, os seguintes cenários estão automatizados, correspondendo aos arquivos na pasta cypress/e2e/:

Cadastro (cadastro.cy.js): Validação do fluxo de criação de uma nova conta de paciente.

Login (login.cy.js): Teste de autenticação na plataforma com credenciais válidas.

Busca de Profissionais (busca_profissional.cy.js): Simulação de buscas e validação da página de resultados.

Perfil do Usuário (perfil.cy.js): Verificação do carregamento correto da página de perfil após o login.

Redefinição de Senha (senha.cy.js): Validação do fluxo de recuperação e redefinição de senha.

🚀 Como Configurar o Ambiente

Para executar os testes localmente, siga os passos abaixo.

Pré-requisitos:

Node.js (versão 16 ou superior)

Git

Instalação:

# 1. Clone o repositório
git clone [https://github.com/felipebarbosadesu/lacrei-repo-qa.git](https://github.com/felipebarbosadesu/lacrei-repo-qa.git)

# 2. Navegue até a pasta do projeto
cd lacrei-repo-qa

# 3. Instale as dependências
npm install


▶️ Como Executar os Testes

Você pode executar os testes de duas formas:

1. Modo Interativo (Recomendado para desenvolver/depurar)
Abre a interface do Cypress, permitindo que você veja o teste rodando em tempo real, interaja com os elementos e depure falhas.

npx cypress open


2. Modo Headless (Recomendado para CI/CD e execuções completas)
Executa todos os testes em segundo plano, sem abrir o navegador. É mais rápido e ideal para validações completas.

npx cypress run


☁️ Relatórios e Cypress Cloud

Este projeto está configurado para enviar os resultados das execuções para o Cypress Cloud. Isso permite visualizar:

Vídeos da execução de cada teste.

Screenshots detalhados de cada falha.

Histórico e análise de performance dos testes.

Para enviar os resultados, execute o comando de run com a sua record key:

npx cypress run --record --key SUA_CHAVE_AQUI


📂 Estrutura do Projeto

/
├── cypress/
│   ├── e2e/               # Contém os arquivos de teste (.cy.js)
│   ├── fixtures/          # Dados mockados (ex: usuários para testes)
│   └── support/           # Arquivos de configuração e comandos customizados
│       ├── commands.js    # Onde criamos comandos como cy.login()
│       └── e2e.js         # Configurações globais para os testes
│
├── cypress.config.js      # Arquivo principal de configuração do Cypress
└── package.json           # Dependências e scripts do projeto


🌐 Ambiente:

Staging: https://paciente-staging.lacrei-saude.com.br/
