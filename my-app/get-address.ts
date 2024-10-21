export async function getAddress(cep: string) {
    const url = `http://viacep.com.br/ws/${cep}/json/`

    try{

    const response = await fetch(url);
    
    const json = await response.json();

    return
    console.log(json);
  } catch (error) {
    console.error("Ocorreu um erro inesperado", error);
 }
}


//getAddress("51190740");
