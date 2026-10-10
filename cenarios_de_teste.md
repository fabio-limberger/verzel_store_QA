# Cenario de Teste - Verzel Store

## Funcionalidade

Cupom de desconto e frete gratis

## Versao

2.3.0

## Card

VZS-142

## Status

Pronto para teste

---

## CT-001 - Aplicar cupom BEMVINDO10

### Objetivo

- Validar se o cupom BEMVINDO10 aplica corretamente os 10% de desconto sobre o subtotal dos produtos.

### Pré-Condições

- A loja deve esta disponivel
- O carrrinho deve esta acessivel.
- Deve existir pelo menos um produto disponivel

### Dados de teste

- Produto: P001 -  Camista Essencial
- Preço: R$ 59,90
- Quantidade: 1
- Cupom: BEMVINDO10

### Passos

1. Acessar a Verzel Store.
2. Adicionar a camista Essencial ao carrinho.
3. Acessar o carrinho.
4. Informar o cupom "BEMVINDO10".
5. Aplicar o cupom.
6. Verificar os valor apresentados no carrinho.

### Resultado esperado

- O cupom deve ser aplicado com sucesso.
- O subtotal deve ser R$ 59,90.
- O desconto deve ser de R$ 5,99.
- O total deve ser de R$ 73,81.
- Os valores devem ser apresentados com duas casas decimais.

---

## CT-002 - Aplicar cupom em letras minúsculas

### Objetivo

- Validar se o sistema não diferencia letras maiúsculas e minúsculas no código do cupom.

### Pré-condições

- A loja deve estar disponível.
- Deve existir um produto no carrinho.

### Dados de teste

- Produto: P001 - Camiseta Essencial
- Preço: R$ 59,90
- Quantidade: 1
- Cupom: 'bemvindo10'

### Passos

1. Acessar a Verzel Store.
2. Adicionar a Camiseta Essecial ao carrinho.
3. Acessar o carrinho.
4. Informar o cupom 'bemvindo10'.
5. Aplicar o cupom.
6. Verificar o resultado.

### Resultado esperado

- O cupom deve ser aceito.
- Deve ser aplicado desconto de 10% sobre o subtotal.
- O desconto deve ser de R$ 5,99.
- Nenhuma mensagem de cupom inválido deve ser exibida.

---

## CT-003 - Aplicar cupom com espaços no início e no fim

### Objetivo

- Validar se o sistema ignora espaços antes e depois do código do cupom.

### Pré-condições

- A loja deve estar disponível.
- Deve existir um produto no carrinho.

### Dados de teste

- Produto: P001 - Camiseta Essencial
- Preço: R$59,90
- Quantidade: 1
- Cupom: ' BEMVINDO10 '

### Passos

1. Acessar a Verzel Store
2. Adicionar a Camiseta Essencial ao carrinho.
3. Acessar o carrinho
4. Informar ' BEMVINDO10 ' no campo de cupom.
5. Aplicar o cupom.
6. Verificar o resultado.

### Resultado esperado

- O cupom deve ser aceito.
- Deve ser aplicado desconto de 10%.
- O desconto deve ser de R$ 5,99.
- O sistema deve ignorar os espaços no início e no fim.

---

## CT-004 - Aplicar cupom inexistente

### Objetivo

- Validar o comportamento do sistema quando o cliente informa um cupom que não existe.

### Pré-condições

- A loja deve estar disponível.
- Deve existir um produto no carrinho.

### Dados do teste

- Produto: P001 - Camiseta Essencial
- Quantidade: 1
- Cupom: 'CUPOM123'

### Passos

1. Acessar a Verzel Store.
2. Adicionar a Camiseta Essencial ao carrinho.
3. Acessar o carrinho.
4. Informar o cupom 'CUPOM123'
5. Aplicar o cupom.
6. Verificar a mensagem apresentada.
7. Verifiacr o valor do desconto.

### Resultado esperado

