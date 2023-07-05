import { useState } from "react";

export default function Counter() {
  const [contador, setContador] = useState(0);

  function handleClick() {
    setContador((contador) => contador + 1);

    console.log(contador);
  }

  return (
    <>
      <div>{contador}</div>
      <button onClick={handleClick}>Clickeame</button>
    </>
  );
}
