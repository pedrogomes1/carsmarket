export function transformCurrencyToNumber(currencyValue: string) {
  const currency = currencyValue.replace(/[^\d,]/g, '').replace(',', '.')
  return parseFloat(currency)
}