- Deve ser exibida a mensagem 'Cupom inválido'
- Nenhum descontro deve ser aplicado
- O desconto deve permanecer em R$ 0,00.

---

## CT-005 - Aplicar cupom expirado

### Objetivo

- Validar o comportamento do sistema quando o cliente informa um cupom fora da validade.

### Pré-condições

- A loja deve estar disponível.
- Deve existir um produto no carrinho.

### Dados de teste

- Produto: P001 — Camiseta Essencial
- Quantidade: 1
- Cupom: `VERAO2026`

### Passos

1. Acessar a Verzel Store.
2. Adicionar a Camiseta Essencial ao carrinho.
3. Acessar o carrinho.
4. Informar o cupom `VERAO2026`.
5. Aplicar o cupom.
6. Verificar a mensagem apresentada.
7. Verificar o valor do desconto.

### Resultado esperado

- Deve ser exibida a mensagem `Cupom expirado.`.
- Nenhum desconto deve ser aplicado.
- O desconto deve permanecer em R$ 0,00.

---

## CT-006 - Cobrar frete para subtotal de R$ 200,00

### Objetivo

- Validar se o sistema cobra o frete fixo de R$ 19,90 quando o subtotal dos produtos é inferior a R$ 200,00

### Pré-condições

- A loja deve estar disponível.
- O carrinho deve esta acessível.
- Não deve haver cupom aplicado.

### Dados de teste

- Produto: P001 - Camiseta Essencial
- Preço unitário: R$ 59,90
- Quantidade: 1
- Cupom: Nenhum

### Passos

1. Acessar a Verzel Store.
2. Adicionar a Camiseta Essencial no carrinho.
3. Acessar o carrinho.
4. Veirificar o substotal dos produtos.
5. Verificar o valor do frete.
6. Verificar a informação sobre quanto falta para obter frete grátis.

### Resultado esperado

- O subtotal deve ser R$ 59,90.
- O frete deve ser R$ 19,90.
- O frete grátis não deve ser aplicado.
- O sistema deve informar que faltam R$ 140,10 para obster frete grátis.
- O total do pedido deve ser R$ 79,80

---

## CT-007 - Frete grátis exatamente em R$ 200,00

### Objetivo

- A loja deve estar disponível.
- O carrinho deve estar acessível.
- Não deve haver cupom aplicado.

### Dados de teste

- Produto 1: P005 — Mochila Urbana 20L
- Preço unitário: R$ 100,00
- Quantidade: 1
- Produto 2: P008 — Garrafa Térmica 750ml
- Preço unitário: R$ 50,00
- Quantidade: 2
- Cupom: Nenhum

### Passos

1. Acessar a Verzel Store.
2. Adicionar uma Mochila Urbana 20L ao carrinho.
3. Adicionar duas Garrafas Térmicas 750ml ao carrinho.
4. Acessar o carrinho.
5. Verificar o subtotal dos produtos.
6. Verificar o valor do frete.

### Resultado esperado

O subtotal deve ser R$ 200,00.
O frete deve ser R$ 0,00.
O frete grátis deve ser aplicado.
O valor faltante para frete grátis deve ser R$ 0,00.
O total do pedido deve ser R$ 200,00.

---

## CT-008 - Aplicar frete grátis com subtotal acima de R$ 200,00

### Objetivo

- Validar se o sistema concede frete grátis quando o subtotal dos produtos é superior a R$ 200,00.

### Pré-condições

- A loja deve estar disponível.
- O carrinho deve estar acessível.
- Não deve haver cupom aplicado.

### Dados de teste

- Produto: P003 — Tênis Casual Urbano
- Preço unitário: R$ 189,90
- Quantidade: 2
- Cupom: Nenhum

### Passos

1. Acessar a Verzel Store.
2. Adicionar dois pares de Tênis Casual Urbano ao carrinho.
3. Acessar o carrinho.
4. Verificar o subtotal dos produtos.
5. Verificar o valor do frete.
6. Verificar o total do pedido.

