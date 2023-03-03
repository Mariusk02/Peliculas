import { BrowserRouter , Route, Switch  } from "react-router-dom";
import Blog from "./components/Blog";
import ListadoPelicula from "./components/ListadoPelicula";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <ListadoPelicula />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
