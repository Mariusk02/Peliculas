import { useState } from "react";
import "../App.css";
import PageWrapper from "../components/PageWrapper";
import Paginacion from "../components/Paginacion";
import Pelicula from "../components/Pelicula";
import peliculasJson from "../peliculas.json";

function ListadoPelicula() {
  const [paginaActual, setPaginaActual] = useState(1);
  let peliculas = peliculasJson;
  const TOTAL_POR_PAGINA = 7;
  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  };

  const totalPaginas = () => {
    let cantidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  };
  cargarPeliculas()
  return (
    <PageWrapper>
      {peliculas.map((pelicula) => {
        return (
          <Pelicula
            img={pelicula.img}
            titulo={pelicula.titulo}
            calificacion={pelicula.calificacion}
            director={pelicula.director}
            actores={pelicula.actores}
            fecha={pelicula.fecha}
            duracion={pelicula.duracion}
          >
            {pelicula.descripcion}
          </Pelicula>
        );
      })}
      <Paginacion
        pagina={paginaActual}
        total={totalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </PageWrapper>
  );
}

export default ListadoPelicula;
