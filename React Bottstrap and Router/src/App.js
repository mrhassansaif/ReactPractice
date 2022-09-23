import React from 'react'
import { Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";
import BCard from './Componenets/Cards/Card';
import Crousel from './Componenets/Crousel/Crousel';


export default function App() {
  return (
    <>
      <Router>
        <br />


        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link><Link to="/">Cards</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/carousel">Carousel</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/May/the/Force/be/with/you">Force?</Link></Nav.Link>
          </Nav.Item>
        </Nav>
        <br />
        <Switch>
          <Route exact path="/">
            <BCard />
          </Route>
          <Route path="/carousel">
            <Crousel />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>


      </Router>
    </>
  )


}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <h4> Error 404 Force not found</h4>
    </div>
  );
}
