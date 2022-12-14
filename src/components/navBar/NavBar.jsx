import "./NavBar.css";

import {Link} from "react-router-dom"

import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {

   

  return (
    <div className="navbar-container">
      <div className="container-logo">
        <Link to="/">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dnkpcv47m/image/upload/c_scale,w_120/v1669482040/images_g97sph.png"
          alt="imagen-logo"
          />
          </Link>
      </div>
      <ul className="navbar">
        <Link className="navbar-item" to="/" >Todas</Link>
        <Link className="navbar-item" to="/category/receta" >Recetados</Link>
        <Link className="navbar-item" to="/category/sol" >De sol</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