### Resultado esperado

- O subtotal deve ser R$ 379,80.
- O frete deve ser R$ 0,00.
- O frete grátis deve ser aplicado.
- O valor faltante para frete grátis deve ser R$ 0,00.
- O total do pedido deve ser R$ 379,80.

---

## CT-009 - Calcular frete grátis antes do desconto do cupom

### Objetivo

- Validar se a regra de frete grátis considera o subtotal dos produtos antes da aplicação do desconto do cupom.

### Pré-condições

- A loja deve estar disponível.
- O carrinho deve estar acessível.
- O cupom BEMVINDO10 deve estar válido.

### Dados de teste

- Produto 1: P005 — Mochila Urbana 20L
- Preço unitário: R$ 100,00
- Quantidade: 1
- Produto 2: P008 — Garrafa Térmica 750ml
- Preço unitário: R$ 50,00
- Quantidade: 2
- Cupom: BEMVINDO10

### Passos

1. Acessar a Verzel Store.
3. Adicionar uma Mochila Urbana 20L ao carrinho.
4. Adicionar duas Garrafas Térmicas 750ml ao carrinho.
5. Acessar o carrinho.
6. Aplicar o cupom BEMVINDO10.
7. Verificar o subtotal dos produtos.
8. Verificar o desconto aplicado.
9. Verificar o valor do frete.
10. Verificar o total do pedido.

### Resultado esperado

- O subtotal deve ser R$ 200,00.
- O desconto deve ser de R$ 20,00.
- O frete deve ser R$ 0,00.
- O frete grátis deve ser aplicado com base no subtotal anterior ao desconto.
- O valor faltante para frete grátis deve ser R$ 0,00.
- O total do pedido deve ser R$ 180,00.

---

## CT-010 - Não aplicar desconto sobre o frete

### Objetivo

- Validar se o desconto do cupom é aplicado somente sobre o subtotal dos produtos, sem reduzir o valor do frete.

### Pré-condições

- A loja deve estar disponível.
- O carrinho deve estar acessível.
- O cupom BEMVINDO10 deve estar válido.

### Dados de teste

- Produto: P001 - Ca miseta Essencial
- Preço unitário: R$ 59,90
- Quantidade: 1
- Cupom: BEMVINDO10

### Passos

1. Acessar a Verzel Store.
2. Adicionar a Camiseta Essencial ao carrinho.
3. Acessar o carrinho.
4. Aplicar o cupom BEMVINDO10.
5. Verificar o subtotal.
6. Verificar o desconto.
7. Verificar o frete.
8. Verificar o total do pedido.

### Resultado esperado

- O subtotal deve ser R$ 59,90.
- O desconto deve ser de R$ 5,99.
- O frete deve permanecer em R$ 19,90.
- O desconto não deve incidir sobre o frete.
- O total do pedido deve ser R$ 73,81.

---

## CT-011  Adicionar exatamente 5 unidades do mesmo produto

### Objetivo

- Validar se o sistema permite adicionar até 5 unidades do mesmo produto ao carrinho.

### Pré-condições

- A loja deve estar disponível.
- O carrinho deve estar acessível.

### Dados de teste

- Produto: P001 — Camiseta Essencial
- Preço unitário: R$ 59,90
- Quantidade: 5
- Cupom: Nenhum

### Passos

1. Acessar a Verzel Store.
2. Localizar a Camiseta Essencial.
3. Adicionar 5 unidades do produto ao carrinho.
4. Acessar o carrinho.
5. Verificar a quantidade do produto.
6. Verificar o subtotal.

### Resultado esperado

- O sistema deve permitir a inclusão de 5 unidades.
- A quantidade exibida deve ser 5.
- O subtotal deve ser R$ 299,50.
- O sistema não deve apresentar erro de quantidade máxima excedida.

---

