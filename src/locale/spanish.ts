export default {
  title: 'FINTO',
  subTitle: 'PI - 5',
  formatStock: ({ stock }: {stock: number} ) => {
    if (stock === 0) { return 'Agotado'; }
    if (stock === 1) { return '¡Última unidad!'; }
    if (stock <= 5) { return `¡Últimas ${stock} unidades!`; }
    return `${stock} unidades`;
  },
}