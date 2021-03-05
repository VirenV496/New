import React from 'react';

import FormA from './Pages/FormA/FormA'
import FormB from './Pages/FormB/FormB'
import Header from './Header/Header';


import {
  BrowserRouter,
  Switch,
  Route  
} from "react-router-dom";

function App() {
  return (
   <div>

<BrowserRouter> 
     <Header/>
          <Switch>
        
            <Route path="/" exact />
            <Route path="/FormA" component={FormA}/>
            <Route path="/FormB" component={FormB}/>
       
          
          </Switch>
     
     </BrowserRouter>

   </div>

  );
}

export default App;