## CT-012 - Impedir mais de 5 unidades pela interface

### Objetivo

- Validar se a interface impede que o cliente adicione mais de 5 unidades do mesmo produto ao pedido.

### Pré-condições

- A loja deve estar disponível.
- O carrinho deve estar acessível.

### Dados de teste

- Produto: P001 — Camiseta Essencial
- Preço unitário: R$ 59,90
- Quantidade solicitada: 6
- Quantidade máxima permitida: 5

### Passos

1. Acessar a Verzel Store.
2. Localizar a Camiseta Essencial.
3. Tentar adicionar 6 unidades do produto ao carrinho.
4. Acessar o carrinho.
5. Verificar a quantidade registrada.
6. Verificar se o sistema apresenta alguma mensagem de validação.

### Resultado esperado

- O sistema não deve permitir mais de 5 unidades do mesmo produto no pedido.
- A quantidade não deve ultrapassar 5.
- A interface deve impedir o excesso ou informar que a quantidade máxima foi atingida.
- O sistema não deve confirmar um pedido contendo 6 unidades desse produto.

---

## CT-013 - Impedir mais de 5 unidades pela API

### Objetivo

- Validar se a API rejeita uma requisição de pedido que contenha mais de 5 unidades do mesmo produto.

### Pré-condições

- A API da Verzel Store deve estar disponível.
- A rota /api/pedidos deve estar acessível.

### Dados de teste

- Método HTTP: POST
- Endpoint: /api/pedidos
- Produto: P001 — Camiseta Essencial
- Quantidade: 6
- Nome do cliente: Maria Silva
- E-mail: maria@exemplo.com
- CEP: 01310-100

### Passos

1. Preparar uma requisição POST para /api/pedidos.
2. Informar os dados válidos do cliente.
3. Enviar o produto P001 com quantidade 6.
4. Enviar a requisição com o cabeçalho Content-Type: application/json.
5. Verificar o código HTTP da resposta.
6. Verificar o código e a mensagem de erro retornados pela API.

### Resultado esperado

- A API deve rejeitar o pedido.
- O código HTTP deve ser 422.
- O código de erro deve ser QUANTIDADE_MAXIMA_EXCEDIDA.
- A resposta deve informar que a quantidade máxima permitida foi ultrapassada.
- O pedido não deve ser confirmado.

---

## CT-014 - Rejeitar quantidade igual a zero pela API

### Objetivo

- Validar se a API rejeita itens com quantidade igual a zero.

### Pré-condições

- A API da Verzel Store deve estar disponível.

### Dados de teste

- Método HTTP: POST
- Endpoint: /api/pedidos
- Produto: P001 — Camiseta Essencial
- Quantidade: 0
- Cliente: dados válidos

### Passos

1. Preparar uma requisição POST para /api/pedidos.
2. Informar os dados válidos do cliente.
3. Enviar o produto P001 com quantidade 0.
4. Verificar o código HTTP da resposta.
5. Verificar o código de erro retornado.

### Resultado esperado

- A API deve rejeitar a requisição.
- O código HTTP deve ser 422.
- O código de erro deve ser QUANTIDADE_INVALIDA.
- O pedido não deve ser confirmado.

---

## CT-015 - Rejeitar nome sem sobrenome

### Objetivo

- Validar se o sistema impede a confirmação do pedido quando o cliente informa apenas o primeiro nome.

### Pré-condições

- A loja deve estar disponível.
- Deve existir pelo menos um produto no carrinho.

### Dados de teste

- Nome: Maria
- E-mail: maria@exemplo.com
- CEP: 01310-100
- Produto: P001 — Camiseta Essencial
- Quantidade: 1

### Passos

1. Acessar a Verzel Store.
2. Adicionar a Camiseta Essencial ao carrinho.
3. Iniciar o processo de finalização do pedido.
4. Preencher o nome com Maria.
5. Informar um e-mail válido.
6. Informar um CEP válido.
7. Tentar confirmar o pedido.
8. Verificar a validação apresentada.

