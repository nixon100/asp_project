import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import '../css/appp.css'

// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [logout, setLogout] = React.useState(false);

  const Navigate = useNavigate();

    // useEffect(()=>{
    // if(!localStorage.getItem("auth")){
    //   Navigate("/login")
    // }
    // },[logout])

    useEffect(()=>{
      if((!localStorage.getItem("client")) && (!localStorage.getItem("auth")) && (!localStorage.getItem("user")) ){
        Navigate("/login")
      }
      },[logout])

    const logoutHandler = (e) => {
      e.preventDefault();
      localStorage.removeItem("auth");
      localStorage.removeItem("client");
      localStorage.removeItem("user");
      setLogout(true);
    };
    const a = (
      <ul class="navbar-nav">
          {/* <li class="nav-item">
            <Link to="/aspcalculator" class="nav-link q" aria-current="page" >Asp calculator</Link> */}
            {/* <Link to="/" role='menuitem' className='gamutanker'>Home</Link> */}
          {/* </li>
          <li class="nav-item">
          <Link to="/aspfinder" class="nav-link q" aria-current="page" >Asp Finder</Link>
          </li> */}
          {/* <li class="nav-item">
            <a class="nav-link 1717" href="#">Pricing</a>
          </li> */}
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Asp calculator
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" value="hi" href="/aspcalculator">Myntra</a></li>
              <li><a class="dropdown-item" href="#">Flipkart</a></li>
              <li><a class="dropdown-item" href="#">Amazon</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Asp Finder
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item"  href="/aspfinderflipkart">Flipkart</a></li>
              <li><a class="dropdown-item" href="aspfindermyntra">Myntra</a></li>
              <li><a class="dropdown-item" href="aspfindereasyship">Amazon - Easy Ship</a></li>
              <li><a class="dropdown-item" href="aspfinderprimeonly">Amazon - Prime Only</a></li>
              <li><a class="dropdown-item" href="aspfinderfba">Amazon - FBA</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link-00" id="4545" href="#" style = {{"margin-left": "966px"}} onClick={logoutHandler}>Sign out</a>
          </li>
        </ul>
    )
    const b = (
      <ul class="navbar-nav">
          {/* <li class="nav-item">
            <Link to="/aspcalculator" class="nav-link active" aria-current="page" >Asp calculator</Link> */}
            {/* <Link to="/" role='menuitem' className='gamutanker'>Home</Link> */}
          {/* </li> */}
          
          {/* <li class="nav-item">
            <a class="nav-link 1717" href="#">Pricing</a>
          </li> */}
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Asp calculator
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" value="hi" href="/aspcalculator">Myntra</a></li>
              <li><a class="dropdown-item" href="#">Flipkart</a></li>
              <li><a class="dropdown-item" href="#">Amazon</a></li>
            </ul>
          </li>
         
          <li class="nav-item">
            <a class="nav-link-00" id="4545" href="#"  style = {{"margin-left": "1083px"}} onClick={logoutHandler}>Sign out</a>
          </li>
        </ul>
    )
 
  return (
    
    <div id="start">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Brand Fortunes</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        {localStorage.getItem("client") ? b :a}
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Home