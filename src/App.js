import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './pages/home/Home';
import Q from './pages/q/index';
import TR from './pages/toremember/index';
import SP from './pages/specter/index';
import Towers from './pages/towers/index';
import Panels from './pages/panels/index';



import Error from './pages/Erroj';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>

            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/q" component={Q}/>
             <Route path="/specters" component={SP}/>
             <Route path="/Toremember" component={TR}/>
             <Route path="/towers" component={Towers}/>
             <Route path="/panels" component={Panels}/>



             <Route component={Error}/>

           </Switch>



      </BrowserRouter>
    );
  }
}
 
export default App;