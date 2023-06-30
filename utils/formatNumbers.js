function formatToCurrencyBR(number) {
  return Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(number)
}

export {
  formatToCurrencyBR
}
