"use client";
import { useState } from "react";
import { getAddress } from "../../get-address";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MdOutlineDelete } from "recat-icons/md";


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

};

const initialAddresses: Address[] = [
  {

    id: self.crypto.randomUUID(),
    logradouro: "Avenida Paulista",
    bairro: "Bela Vista",
    cidade: "São Paulo",
    cep: "01311-200",
    estado: "SP",
    complemento: "Edifício Comercial",
    localidade: "Zona Central",
    consultedAt: new Date(),
  },
  
  {
    id:  self.crypto.randomUUID(),
    logradouro: "Rua XV de Novembro",
    bairro: "Centro",
    cidade: "Curitiba",
    cep: "80020-310",
    estado: "PR",
    complemento: "Próximo à Praça Osório",
    localidade: "Centro Histórico",
    consultedAt: new Date()
  },
  {
    id:  self.crypto.randomUUID(),
    logradouro: "Avenida Rio Branco",
    bairro: "Centro",
    cidade: "Rio de Janeiro",
    cep: "20090-003",
    estado: "RJ",
    complemento: "Próximo ao Museu do Amanhã",
    localidade: "Zona Central",
    consultedAt: new Date()
  },
  {
    id:  self.crypto.randomUUID(),
    logradouro: "Avenida Afonso Pena",
    bairro: "Centro",
    cidade: "Belo Horizonte",
    cep: "30130-003",
    estado: "MG",
    complemento: "Próximo ao Parque Municipal",
    localidade: "Região Central",
    consultedAt: new Date()
  },
];

function formatDate(date: Date) {
  const result = formatDistanceToNow(new Date(date),{
    includeSeconds: true,
    locale: ptBR,
  });

  return result;
}
  
  export default function Home() {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addresses, setAddress] = useState<Address[]>(initialAddresses);

  const[textValue, setTextValue] = useState("");
  

  async function handleGetAddress() {
    setLoading(true);

    try {
      const result = await getAddress(textValue);

      setAddress(result); // Armazena o objeto inteiro no estado
      console.log(result);
      if (result?.erro === "true"){
        alert("CEP inválido.");
        return;
      }

      const newAddress: Address = {
        id: self.crypto.randomUUID(),
        consultedAt: new Date(),
        ...result,
      };

      console.log(newAddress);

      const newAddresses = [newAddress, ...address];
      newAddresses(newAddresses);
      
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao obter o endereço.");
    } finally {
      setLoading(false);
    }
  }

   return (
    <div className="flex flex-col items-center">
      <h1>Página Home</h1>

      <div className="flex flex-col gap-2">
        <label>CEP</label>
        <input 

          onChange={(e)=> setTextValue(e.target.value)}
          className="rounded-lg shadow-lg px-4 p-3"
          placeholder="Digite um CEP válido" 
        />

        <button
          onClick={handleGetAddress}
          disabled={textValue ===""}
          className={`${
            loading && "opacity-30"
          } w-fit px-5 py-3 bg-blue-700 text-white rounded-xl`}
        >

          {loading ? "Carregando..." : "Obter endereço"}
        </button>
        </div>    
        

        <table className="table-auto [&>*>*>*]:border-2">
          <thead>
            <tr className="&>*]:px-4 [&>*]:py-2">
              <th>Logradouro</th>
              <th>Bairro</th>
              <th>Localidade</th>
              <th>CEP</th>
              <th>Consultado em</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {addresses.map((address) =>(
              <tr key={address.id} className="&>*]:px-4 [&>*]:py-2">
                <td>{address.logradouro}</td>
                <td>{address.bairro}</td>
                <td>{address.localidade}</td>
                <td>{address.cep}</td>
                <td>{formatDate(address.consulteAdt)}</td>
                <td>
                  <button 
                  onClick={() => handleGetAddress(address.id)}
                  className="bg-red-300 p-0.5 flex items-center"
                  >
                    <MdOutlineDelete size={24} />

                  </button>

                </td>

              </tr>
            ))}
      
          </tbody>
        </table>
      </div>

          );
  }



