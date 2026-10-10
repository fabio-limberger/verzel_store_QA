# Relatório de Execução de Testes - Verzel Store

Este documento apresenta os resultados da execução manual, via API e automatizada (E2E) dos **33 cenários de teste mapeados** para a aplicação Verzel Store.

## 📊 Resumo da Execução
- **Total de Cenários Mapeados:** 33
- **Executados e Aprovados (Passou):** 33
- **Pendentes / Falhas:** 0
- **Taxa de Cobertura e Sucesso:** 100% (33/33)

---

## 📋 Tabela de Resultados

| ID | Cenário | Tipo de Teste | Status | Evidência / Observação |
| :--- | :--- | :--- | :--- | :--- |
| **CT-001** | Aplicar cupom BEMVINDO10 com sucesso | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-002** | Tentar aplicar cupom inválido | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-002 (Var)**| Aplicar cupom em letras minúsculas | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-003 (Var)**| Aplicar cupom com espaços no início e fim | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-004** | Aplicar cupom inexistente | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-005** | Aplicar cupom expirado | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-006** | Cobrar frete para subtotal < R$ 200,00 | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-007** | Frete grátis exatamente em R$ 200,00 | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-008** | Frete grátis acima de R$ 200,00 | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-009** | Frete grátis mantido antes do desconto | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-010** | Não aplicar desconto sobre o frete | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-011** | Adicionar 5 unidades do mesmo produto | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-012** | Impedir mais de 5 unidades na interface | Interface / E2E | **PASSOU ✅** | Executado via Playwright (Refatorado para estabilidade) |
| **CT-013** | Impedir mais de 5 unidades na requisição | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-014** | Rejeitar quantidade zero na atualização | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-015** | Rejeitar nome sem sobrenome no checkout | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-016** | Rejeitar e-mail inválido no checkout | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-017** | Rejeitar CEP com menos de 8 dígitos | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-018** | Aceitar CEP válido com hífen | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-019** | Aceitar CEP válido sem hífen | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-020** | Listar produtos pela API | API (GET) | **PASSOU ✅** | `evidencias/ct-020.png` |
| **CT-021** | Consultar produto existente pela API | API (GET) | **PASSOU ✅** | `evidencias/ct-021.png` |
| **CT-022** | Consultar produto inexistente pela API | API (GET) | **PASSOU ✅** | `evidencias/ct-022.png` |
| **CT-023** | Calcular carrinho sem cupom pela API | API (POST) | **PASSOU ✅** | `evidencias/ct-023.png` |
| **CT-024** | Calcular carrinho com cupom válido | API (POST) | **PASSOU ✅** | `evidencias/ct-024.png` |
| **CT-025** | Calcular carrinho com cupom inexistente | API (POST) | **PASSOU ✅** | `evidencias/ct-025.png` |
| **CT-026** | Calcular carrinho com cupom expirado | API (POST) | **PASSOU ✅** | `evidencias/ct-026.png` |
| **CT-027** | Confirmar pedido válido via API | API (POST) | **PASSOU ✅** | `evidencias/ct-027.png` |
| **CT-028** | Confirmar pedido com dados inválidos | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-029** | Confirmar pedido com produto inválido | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-030** | Confirmar pedido com cupom inválido | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-031** | Aplicar cupom BEMVINDO10 (Interface) | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-032** | Tentar aplicar cupom inválido (Interface)| Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |
| **CT-033** | Finalizar compra com sucesso (Checkout) | Interface / E2E | **PASSOU ✅** | Executado via Playwright (`tests/verzel_store.spec.js`) |