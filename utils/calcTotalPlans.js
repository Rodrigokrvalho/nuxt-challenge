export function calcTotalPlans(url) {
  const params = new URLSearchParams(url.split('?')[1]);

  const quantityAdd = parseInt(params.get('quantity-add'));
  const pricePerAdd = 70
  const total = quantityAdd * pricePerAdd;

  return { addOnPriceAmt: total };
}
