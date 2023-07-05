import "./Persona.css";
import { PropTypes } from "prop-types";

Persona.propTypes = {
  personas: PropTypes.array,
  titulo: PropTypes.string,
  handler: PropTypes.function,
};

export default function Persona({
  personas,
  titulo = "titulo vacio",
  handler,
}) {
  function handleMouseOver() {
    console.log("mouse over ejecutandose....");
  }

  return (
    <>
      <p>{titulo}</p>

      <a href="#" onClick={handler}>
        Click me!
      </a>

      <button
        onMouseOver={handleMouseOver}
        onClick={() => {
          console.log("Hola Mundo");
        }}
      >
        Click aquí
      </button>

      {personas.map((elemento) => {
        return (
          <div key={elemento.id} className="estilo">
            {elemento.nombre +
              " - " +
              elemento.apellido +
              " - " +
              elemento.edad}
          </div>
        );
      })}
    </>
  );
}
