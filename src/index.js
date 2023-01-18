import React from "react";
import ReactDOM from "react-dom";
import {Route,Link,BrowserRouter  as Router } from "react-router-dom";
import App from "./components/App";
import './index.css';
import About from "./about";
import Contact from "./contact";

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