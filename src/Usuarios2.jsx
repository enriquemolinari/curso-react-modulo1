import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function conDelay(delay) {
  return new Promise((resolved) => setTimeout(resolved, delay));
}

export default function Usuarios2() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const query = useQuery({
    queryKey: ["usuarios", page],
    queryFn: () =>
      conDelay(0).then(() =>
        fetch("https://reqres.in/api/users?page=" + page)
          .then((response) => response.json())
          .then((json) => {
            setTotalPages(json.total_pages);
            return json.data;
          })
      ),
    //staleTime: 10000,
  });

  /* useEffect(() => {
    console.log("se llamo al callback del useEffect");
    fetch("https://reqres.in/api/users?page=" + page)
      .then((response) => response.json())
      .then((json) => {
        setTotalPages(json.total_pages);
        setUsers(json.data);
      });
  }, [page]);
*/
  function handleClickListarUsuarios() {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json.data));
  }

  function handleClickSiguiente() {
    setPage((page) => page + 1);
  }

  function handleClickAnterior() {
    setPage((page) => page - 1);
  }

  function handleClickLimpiar() {
    setUsers([]);
  }

  return (
    <>
      <button disabled={page === 1} onClick={handleClickAnterior}>
        Anterior
      </button>
      <button disabled={page === totalPages} onClick={handleClickSiguiente}>
        Siguiente
      </button>

      <button onClick={handleClickListarUsuarios}>Listar Usuarios</button>
      <button onClick={handleClickLimpiar}>Borrar</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>nombre</th>
            <th>apellido</th>
            <th>email</th>
            <th>avatar</th>
          </tr>
        </thead>
        <tbody>
          {query.isLoading && (
            <tr>
              <td>Recuperando datos...</td>
            </tr>
          )}
          {query.data?.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.first_name}</td>
              <td>{u.last_name}</td>
              <td>{u.email}</td>
              <td>
                <img src={u.avatar} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
