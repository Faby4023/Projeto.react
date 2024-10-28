export async function getAddress(cep: string) {
  const url = `http://viacep.com.br/ws/${cep}/json/`;

  try {
    const response = await fetch(url);
    console.log(response);
    const json = await response.json();

    return json;
  } catch (error) {
    console.error("Ocorreu um erro inesperado", error);
  }
}

//getAddress("51190740");
