function Navbar(){
    return(
        <div id="main">
<nav className="navbar navbar-default">
  <ul className="nav navbar-nav">
    <li><a href="#0">Home</a></li>
    <li><a href="#0">About</a></li>
    <li className="dropdown">
      <a href="#0" className="dropdown-toggle" data-toggle="dropdown" data-target="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Clients<span class="caret"></span></a>
      <ul className="dropdown-menu" id="dropdon-menu">
        <li><a href="#0">Burger King</a></li>
        <li><a href="#0">Southwest Airlines</a></li>
        <li><a href="#0">Levi Strauss</a></li>
      </ul>
    </li>
    <li class="dropdown">
      <a href="#0" className="dropdown-toggle" data-toggle="dropdown" data-target="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services<span class="caret"></span></a>
      <ul class="dropdown-menu" id="dropdon-menu">
        <li><a href="#0">Print Design</a></li>
        <li><a href="#0">Web Design</a></li>
        <li><a href="#0">Mobile App Development</a></li>
      </ul>
    </li>
    <li><a href="#0">Contact</a></li>
  </ul>
</nav>
</div>
    )
}
function Component(){
    return(<main><h1>Sal cf</h1><p>bn fac</p></main>)
}
ReactDOM.render(<div><Navbar /> <Component /></div>,document.getElementById('root'));