### Resultado esperado

- O pedido não deve ser confirmado.
- O sistema deve rejeitar o nome que não contém nome e sobrenome.
- Deve ser apresentada uma indicação de que o nome informado é inválido.

---

## CT-016 - Rejeitar e-mail inválido

### Objetivo

- Validar se o sistema impede a confirmação do pedido quando o e-mail informado não possui um formato válido.

### Pré-condições

- A loja deve estar disponível.
- Deve existir pelo menos um produto no carrinho.

### Dados de teste
- Nome: Maria Silva
- E-mail: maria@
- CEP: 01310-100
- Produto: P001 — Camiseta Essencial
- Quantidade: 1

### Passos
1. Acessar a Verzel Store.
2. Adicionar a Camiseta Essencial ao carrinho.
3. Iniciar o processo de finalização do pedido.
4. Informar o nome Maria Silva.
5. Informar o e-mail maria@.
6. Informar o CEP 01310-100.
7. Tentar confirmar o pedido.
8. Verificar a validação apresentada.

### Resultado esperado
- O pedido não deve ser confirmado.
- O sistema deve rejeitar o e-mail inválido.
- Deve ser apresentada uma indicação de que o e-mail precisa ter um formato válido.

----

## CT-017 - Rejeitar CEP com menos de 8 dígitos

### Objetivo

Validar se o sistema rejeita CEPs que não possuem exatamente 8 dígitos numéricos.

### Pré-condições

- A loja deve estar disponível.
- Deve existir pelo menos um produto no carrinho.
- Dados de teste
- Nome: Maria Silva
- E-mail: maria@exemplo.com
- CEP: 01310-10
- Produto: P001 — Camiseta Essencial
- Quantidade: 1

### Passos

1. Acessar a Verzel Store.
2. Adicionar a Camiseta Essencial ao carrinho.
3. Iniciar o processo de finalização do pedido.
4. Informar o nome Maria Silva.
5. Informar o e-mail maria@exemplo.com.
6. Informar o CEP 01310-10.
7. Tentar confirmar o pedido.
8. Verificar a validação apresentada.

### Resultado esperado

- O pedido não deve ser confirmado.
- O sistema deve rejeitar o CEP que possui menos de 8 dígitos.
- Deve ser apresentada uma indicação de que o CEP é inválido.

---

## CT-018 - Aceitar CEP válido com hífen

### Objetivo

- Validar se o sistema aceita um CEP com 8 dígitos numéricos separados por hífen.

### Pré-condições

- A loja deve estar disponível.
- Deve existir pelo menos um produto no carrinho.
- Dados de teste
- Nome: Maria Silva
- E-mail: maria@exemplo.com
- CEP: 01310-100
- Produto: P001 — Camiseta Essencial
- Quantidade: 1
- Cupom: Nenhum

### Passos

1. Acessar a Verzel Store.
2. Adicionar a Camiseta Essencial ao carrinho.
3. Iniciar o processo de finalização do pedido.
4. Informar o nome Maria Silva.
5. Informar o e-mail maria@exemplo.com.
6. Informar o CEP 01310-100.
7. Confirmar o pedido.
8. Verificar a resposta da confirmação.

### Resultado esperado

- O CEP deve ser aceito.
- Os dados válidos do cliente devem passar pela validação.
- O pedido deve ser confirmado se não houver outros erros.
- Na resposta da API, o CEP deve ser normalizado para 01310100, sem hífen.

---

## CT-019 - Aceitar CEP válido sem hífen

### Objetivo

- Validar se o sistema aceita um CEP com 8 dígitos numéricos sem separadores.

### Pré-condições

- A loja deve estar disponível.
- Deve existir pelo menos um produto no carrinho.

### Dados de teste

