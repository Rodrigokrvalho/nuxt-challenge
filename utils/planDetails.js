export function planDetails(url) {
  const params = new URLSearchParams(url.split('?')[1]);

  const planID = parseInt(params.get('id'));
  const plans = {
    1: {
      "data": {
        "planInfo": {
          "id": 1,
          "name": "Plano 4D",
          "planBaseAmt": 284,
          "contents": [
            {
              "baseQuantity": 1,
              "service": "MEMBERZ",
              "addOnId": null,
              "packageQuantity": null,
              "maxAddOnQuantity": 1
            },
            {
              "baseQuantity": 3,
              "service": "USERS",
              "addOnId": null,
              "packageQuantity": null,
              "maxAddOnQuantity": 5
            },
            {
              "baseQuantity": 1,
              "service": "DOMAIN",
              "addOnId": 1,
              "packageQuantity": 1,
              "maxAddOnQuantity": 5
            }
          ]
        }
      }
    },
    2: {
      "data": {
        "planInfo": {
          "id": 2,
          "name": "Plano 5D",
          "planBaseAmt": 341,
          "contents": [
            {
              "baseQuantity": 1,
              "service": "DOMAIN",
              "addOnId": 1,
              "packageQuantity": 1,
              "maxAddOnQuantity": 1
            }
          ]
        }
      }
    },
    3: {},
    4: {},
    5: {},
    6: {},
  }

  return plans[planID].data;
}
