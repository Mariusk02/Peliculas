export default function Paginacion(props) {
  const getPaginas = () => {
    const resultado = [];
    for (let i = 0; i < props.total; i++) {
        let pagina = i+1
      resultado.push(
        <a
          onClick= {() => props.onChange(pagina)}
          className={props.pagina === pagina ? "active" : ""}
        
        >
          {pagina}
        </a>
      );
    }
    return resultado;
  };
  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          Page {props.pagina} of {props.total}:
        </span>
        {/*
         Array.apply(0, Array(props.total)),map(value =>{
           <a className="active" href="#">
             1
           </a>})
        */}
        {getPaginas()}
      </div>
    </div>
  );
}
