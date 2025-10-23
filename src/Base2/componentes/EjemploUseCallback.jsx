import { useCallback, useEffect, useState } from "react";
function Hijo({ onClick}) {
    console.log("render Hijo");
    return <button onClick={onClick}>Decir Hola</button>
}

export default function EjemploUseCallback() {
  const [count, setCount] = useState(0);

  const incrementar = useCallback( () => setCount(count + 1), []);
  console.log("render Padre");

  return (
    <div>
      <p>Count: {count}</p>
      <Hijo onClick={incrementar} />
    </div>
  );
}