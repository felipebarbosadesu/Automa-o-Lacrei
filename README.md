# 🧪 Projeto de Automação de Testes - Lacrei Saúde

Este repositório é dedicado à **automação de testes End-to-End (E2E)** para a plataforma **Lacrei Saúde**, com foco em garantir a **qualidade** e **estabilidade** dos principais fluxos da aplicação de pacientes no ambiente de **staging**.

O projeto utiliza **Cypress**, um framework moderno de testes em JavaScript, para criar testes **rápidos, confiáveis e fáceis de depurar**.


## 📋 Fluxos de Teste Cobertos

Atualmente, os seguintes cenários estão automatizados (localizados em `cypress/e2e/`):

- **Cadastro (`cadastro.cy.js`)** → Validação do fluxo de criação de uma nova conta de paciente.
- **Cadastro já existente (`cadastrojaexistente.cy`)** → Validação da tentativa de cadastro com um e-mail já existente.   
- **Login (`login.cy.js`)** → Teste de autenticação na plataforma com credenciais válidas.  
- **Redefinição de Senha (`senha.cy.js`)** → Validação do fluxo de recuperação e redefinição de senha.


## 🚀 Como Configurar o Ambiente

### **Pré-requisitos**
- [Node.js](https://nodejs.org/) (versão 16 ou superior)  
- [Git](https://git-scm.com/)

### **Instalação**

```bash
# 1. Clone o repositório
git clone https://github.com/felipebarbosadesu/Automa-o-Lacrei.git

# 2. Navegue até a pasta do projeto
cd Automa-o-Lacrei

# 3. Instale as dependências
npm install
````


## ▶️ Como Executar os Testes

Você pode executar os testes de duas formas:

### **1. Modo Interativo**

Recomendado para desenvolvimento e depuração.
Abre a interface visual do Cypress, permitindo acompanhar a execução em tempo real.

```bash
npx cypress open
```

### **2. Modo Headless**

Recomendado para pipelines de CI/CD.
Executa os testes em segundo plano, sem abrir o navegador.

```bash
npx cypress run
```


## ☁️ Relatórios e Cypress Cloud

Este projeto está configurado para enviar os resultados das execuções para o **Cypress Cloud**, permitindo visualizar:

* 🎥 Vídeos da execução de cada teste
* 📸 Screenshots automáticos em caso de falha
* 📊 Histórico e análise de performance

Para enviar os resultados, utilize sua **record key**:

```bash
npx cypress run --record --key SUA_CHAVE_AQUI
```


## 📂 Estrutura do Projeto

```
/
├── cypress/
│   ├── e2e/               # Arquivos de teste (.cy.js)
│   ├── fixtures/          # Dados mockados (ex: usuários de teste)
│   └── support/           # Comandos e configurações globais
│       ├── commands.js    # Comandos customizados (ex: cy.login())
│       └── e2e.js         # Configurações globais
│
├── cypress.config.js      # Configuração principal do Cypress
└── package.json           # Dependências e scripts do projeto
```


## 🌐 Ambiente de Teste

**Staging:**
🔗 [https://paciente-staging.lacreisaude.com.br/](https://paciente-staging.lacreisaude.com.br/)


## 👨‍💻 Autor

**Felipe Vieira Barbosa** Software Quality Assurance [LinkedIn](https://www.linkedin.com/in/felipebarbosalds/?locale=pt_BR)


```