- Nome: Maria Silva
- E-mail: maria@exemplo.com
- CEP: 01310100
- Produto: P001 — Camiseta Essencial
- Quantidade: 1
- Cupom: Nenhum

### Passos

1. Acessar a Verzel Store.
2. Adicionar a Camiseta Essencial ao carrinho.
3. Iniciar o processo de finalização do pedido.
4. Informar o nome Maria Silva.
5. Informar o e-mail maria@exemplo.com.
6. Informar o CEP 01310100.
7. Confirmar o pedido.
8. Verificar a resposta da confirmação.

### Resultado esperado

- O CEP deve ser aceito.
- Os dados válidos do cliente devem passar pela validação.
- O pedido deve ser confirmado se não houver outros erros.
- O CEP deve continuar representado com os 8 dígitos, sem hífen.

## CT-020 - Listar produtos pela API

### Objetivo

- Validar se a API retorna a lista de produtos cadastrados na Verzel Store.

### Pré-condições

- A API da Verzel Store deve estar disponível.
- Dados de teste
- Método HTTP: GET
- Endpoint: /api/produtos
- Corpo da requisição: Não se aplica.

### Passos

1. Abrir o Postman.
2. Criar uma nova requisição HTTP.
3. Selecionar o método GET.
4. Informar a URL da loja seguida de /api/produtos.
5. Enviar a requisição.
6. Verificar o código HTTP da resposta.
7. Verificar a estrutura e os dados dos produtos retornados.

### Resultado esperado

- A API deve responder com o código HTTP 200.
- A resposta deve conter uma lista de produtos.
- Cada produto deve apresentar os campos id, nome, descricao, categoria e preco.
- Os produtos devem apresentar os dados e preços definidos para o ambiente de teste.

---

## CT-021 - Consultar produto existente pela API

### Objetivo

- Validar se a API retorna os dados de um produto quando é informado um identificador existente.

### Pré-condições

- A API da Verzel Store deve estar disponível.
- O produto P001 deve existir no catálogo.

### Dados de teste

- Método HTTP: GET
- Endpoint: /api/produtos/P001
- Produto: P001 — Camiseta Essencial

### Passos

1. Abrir o Postman.
2. Criar uma nova requisição HTTP.
3. Selecionar o método GET.
4. Informar a URL da loja seguida de /api/produtos/P001.
5. Enviar a requisição.
6. Verificar o código HTTP da resposta.
7. Conferir os dados do produto retornado.

### Resultado esperado

- A API deve responder com o código HTTP 200.
- O identificador deve ser P001.
- O nome deve ser Camiseta Essencial.
- O preço deve ser 59.90.
- A resposta deve conter os dados do produto consultado.

---

## CT-022 - Consultar produto inexistente pela API

### Objetivo

- Validar se a API retorna um erro adequado quando o identificador do produto não existe.

### Pré-condições

- A API da Verzel Store deve estar disponível.

### Dados de teste

- Método HTTP: GET
- Endpoint: /api/produtos/INVALIDO
- Identificador: INVALIDO

### Passos

1. Abrir o Postman.
2. Criar uma nova requisição HTTP.
3. Selecionar o método GET.
4. Informar a URL da loja seguida de /api/produtos/INVALIDO.
5. Enviar a requisição.
6. Verificar o código HTTP da resposta.
7. Conferir o conteúdo da mensagem de erro.

### Resultado esperado

- A API deve responder com o código HTTP 404.
- A resposta deve indicar que o produto não foi encontrado.
- A API não deve retornar os dados de outro produto.

---

## CT-023 - Calcular carrinho sem cupom pela API

### Objetivo

- Validar se a API calcula corretamente o subtotal, o frete e o total do carrinho quando nenhum cupom é informado.

### Pré-condições

- A API da Verzel Store deve estar disponível.
- Os produtos P002 e P004 devem existir no catálogo.

### Dados de teste

