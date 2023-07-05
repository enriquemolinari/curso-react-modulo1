import { useEffect } from "react";

export default function CleanUp() {
  useEffect(() => {
    let idInterval = setInterval(() => console.log("set interval"), 1000);
    return () => clearInterval(idInterval);
  }, []);

  return <div>Intevalo</div>;
}
