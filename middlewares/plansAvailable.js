export default function (req, res, next) {
  const plans = {
    "data": {
      "activePlans": [
        {
          "id": 1,
          "seqno": 10,
          "name": "Plano 4D"
        },
        {
          "id": 2,
          "seqno": 20,
          "name": "Plano 5D"
        },
        {
          "id": 3,
          "seqno": 30,
          "name": "Plano 6D"
        },
        {
          "id": 4,
          "seqno": 40,
          "name": "Plano 7D"
        },
        {
          "id": 5,
          "seqno": 50,
          "name": "SPACE"
        }
      ]
    }
  }

  res.end(JSON.stringify(plans));

  next()
}