- Método HTTP: POST
- Endpoint: /api/carrinho/calcular
- Produto 1: P002 — Calça Jeans Slim
- Quantidade do produto 1: 1
- Produto 2: P004 — Boné Aba Curva
- Quantidade do produto 2: 1
- Cupom: Não informado

### Corpo da requisição

{
  "itens": [
    {
      "produtoId": "P002",
      "quantidade": 1
    },
    {
      "produtoId": "P004",
      "quantidade": 1
    }
  ]
}

### Passos

1. Abrir o Postman.
2. Criar uma nova requisição HTTP.
3. Selecionar o método POST.
4. Informar a URL da loja seguida de /api/carrinho/calcular.
5. Configurar o cabeçalho Content-Type: application/json.
6. Selecionar o formato JSON no corpo da requisição.
7. Informar os dados de teste.
8. Enviar a requisição.
9. Verificar o código HTTP e os valores retornados.

### Resultado esperado

- A API deve responder com o código HTTP 200.
- O subtotal deve ser R$ 189,80.
- O desconto deve ser R$ 0,00.
- O frete deve ser R$ 19,90.
- O frete grátis não deve ser aplicado.
- O valor faltante para frete grátis deve ser R$ 10,20.
- O total deve ser R$ 209,70.
- A resposta deve apresentar os dados dos dois produtos.

---

## CT-024 - Calcular carrinho com cupom válido pela API

### Objetivo

- Validar se a API aplica o desconto de 10% do cupom BEMVINDO10 sobre o subtotal dos produtos.

### Pré-condições

- A API da Verzel Store deve estar disponível.
- Os produtos P002 e P004 devem existir no catálogo.
- O cupom BEMVINDO10 deve estar válido.

### Dados de teste

- Método HTTP: POST
- Endpoint: /api/carrinho/calcular
- Produto 1: P002 — Calça Jeans Slim
- Quantidade do produto 1: 1
- Produto 2: P004 — Boné Aba Curva
- Quantidade do produto 2: 1
- Cupom: BEMVINDO10

### Corpo da requisição

{
  "itens": [
    {
      "produtoId": "P002",
      "quantidade": 1
    },
    {
      "produtoId": "P004",
      "quantidade": 1
    }
  ],
  "cupom": "BEMVINDO10"
}

### Passos

1. Preparar a requisição POST para /api/carrinho/calcular.
2. Configurar o cabeçalho Content-Type: application/json.
3. Informar os produtos, as quantidades e o cupom.
4. Enviar a requisição.
5. Verificar o código HTTP da resposta.
6. Conferir o subtotal, o desconto, o frete e o total.
7. Verificar a situação e a mensagem do cupom.

### Resultado esperado

- A API deve responder com o código HTTP 200.
- O subtotal deve ser R$ 189,80.
- O desconto deve ser R$ 18,98.
- O frete deve ser R$ 19,90.
- O frete grátis não deve ser aplicado.
- O valor faltante para frete grátis deve ser R$ 10,20.
- O total deve ser R$ 190,72.
- O campo cupom.aplicado deve ser true.
- A mensagem deve informar que o cupom foi aplicado com desconto de 10% nos produtos.

---

## CT-025 - Calcular carrinho com cupom inexistente pela API

### Objetivo

- Validar se a API rejeita o cupom inexistente sem aplicar desconto e retorna a mensagem correspondente.

### Pré-condições

- A API da Verzel Store deve estar disponível.
- O produto P001 deve existir no catálogo.

### Dados de teste

- Método HTTP: POST
- Endpoint: /api/carrinho/calcular
- Produto: P001 — Camiseta Essencial
- Quantidade: 1
- Cupom: CUPOM123

### Corpo da requisição

{
  "itens": [
    {
      "produtoId": "P001",
      "quantidade": 1
    }
  ],
  "cupom": "CUPOM123"
}

### Passos

