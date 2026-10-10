# language: pt
Funcionalidade: Cupom de desconto e frete grátis na Verzel Store
  Como cliente da Verzel Store
  Quero aplicar cupons de desconto e obter frete grátis
  Para pagar menos em minhas compras

    # ============================================================================
    # REGRAS DE CUPOM DE DESCONTO (INTERFACE E API)
    # ============================================================================

  Cenário: CT-001 - Aplicar cupom BEMVINDO10 válido
    Dado que existe o produto "Camiseta Essencial" no valor de R$ 59,90 no carrinho
    Quando aplico o cupom "BEMVINDO10"
    Então o cupom deve ser aplicado com sucesso
    E o subtotal deve ser de R$ 59,90
    E o desconto deve ser de R$ 5,99
    E o frete deve ser de R$ 19,90
    E o total do pedido deve ser de R$ 73,81

  Cenário: CT-002 - Aplicar cupom em letras minúsculas
    Dado que existe o produto "Camiseta Essencial" no carrinho
    Quando aplico o cupom "bemvindo10"
    Então o cupom deve ser aplicado com sucesso
    E deve ser concedido 10% de desconto sobre o subtotal
    E nenhuma mensagem de erro deve ser exibida

  Cenário: CT-003 - Aplicar cupom com espaços no início e no fim
    Dado que existe o produto "Camiseta Essencial" no carrinho
    Quando aplico o cupom " BEMVINDO10 "
    Então o sistema deve ignorar os espaços no início e no fim
    E o cupom deve ser aplicado com sucesso com 10% de desconto

  Cenário: CT-004 - Aplicar cupom inexistente
    Dado que existe um produto no carrinho
    Quando aplico o cupom "CUPOM123"
    Então deve ser exibida a mensagem "Cupom inválido."
    E nenhum desconto deve ser aplicado

  Cenário: CT-005 - Aplicar cupom expirado
    Dado que existe um produto no carrinho
    Quando aplico o cupom "VERAO2026"
    Then deve ser exibida a mensagem "Cupom expirado."
    And nenhum desconto deve ser aplicado

  # ============================================================================
  # REGRAS DE FRETE GRÁTIS E FRETE FIXO
  # ============================================================================

  Cenário: CT-006 - Cobrar frete fixo para subtotal menor que R$ 200,00
    Dado que o carrinho contém 1 "Camiseta Essencial" no valor de R$ 59,90
    E não há cupom aplicado
    Quando visualizo o resumo do carrinho
    Então o subtotal deve ser de R$ 59,90
    E o valor do frete deve ser R$ 19,90
    E o sistema deve informar que faltam R$ 140,10 para obter frete grátis
    E o total do pedido deve ser de R$ 79,80

  Cenário: CT-007 - Aplicar frete grátis com subtotal exatamente em R$ 200,00
    Dado que adiciono 1 "Mochila Urbana 20L" (R$ 100,00) ao carrinho
    E adiciono 2 "Garrafa Térmica 750ml" (R$ 50,00 cada) ao carrinho
    Quando visualizo o resumo do carrinho
    Então o subtotal deve ser de R$ 200,00
    E o valor do frete deve ser R$ 0,00
    E o valor faltante para frete grátis deve ser R$ 0,00
    E o total do pedido deve ser de R$ 200,00

  Cenário: CT-008 - Aplicar frete grátis com subtotal acima de R$ 200,00
    Dado que adiciono 2 "Tênis Casual Urbano" (R$ 189,90 cada) ao carrinho
    Quando visualizo o resumo do carrinho
    Então o subtotal deve ser de R$ 379,80
    E o frete grátis deve ser aplicado com valor de R$ 0,00
    E o total do pedido deve ser de R$ 379,80

  Cenário: CT-009 - Calcular frete grátis considerando o subtotal antes do desconto do cupom
    Dado que o carrinho possui um subtotal de R$ 200,00
    Quando aplico o cupom "BEMVINDO10"
    Então o desconto aplicado deve ser de R$ 20,00
    E o frete deve continuar sendo R$ 0,00 (frete grátis)
    E o total final do pedido deve ser de R$ 180,00

  Cenário: CT-010 - Garantir que o desconto do cupom não incide sobre o frete
    Dado que o carrinho contém 1 "Camiseta Essencial" de R$ 59,90
    E o valor do frete é de R$ 19,90
    Quando aplico o cupom "BEMVINDO10"
    Então o desconto de 10% deve incidir apenas sobre o subtotal dos produtos (R$ 5,99)
    E o valor do frete deve permanecer em R$ 19,90
    E o total deve ser de R$ 73,81

  # ============================================================================
  # LIMITES DE QUANTIDADE DE PRODUTOS
  # ============================================================================

  Cenário: CT-011 - Permitir até 5 unidades do mesmo produto no carrinho
    Dado que estou na página do produto "Camiseta Essencial"
    Quando seleciono a quantidade 5 e adiciono ao carrinho
    Então a quantidade deve ser registrada como 5 no carrinho
    E o subtotal deve ser calculado em R$ 299,50

  Cenário: CT-012 - Impedir mais de 5 unidades pela interface
    Dado que estou na página do produto "Camiseta Essencial"
    Quando tento adicionar 6 unidades do mesmo produto
    Então a interface deve impedir a inclusão ou exibir uma mensagem de limite atingido
    E a quantidade no carrinho não deve ultrapassar 5 unidades

  Esquema do Cenario: CT-013 e CT-014 - Validação de limite de quantidade pela API
    Dado que preparo uma requisição POST para "/api/pedidos"
    Quando envio o produto "P001" com a quantidade <quantidade>
    Então a API deve responder com o código HTTP 422
    E o código de erro retornado deve ser "<codigo_erro>"

    Exemplos:
      | quantidade | codigo_erro              |
      | 6          | QUANTIDADE_MAXIMA_EXCEDIDA|
      | 0          | QUANTIDADE_INVALIDA      |

  # ============================================================================
  # VALIDAÇÕES DE DADOS DO CLIENTE (CHECKOUT)
  # ============================================================================

  Cenário: CT-015 - Rejeitar nome do cliente sem sobrenome
    Dado que possuo itens no carrinho
    Quando tento finalizar o pedido informando o nome "Maria"
    Então o pedido não deve ser confirmado
    E deve ser exibida uma validação indicando que é necessário nome e sobrenome

  Cenário: CT-016 - Rejeitar e-mail em formato inválido
    Dado que possuo itens no carrinho
    Quando tento finalizar o pedido informando o e-mail "maria@"
    Então o pedido não deve ser confirmado
    E deve ser exibida uma validação de e-mail inválido

  Cenário: CT-017 - Rejeitar CEP com menos de 8 dígitos
    Dado que possuo itens no carrinho
    Quando tento finalizar o pedido informando o CEP "01310-10"
    Então o pedido não deve ser confirmado
    E deve ser exibida uma mensagem de CEP inválido

  Esquema do Cenario: CT-018 e CT-019 - Aceitar CEP válido com e sem hífen
    Dado que informo o nome "Maria Silva", e-mail "maria@exemplo.com" e o CEP "<cep_entrada>"
    Quando confirmo o pedido
    Então o CEP deve ser aceito
    E na resposta da API o CEP deve ser exibido como "<cep_esperado>"

    Exemplos:
      | cep_entrada | cep_esperado |
      | 01310-100   | 01310100     |
      | 01310100    | 01310100     |

  # ============================================================================
  # TESTES DA API (GET /api/produtos E POST /api/carrinho/calcular)
  # ============================================================================

  Cenário: CT-020 - Listar todos os produtos cadastrados pela API
    Quando envio uma requisição GET para "/api/produtos"
    Então a API deve responder com o código HTTP 200
    E deve retornar uma lista contendo os produtos com id, nome, descricao, categoria e preco

  Cenário: CT-021 - Consultar um produto existente pelo ID na API
    Quando envio uma requisição GET para "/api/produtos/P001"
    Então a API deve responder com o código HTTP 200
    E o produto retornado deve ser "Camiseta Essencial" com preço 59.90

  Cenário: CT-022 - Consultar produto inexistente na API
    Quando envio uma requisição GET para "/api/produtos/INVALIDO"
    Então a API deve responder com o código HTTP 404
    E a mensagem de erro deve indicar que o produto não foi encontrado

  Cenário: CT-023 - Calcular carrinho via API sem informar cupom
    Quando envio uma requisição POST para "/api/carrinho/calcular" com os itens:
      | produtoId | quantidade |
      | P002      | 1          |
      | P004      | 1          |
    Então a API deve responder com o código HTTP 200
    E os valores retornado devem ser:
      | subtotal | desconto | frete | freteGratis | valorFaltanteFreteGratis | total  |
      | 189.80   | 0.00     | 19.90 | false       | 10.20                    | 209.70 |

  Cenário: CT-024 - Calcular carrinho via API com cupom BEMVINDO10
    Quando envio uma requisição POST para "/api/carrinho/calcular" com o cupom "BEMVINDO10" e os itens:
      | produtoId | quantidade |
      | P002      | 1          |
      | P004      | 1          |
    Então a API deve responder com o código HTTP 200
    E o subtotal deve ser 189.80, o desconto 18.98, o frete 19.90 e o total 190.72
    E o campo "cupom.aplicado" deve ser true

  Cenário: CT-025 - Calcular carrinho via API com cupom inexistente
    Quando envio uma requisição POST para "/api/carrinho/calcular" com o cupom "CUPOM123" para o produto "P001"
    Então a API deve responder com o código HTTP 200
    E o desconto deve ser 0.00
    E o campo "cupom.aplicado" deve ser false
    E a mensagem em "cupom.mensagem" deve ser "Cupom inválido."

  Cenário: CT-026 - Calcular carrinho via API com cupom expirado
    Quando envio uma requisição POST para "/api/carrinho/calcular" com o cupom "VERAO2026" para o produto "P001"
    Então a API deve responder com o código HTTP 200
    E o desconto deve ser 0.00
    E o campo "cupom.aplicado" deve ser false
    E a mensagem em "cupom.mensagem" deve ser "Cupom expirado."

  # ============================================================================
  # TESTES DE CONFIRMAÇÃO DE PEDIDOS (POST /api/pedidos)
  # ============================================================================

  Cenário: CT-027 - Confirmar pedido com dados válidos
    Quando envio uma requisição POST para "/api/pedidos" com dados válidos de cliente e produto
    Então a API deve responder com o código HTTP 201
    E deve retornar o número do pedido no formato "VZ-XXXXXX"
    E a data de criação no campo "criadoEm"

  Cenário: CT-028 - Confirmar pedido com dados do cliente inválidos ou ausentes
    Quando envio uma requisição POST para "/api/pedidos" com dados do cliente ausentes ou inválidos
    Então a API deve responder com o código HTTP 422
    E o código de erro deve ser "DADOS_INVALIDOS"

  Cenário: CT-029 - Confirmar pedido com produto inexistente
    Quando envio uma requisição POST para "/api/pedidos" contendo o produtoId "INVALIDO"
    Então a API deve responder com o código HTTP 422
    E o código de erro deve ser "PRODUTO_NAO_ENCONTRADO"

  Esquema do Cenario: CT-030 - Confirmar pedido com cupom inválido ou expirado
    Quando envio uma requisição POST para "/api/pedidos" com o cupom "<cupom>"
    Então a API deve responder com o código HTTP 422
    E o código de erro deve ser "<codigo_erro>"

    Exemplos:
      | cupom     | codigo_erro   |
      | CUPOM123  | CUPOM_INVALIDO|
      | VERAO2026 | CUPOM_EXPIRADO|