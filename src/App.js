import { NavbarComponent, Home, About, Contact, Keranjang, FooterComponent } from './components'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
      <NavbarComponent />
     <Switch>
      <Route path="/" exact>
       <Home />
      </Route>
      <Route path="/about">
       <About />
      </Route>
      <Route path="/contact">
       <Contact />
      </Route>
      <Route path="/keranjang">
       <Keranjang />
      </Route>
     </Switch>
     <FooterComponent />
     </Router>
    </div>
  );
}

export default App;