1. Preparar a requisição POST para /api/carrinho/calcular.
2. Configurar o cabeçalho Content-Type: application/json.
3. Informar o produto, a quantidade e o cupom inexistente.
4. Enviar a requisição.
5. Verificar o código HTTP da resposta.
6. Conferir o desconto e a mensagem retornada em cupom.mensagem.

### Resultado esperado

- A API deve responder com o código HTTP 200.
- O subtotal deve ser R$ 59,90.
- O desconto deve ser R$ 0,00.
- O frete deve ser R$ 19,90.
- O total deve ser R$ 79,80.
- O campo cupom.aplicado deve ser false.
- O campo cupom.mensagem deve apresentar Cupom inválido.

---

## CT-026 - Calcular carrinho com cupom expirado pela API

### Objetivo

- Validar se a API identifica um cupom expirado, não aplica desconto e retorna a mensagem correspondente.

### Pré-condições

- A API da Verzel Store deve estar disponível.
- O produto P001 deve existir no catálogo.
- O cupom VERÃO2026 está expirado conforme a documentação.

### Dados de teste

- Método HTTP: POST
- Endpoint: /api/carrinho/calcular
- Produto: P001 — Camiseta Essencial
- Quantidade: 1
- Cupom: VERAO2026

### Corpo da requisição

{
  "itens": [
    {
      "produtoId": "P001",
      "quantidade": 1
    }
  ],
  "cupom": "VERAO2026"
}

### Passos

1. Preparar a requisição POST para /api/carrinho/calcular.
2. Configurar o cabeçalho Content-Type: application/json.
3. Informar o produto, a quantidade e o cupom expirado.
4. Enviar a requisição.
5. Verificar o código HTTP da resposta.
6. Conferir o desconto e a mensagem retornada em cupom.mensagem.

### Resultado esperado

- A API deve responder com o código HTTP 200.
- O subtotal deve ser R$ 59,90.
- O desconto deve ser R$ 0,00.
- O frete deve ser R$ 19,90.
- O total deve ser R$ 79,80.
- O campo cupom.aplicado deve ser false.
- O campo cupom.mensagem deve apresentar Cupom expirado.

---

## Testes de confirmação de pedidos — POST /api/pedidos

## CT-027  Confirmar pedido válido

### Objetivo: 
- Verificar se a API confirma um pedido com dados válidos.

### Requisição: 
- POST /api/pedidos

### Dados de entrada: 
- Cliente válido, produtos existentes, quantidades válidas e cupom válido, quando aplicável.

### Resultado esperado: 

- Pedido confirmado, com os dados e valores calculados corretamente, conforme a especificação da API.

### Status HTTP esperado: 
- Confirmar na especificação.

---

## CT-028 - Confirmar pedido com dados inválidos do cliente

### Objetivo:
- Verificar a validação dos dados do cliente durante a confirmação do pedido.

### Requisição: 
- POST /api/pedidos

### Dados de entrada: 
- Pedido contendo dados obrigatórios do cliente ausentes ou inválidos.

### Resultado esperado:
- A API rejeita o pedido e informa os erros de validação.

### Status HTTP esperado: 
- Confirmar na especificação.

---

## CT-029 - Confirmar pedido com produto ou quantidade inválida

### Objetivo: 
- Verificar a validação dos produtos e das quantidades informadas.

### Requisição:
- POST /api/pedidos

### Dados de entrada: 
- Pedido com identificador de produto inexistente ou quantidade inválida.

### Resultado esperado:
- A API rejeita o pedido e informa o problema encontrado.

### Status HTTP esperado:
- confirmar na especificação.

---

## CT-030 - Confirmar pedido com cupom inválido ou expirado

### Objetivo:
- Verificar a validação do cupom durante a confirmação do pedido.

### Requisição:
- POST /api/pedidos

### Dados de entrada:
- Pedido com cupom inválido ou expirado.

### Resultado esperado: 
- A API rejeita o pedido e informa o problema com o cupom.

### Status HTTP esperado:

- HTTP 422, conforme a especificação apresentada anteriormente.