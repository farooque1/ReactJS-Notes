import React from 'react';
import {BrowserRouter as Router,Switch,Link, Route} from 'react-router-dom';
import Reactapp from './Reactapp';
import Funcmp from './Funcmp';
import Clscmp from './Clscmp';
import Props from './Props';
import State from './State';
import Call from './Call';
import Map from './Map';
import Fetch from './Fetch';
import Axios from './Axios';
import Promises from './Promises';
import Hooks from './Hooks';
import Notfound from './Notfound';
import Async from './Async';
import Inlinecss from './Inlinecss';

import '../bootstrap.css';
import '../bootstrap.min.css';
import Arrowfun from './Arrowfun';
import Es6 from './Es6';



function Theory(props) {
return <>
<div>

<h2 className="text-center mt-5">{props.name}</h2>
<div class="container">
<Router>
<div className="row">
<div className="col-lg-4 mb-5">
<div class="list-group mt-5">

  <Link to="/" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100">
    <h6 class="mb-1"> What Is React JS <i class="fa fa-arrow-right fa-lg"></i> </h6> 

    </div>
  </Link>
  <Link to="/funcmp" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100">
      <h6 class="mb-1"> What Is Function component <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>
  <Link to="/clscmp" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100">
    <h6 class="mb-1"> What Is Class component <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>

  <Link to="/clscmp" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100">
    <h6 class="mb-1"> What Is React DOM and example<i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>

  <Link to="/props" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100">
    <h6 class="mb-1"> What is Props and How To use Props <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>

  <Link to="/State" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> What is State and How To use State <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>
  
  <Link to="/call" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> What is Call,Apply And Bind Function <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>

  <Link to="/map" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> What is Map Function <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>

  <Link to="/fetch" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> How To Fetch api data <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>

  <Link to="/axios" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> How To Fetch api data with axios <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>
  <Link to="/promise" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> What is Promises <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>
  <Link to="/hook" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> What is useSate,useRef and useEffec(Hook's) <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>
  <Link to="/async" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> What is async and await <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>  

  <Link to="/css" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> In Line CSS in React JS <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>  

  <Link to="/arrow" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> What is Arrow function <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>  

  <Link to="/reactjs" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> Basic ES6 question and answer <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>

  <Link to="" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> What is Redus and how i use it <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>  

  <Link to="" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> What is Context API <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>  

  <Link to="" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
    <h6 class="mb-1"> HOC <i class="fa fa-arrow-right fa-lg"></i></h6>
    </div>
  </Link>      

</div>
</div>

<div className="col-lg-8 mt-5 mb-5">

<div class="col">
                    <div class="dots">
                        <div class="red"></div>
                        <div class="orange"></div>
                        <div class="green"></div>
                    </div>
                    <Switch>
        <Route path='/' component={Reactapp} exact></Route>    
            <Route path='/funcmp' component={Funcmp}></Route>
            <Route path='/clscmp' component={Clscmp}></Route>
            <Route path='/props' component={Props}></Route>
            <Route path='/state' component={State}></Route>
            <Route path='/call' component={Call}></Route>
            <Route path='/map' component={Map}></Route>
            <Route path='/fetch' component={Fetch}></Route>
            <Route path='/axios' component={Axios}></Route>
            <Route path='/promise' component={Promises}></Route>
            <Route path='/hook' component={Hooks}></Route>
            <Route path='/async' component={Async}></Route>
            <Route path='/css' component={Inlinecss}></Route>
            <Route path='/arrow' component={Arrowfun}></Route>
            <Route path='/reactjs' component={Es6}></Route>
            <Route path='*' component={Notfound}></Route>
            
    </Switch>
            </div>
</div>
</div>
</Router>
</div>
</div>
</>;
}

export default Theory;