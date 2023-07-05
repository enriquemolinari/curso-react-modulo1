import { useEffect, useState } from "react";

export default function Form1() {
  const [resultado, setResultado] = useState("");
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
  });

  useEffect(() => {
    console.log(formData);
  });

  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((formData) => ({
      ...formData,
      [inputName]: inputValue,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Algo salio mal");
        else return response.json();
      })
      .then((json) => setResultado("Creado con éxito: " + json.id))
      .catch((error) => setResultado(error.message));
  }

  return (
    <>
      <p>{resultado}</p>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Nombre:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lname">Apellido:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
