function Header(){
  return <header><nav className="nav"><img className="img" src="/react.png"></img><div></div><ul className="nav-items"><li>Price</li><li>Contact</li><li>About</li></ul></nav></header>;
}
function Maindata(){
  return<div className="main-container"><h1>This is my first static web page</h1><ul><li>this is an element</li><li>this is another element</li></ul></div>
}
function Footer(){
  return <footer>@2023 Ionel Tudor-Paul.All rights reserved</footer>
}
function All(){
  return <><Header /><Maindata /><Footer /></>
}
ReactDOM.render(<All />,document.getElementById('root'));