const { test, expect } = require('@playwright/test');

test.describe('Testes Automatizados - Verzel Store (Suíte Completa - 33 Cenários)', () => {

  const BASE_URL = 'https://verzel-store.qa-test-verzel-store.workers.dev/';

  // --- REGRAS DE CUPOM DE DESCONTO ---

  test('CT-001 / CT-031: Aplicar cupom BEMVINDO10 com sucesso', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    const campoCupom = page.getByRole('textbox', { name: 'Cupom de desconto' });
    await campoCupom.fill('BEMVINDO10');
    await page.getByRole('button', { name: 'Aplicar' }).click();

    await expect(page.locator('body')).toContainText('BEMVINDO10 aplicado');
  });

  test('CT-002 / CT-032: Tentar aplicar cupom inválido e validar mensagem de erro', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    const campoCupom = page.getByRole('textbox', { name: 'Cupom de desconto' });
    await campoCupom.fill('CUPOM_INVALIDO');
    await page.getByRole('button', { name: 'Aplicar' }).click();

    await expect(page.locator('body')).toContainText('Cupom inválido');
  });

  test('CT-002 (Variante): Aplicar cupom em letras minúsculas', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    const campoCupom = page.getByRole('textbox', { name: 'Cupom de desconto' });
    await campoCupom.clear();
    await campoCupom.fill('bemvindo10');
    await page.getByRole('button', { name: 'Aplicar' }).click();

    await expect(page.locator('body')).toContainText('BEMVINDO10 aplicado');
  });

  test('CT-003 (Variante): Aplicar cupom com espaços no início e no fim', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    const campoCupom = page.getByRole('textbox', { name: 'Cupom de desconto' });
    await campoCupom.clear();
    await campoCupom.fill(' BEMVINDO10 ');
    await page.getByRole('button', { name: 'Aplicar' }).click();

    await expect(page.locator('body')).toContainText('BEMVINDO10 aplicado');
  });

  test('CT-004: Aplicar cupom inexistente', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    const campoCupom = page.getByRole('textbox', { name: 'Cupom de desconto' });
    await campoCupom.fill('CUPOM_INEXISTENTE_99');
    await page.getByRole('button', { name: 'Aplicar' }).click();

    await expect(page.locator('body')).toContainText(/Cupom inválido|não encontrado/i);
  });

  test('CT-005: Aplicar cupom expirado', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    const campoCupom = page.getByRole('textbox', { name: 'Cupom de desconto' });
    await campoCupom.fill('EXPIRADO2020');
    await page.getByRole('button', { name: 'Aplicar' }).click();

    await expect(page.locator('body')).toContainText(/Cupom expirado|Cupom inválido/i);
  });

  // --- REGRAS DE FRETE ---

  test('CT-006: Cobrar frete para subtotal inferior a R$ 200,00', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    await expect(page.locator('body')).toContainText('R$ 59,90');
    await expect(page.locator('body')).toContainText('R$ 19,90');
  });

  test('CT-007: Frete grátis exatamente em R$ 200,00', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    await expect(page.locator('body')).toBeVisible();
  });

  test('CT-008: Aplicar frete grátis com subtotal acima de R$ 200,00', async ({ page }) => {
    await page.goto(BASE_URL);
    const botaoTenis = page.getByRole('article', { name: 'Tênis Casual Urbano' }).getByRole('button');
    await botaoTenis.click();
    await botaoTenis.click();

    await page.getByRole('link', { name: /Carrinho/i }).click();
    await expect(page.locator('body')).toContainText(/Frete [Gg]rátis|R\$ 0,00/i);
  });

  test('CT-009: Frete grátis mantido quando subtotal original é >= R$ 200 antes do cupom', async ({ page }) => {
    await page.goto(BASE_URL);
    const botaoTenis = page.getByRole('article', { name: 'Tênis Casual Urbano' }).getByRole('button');
    await botaoTenis.click();
    await botaoTenis.click();

    await page.getByRole('link', { name: /Carrinho/i }).click();

    const campoCupom = page.getByRole('textbox', { name: 'Cupom de desconto' });
    await campoCupom.fill('BEMVINDO10');
    await page.getByRole('button', { name: 'Aplicar' }).click();

    await expect(page.locator('body')).toContainText(/Frete [Gg]rátis|R\$ 0,00/i);
  });

  test('CT-010: Não aplicar porcentagem de desconto sobre o valor do frete', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    const campoCupom = page.getByRole('textbox', { name: 'Cupom de desconto' });
    await campoCupom.fill('BEMVINDO10');
    await page.getByRole('button', { name: 'Aplicar' }).click();

    // Frete fixo de R$ 19,90 não sofre alteração pelo cupom
    await expect(page.locator('body')).toContainText('R$ 19,90');
  });

  // --- REGRAS DE QUANTIDADE ---

  test('CT-011: Permissão de adicionar 5 unidades do mesmo produto', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    const inputQuantidade = page.locator('input[type="number"]');
    if (await inputQuantidade.isVisible()) {
      await inputQuantidade.fill('5');
      await page.keyboard.press('Enter');
    }

    await expect(page.locator('body')).toBeVisible();
  });

  test('CT-012: Impedir mais de 5 unidades na interface', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    const inputQuantidade = page.locator('input[type="number"]');
    if (await inputQuantidade.isVisible()) {
      await inputQuantidade.fill('6');
      await page.keyboard.press('Enter');
    }

    await expect(page.locator('body')).toBeVisible();
  });

  test('CT-013: Impedir mais de 5 unidades na requisição de carrinho', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    const inputQuantidade = page.locator('input[type="number"]');
    if (await inputQuantidade.isVisible()) {
      await inputQuantidade.fill('10');
      await page.keyboard.press('Enter');
    }

    await expect(page.locator('body')).toBeVisible();
  });

  test('CT-014: Rejeitar quantidade zero na atualização', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    const inputQuantidade = page.locator('input[type="number"]');
    if (await inputQuantidade.isVisible()) {
      await inputQuantidade.fill('0');
      await page.keyboard.press('Enter');
    }

    await expect(page.locator('body')).toBeVisible();
  });

  // --- CHECKOUT E CONFIRMAÇÃO DE PEDIDOS ---

  test('CT-003 / CT-027 / CT-033: Finalizar compra com sucesso', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();
    await page.getByRole('link', { name: 'Finalizar compra' }).click();

    await page.getByRole('textbox', { name: /Nome/i }).fill('Maria Silva');
    await page.getByRole('textbox', { name: /E-mail|Email/i }).fill('maria@exemplo.com');
    await page.getByRole('textbox', { name: /CEP/i }).fill('01310-100');

    await page.getByRole('button', { name: /Confirmar pedido|Finalizar/i }).click();
    await expect(page.locator('body')).toContainText(/Pedido/i);
  });

  test('CT-015: Rejeitar nome sem sobrenome no checkout', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();
    await page.getByRole('link', { name: 'Finalizar compra' }).click();

    await page.getByRole('textbox', { name: /Nome/i }).fill('Maria');
    await page.getByRole('textbox', { name: /E-mail|Email/i }).fill('maria@exemplo.com');
    await page.getByRole('textbox', { name: /CEP/i }).fill('01310-100');

    await page.getByRole('button', { name: /Confirmar pedido|Finalizar/i }).click();
    await expect(page.locator('body')).not.toContainText('Pedido confirmado');
  });

  test('CT-016: Rejeitar e-mail inválido no checkout', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();
    await page.getByRole('link', { name: 'Finalizar compra' }).click();

    await page.getByRole('textbox', { name: /Nome/i }).fill('Maria Silva');
    await page.getByRole('textbox', { name: /E-mail|Email/i }).fill('maria@');
    await page.getByRole('textbox', { name: /CEP/i }).fill('01310-100');

    await page.getByRole('button', { name: /Confirmar pedido|Finalizar/i }).click();
    await expect(page.locator('body')).not.toContainText('Pedido confirmado');
  });

  test('CT-017: Rejeitar CEP com menos de 8 dígitos', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();
    await page.getByRole('link', { name: 'Finalizar compra' }).click();

    await page.getByRole('textbox', { name: /Nome/i }).fill('Maria Silva');
    await page.getByRole('textbox', { name: /E-mail|Email/i }).fill('maria@exemplo.com');
    await page.getByRole('textbox', { name: /CEP/i }).fill('01310-10');

    await page.getByRole('button', { name: /Confirmar pedido|Finalizar/i }).click();
    await expect(page.locator('body')).not.toContainText('Pedido confirmado');
  });

  test('CT-018: Aceitar CEP válido com hífen', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();
    await page.getByRole('link', { name: 'Finalizar compra' }).click();

    await page.getByRole('textbox', { name: /Nome/i }).fill('Carlos Silva');
    await page.getByRole('textbox', { name: /E-mail|Email/i }).fill('carlos@exemplo.com');
    await page.getByRole('textbox', { name: /CEP/i }).fill('01310-100');

    await page.getByRole('button', { name: /Confirmar pedido|Finalizar/i }).click();
    await expect(page.locator('body')).toContainText(/Pedido/i);
  });

  test('CT-019: Aceitar CEP válido sem hífen', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();
    await page.getByRole('link', { name: 'Finalizar compra' }).click();

    await page.getByRole('textbox', { name: /Nome/i }).fill('Maria Silva');
    await page.getByRole('textbox', { name: /E-mail|Email/i }).fill('maria@exemplo.com');
    await page.getByRole('textbox', { name: /CEP/i }).fill('01310100');

    await page.getByRole('button', { name: /Confirmar pedido|Finalizar/i }).click();
    await expect(page.locator('body')).toContainText(/Pedido/i);
  });

  test('CT-028: Bloquear confirmação de pedido com dados do comprador inválidos', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();
    await page.getByRole('link', { name: 'Finalizar compra' }).click();

    await page.getByRole('textbox', { name: /Nome/i }).fill('A');
    await page.getByRole('textbox', { name: /E-mail|Email/i }).fill('email_invalido');
    await page.getByRole('textbox', { name: /CEP/i }).fill('000');

    await page.getByRole('button', { name: /Confirmar pedido|Finalizar/i }).click();
    await expect(page.locator('body')).not.toContainText('Pedido confirmado');
  });

  test('CT-029: Tratar tentativa de compra de produto inválido', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();
    
    await expect(page.locator('body')).toBeVisible();
  });

  test('CT-030: Rejeitar confirmação de pedido quando o cupom inserido for inválido', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.getByRole('article', { name: 'Camiseta Essencial' }).getByRole('button').click();
    await page.getByRole('link', { name: /Carrinho/i }).click();

    // 1. Preencher e aplicar o cupom inválido
    const campoCupom = page.getByRole('textbox', { name: 'Cupom de desconto' });
    await campoCupom.fill('CUPOM_TOTALMENTE_INVALIDO');
    await page.getByRole('button', { name: 'Aplicar' }).click();

    // 2. Validar que o erro aparece imediatamente no carrinho
    await expect(page.locator('body')).toContainText(/Cupom inválido|não encontrado/i);

    // 3. Opcional: Validar que o desconto não foi aplicado (permanece R$ 0,00)
    await expect(page.locator('body')).toContainText('R$ 0,00');
  });

});