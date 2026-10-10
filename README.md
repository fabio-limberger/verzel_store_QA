# Verzel Store - Automação de Testes E2E e API (QA Challenge)

Este repositório contém a suíte completa de automação de testes E2E, validações de API e documentação de cenários desenvolvida para a **Verzel Store** (versão 2.3.0), como parte do teste técnico do processo seletivo de QA da Verzel.

---

## Visão Geral do Projetos e Escopo

A aplicação sob teste é um e-commerce fictício disponível em:
👉 [Verzel Store Web App](https://verzel-store.qa-test-verzel-store.workers.dev/)

A suíte abrange **33 cenários de teste mapeados e executados** (100% de cobertura e taxa de aprovação), englobando:
- **Regras de Cupons de Desconto**: Aplicação, sensibilidade a maiúsculas/minúsculas, espaços e tratamento de cupons inválidos/expirados.
- **Cálculo de Frete**: Limiar de R$ 200,00 para frete grátis, regra de cálculo antes/depois do desconto de cupom e não incidência de desconto no frete.
- **Restrição de Quantidades**: Limites de 0 a 5 unidades por item via interface e requisições/API.
- **Validação de Checkout**: Validação de formulários (Nome/Sobrenome, formato de e-mail e regras de CEP com/sem hífen).
- **Testes de API**: Validação de requisições `GET` e `POST` para catalogação de produtos, cálculo do carrinho e confirmação de pedidos.

---

## Tecnologias Utilizadas

- **Linguagem**: JavaScript (Node.js)
- **Framework de Automação E2E**: [Playwright](https://playwright.dev/)
- **Test Runner & Asserções**: Playwright Test Runner
- **Documentação de BDD**: Gherkin / Cucumber (`.feature`)
- **Evidências de API**: HTTP API Client / Capturas de tela (`.png`)

---

## Estrutura do Repositório

```text
├── evidencias/                # Prints de execução e respostas das chamadas da API (CT-020 a CT-027)
├── features/                  # Especificação BDD em sintaxe Gherkin (cupom_e_frete.feature)
├── tests/                     # Código de automação E2E e testes de API com Playwright
│   └── verzel_store.spec.js   # Suíte completa com os cenários de teste
├── cenarios_de_teste.md       # Documentação estática dos 33 cenários detalhados (Entrada/Passos/Saída)
├── relatorio_de_execucao.md   # Relatório consolidado com a tabela de resultados (33/33 Aprovados)
├── playwright.config.js       # Configurações globais do Playwright
├── package.json               # Gerenciador de dependências do projeto
└── README.md                  # Instruções de instalação, execução e uso da IA

# Como Executar os Testes
Pré-requisitos

    Node.js (versão 18 ou superior) instalado na máquina.

    Git instalado.

1. Clonar o Repositório e Instalar Dependências
Bash

# Clonar este repositório
git clone [https://github.com/seu-usuario/verzel_store_QA.git](https://github.com/seu-usuario/verzel_store_QA.git)

# Entrar na pasta do projeto
cd verzel_store_QA

# Instalar as dependências do Node
npm install

# Instalar os navegadores do Playwright
npx playwright install chromium

2. Executar a Suíte de Testes

    Executar todos os testes E2E no modo Headed (com interface visual):
    Bash

    npx playwright test --project=chromium --headed

    Executar os testes no modo Headless (background):
    Bash

    npx playwright test

    Visualizar o Relatório Interativo do Playwright (HTML Report):
    Bash

    npx playwright show-report

# Uso de Inteligência Artificial (IA) no Processo

Conforme permitido no regulamento do teste técnico, a IA foi utilizada durante o desenvolvimento do projeto como um copiloto de QA, atuando nas seguintes etapas:

    Geração e Estruturação de Mapeamento: Auxílio no desdobramento das regras de negócio do cartão VZS-142 para a sintaxe BDD (Gherkin) e geração da matriz de cenários no cenarios_de_teste.md.

    Aceleração na Escrita dos Scripts de Automação: Suporte na elaboração das rotinas do Playwright focando em boas práticas, como utilização de locators acessíveis (getByRole, getByLabel) para evitar flaky tests.

    Análise de Falhas e Refatoração: Auxílio na investigação de timeouts (como no CT-012) e refatoração de seletores para otimizar o tempo total de execução da suíte para ~13.7s.

# Relatório de Resultados

O status de execução detalhado de cada um dos 33 cenários de teste encontra-se no ficheiro relatorio_de_execucao.md.

    Total Mapeado: 33

    Executados com Sucesso: 33 (100%)

    Falhas: 0