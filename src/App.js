import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Text from './Text'
import Square from './Square'
import Circle from './Circle'


class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <div>
        <header>
          <nav>
            <ul>
            <li><Link to="/tekst">tekst</Link></li>
            <li><Link to="/square">square</Link></li>
            <li><Link to="/circle">circle</Link></li>
            </ul>
          </nav>
        </header>
        <section>
          <Switch>
            <Route path="/tekst" exact component={Text}/>
            <Route path="/square" component={Square}/>
            <Route path="/circle" component={Circle}/> 
          </Switch>                   
        </section>
      </div>
      </BrowserRouter>
      
    );
  } 
}

export default App;
