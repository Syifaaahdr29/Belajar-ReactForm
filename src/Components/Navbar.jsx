import "./Navbar.css"

import logo from "../assets/react.svg"

function Navbar(){
    return (
    <header>
        <img src={logo} alt="" width="50px"></img>
        <nav>
          <ul>
            <li>Home</li>
            <li>Register</li>
            <li>About</li>
          </ul>
        </nav>
    </header>
    )
}

export default Navbar