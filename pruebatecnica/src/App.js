import './assets/css/App.css';
import Navbar from './Componentes/Navbar';
import FooterW from './Componentes/Footer';
import Inicio from './Componentes/Inicio';
import Contacto from './Componentes/Contacto';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/contacto" exact>
            <Contacto/>
          </Route>
          <Route path="/" exact>
            <Inicio/>
          </Route>
        </Switch>
        <FooterW />
      </div>
    </Router>
  );
}

export default App;
