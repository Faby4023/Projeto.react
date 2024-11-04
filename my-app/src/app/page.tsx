"use client";
import { useState } from "react";
import { getAddress } from "../../get-address";


type Address = {
  id: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  cep: string;
  estado: string;
  complemento: string;
  localidade: string;
  consultedAt: Date;

}

{

  const address1: Address = {
    id: "1",
    logradouro: "Avenida Paulista",
    bairro: "Bela Vista",
    cidade: "São Paulo",
    cep: "01311-200",
    estado: "SP",
    complemento: "Edifício Comercial",
    localidade: "Zona Central",
    consultedAt: new Date()
  };
  
  
  
  const address2: Address = {
    id: "2",
    logradouro: "Rua XV de Novembro",
    bairro: "Centro",
    cidade: "Curitiba",
    cep: "80020-310",
    estado: "PR",
    complemento: "Próximo à Praça Osório",
    localidade: "Centro Histórico",
    consultedAt: new Date()
  };
  
  const address3: Address = {
    id: "3",
    logradouro: "Avenida Rio Branco",
    bairro: "Centro",
    cidade: "Rio de Janeiro",
    cep: "20090-003",
    estado: "RJ",
    complemento: "Próximo ao Museu do Amanhã",
    localidade: "Zona Central",
    consultedAt: new Date()
  };
  
  const address4: Address = {
    id: "4",
    logradouro: "Avenida Afonso Pena",
    bairro: "Centro",
    cidade: "Belo Horizonte",
    cep: "30130-003",
    estado: "MG",
    complemento: "Próximo ao Parque Municipal",
    localidade: "Região Central",
    consultedAt: new Date()
  };
  
  


export default function Home() {
  const [address, setAddress] = useState<Address | null>(null);
  const [loading, setLoading] = useState(false);

  const[textValue, setTextValue] = useState("");
  const addressList: Address[] = [address1, address2, address3, address4];



  async function handleGetAddress() {
    setLoading(true);

    try {
      const result = await getAddress(textValue);

      setAddress(result); // Armazena o objeto inteiro no estado
      console.log(result);
    } catch (error) {
      console.error("Ocorreu um erro ao obter o endereço.", error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div>
      <h1>Página Home</h1>
      <div className="flex-col gap-2">
        <label>CEP</label>
        <input value={textValue}

        onChange={(e)=> setTextValue(e.target.value)}
        className="rounded-lg shadow-lg px-4 p-3"
        placeholder="Digite um CEP válido" />
        <button
          onClick={handleGetAddress}
          className={`w-fit px-5 py-3 rounded-lg bg-primary text-white ${
            loading ? "opacity-30" : ""
          }`}

          disabled={loading}
        >
          {loading ? "Carregando..." : "Obter endereço"}
        </button>
        <br />
        <span>
          Endereço:{" "}
          {address
            ? `${address.logradouro}, ${address.bairro}`
            : "Nenhum endereço obtido"}
        </span>
      </div>

      <div className="flex flex-col gap-4 mt-6">
      <ul>
        {addressList.map((address) =>(
          <li key={address.id}>{address.localidade}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}


