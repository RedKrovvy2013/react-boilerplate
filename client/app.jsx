var React = require('react')
var ReactDOM = require('react-dom')
var { BrowserRouter, Route } = require('react-router-dom')

var main = require('./main')

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={main}/>
  </BrowserRouter>,
  document.getElementById('app')
)
