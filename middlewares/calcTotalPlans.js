export default function (req, res, next) {
  const params = new URLSearchParams(req.url.split('?')[1]);

  const quantityAdd = parseInt(params.get('quantity-add'));
  const pricePerAdd = 70
  const total = quantityAdd * pricePerAdd;

  res.end(JSON.stringify({ addOnPriceAmt: total }));
  next()
}
