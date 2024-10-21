// import { MyButton } from "./components/my-button";
// import { MySquare } from "./components/my-square";
// import { MyTitulo } from "./components/my-titulo";

"use client"

import { getAddress } from "../../get-address"

export default function Home() {
  function handlGetAdress() {
    getAddress("51190740")

  }
  return(
    <>
    <button 
    onClick={handlGetAdress }
    className="px-3 py-2 rounded-lg bg-primary text-[#fff]">obter endereço
    
    </button>
    </>
  )


}
{/* type AvatarProps = {
  size?: number;
  
};
function Avatar({size}: AvatarProps) {
  console.log(size);
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={size}
      height={size}
      
    />
  );


}

type CardProps = {
  children: React.ReactNode;
};


function Card({children}: CardProps) {
  console.log(children);

  return <div className="p-3 border border-black rounded-lg max-w-fit">{children}</div>;

}

//export default function Home() {
  return (
    <div>
      <h1>Página Home</h1>
      
      <Card>
      <Avatar  size={100} />
      </Card>

      
    <div>
        <MyButton />
        <MySquare />
        <MyTitulo />
      </div>
      <Card>
        <span>teste</span>
        <span>teste</span>
      </Card>
 


    </div>
  );
} */}
