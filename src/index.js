import React from "react";
import ReactDOM from "react-dom";
import {Route,Link,BrowserRouter  as Router } from "react-router-dom";
import App from "./components/App";
import './index.css';
import About from "./about";
import Contact from "./movie";

const Routing =(
<Router>
<div>
<h1>React Router</h1>
<ul>
<li>
<link to="/">Home</link>
</li>
<li>
<link to="/">About</link>
</li>

<li>
<link to="/">Contact</link>
</li>
</ul>
<Route exact path="/" component ={App}/>
<Route path="/about" component ={About}/>
<Route path="/contact" component ={Contact}/>

</div>
</Router>



)

const RouTing = (  
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <ul>  
        <li>  
          <NavLink to="/" exact activeStyle={  
             {color:'red'}  
          }>Home</NavLink>  
        </li>  
        <li>  
          <NavLink to="/about" exact activeStyle={  
             {color:'green'}  
          }>About</NavLink>  
        </li>  
        <li>  
          <NavLink to="/contact" exact activeStyle={  
             {color:'magenta'}  
          }>Contact</NavLink>  
        </li>  
      </ul>  
      <Route exact path="/" component={App} />  
      <Route path="/about" component={About} />  
      <Route path="/contact" component={Contact} />  
    </div>  
  </Router>  
)  
const routing =(
<Router>
<div>
  <h1>React Router Example</h1>
<route path="/" component={App}/>
<route path="/about" component={Contact}/>
<route path="/contact" component={Contact}/>
</div>
</Router>
)
ReactDOM.render(
  <Router>

    <App />
  </Router>,
  document.getElementById("root")
);



ReactDOM.render(routing,document.getElementById('root'))