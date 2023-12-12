export function formatCurrency(money: number, currency = 'BRL') {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(money)
}
