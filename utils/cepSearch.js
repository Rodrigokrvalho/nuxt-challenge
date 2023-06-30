async function cepSearch(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  return await fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      return { error: true }
    });

}

export {
  cepSearch
}
