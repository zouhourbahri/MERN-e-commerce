import React, { useState } from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaShopware } from 'react-icons/fa';
// import SideBar from '../SideBar/SideBar';
import './Navbar.css';

const Navbar = () => {
  const [side, setSide] = useState(true)
  const [drop, setDrop] = useState(true)
  return (
    <div>
      <div className="logo">
      <FaShopware style={{color:'bisque', width:'100px', height:'50px', margin:'3px 0px'}} />
      <i style={{color:'bisque', fontSize:'2.5rem', fontWeight:'sans-serif, italic'}}> TUNISHOP</i>
      <form className='searchZone'>
      <select className='selectZone'>
        <option value= " Category"> CATEGORY</option>
        <option value= " "> </option>
        <option value= " "> </option>
        <option value= " "> </option>
        <option value= " "> </option>
        <option value= " "> </option>
        <option value= " "> </option>
      </select>
      <input  className='inputZone' style={{height:'38px', padding:'0px', border:'inherit'}} type='text' placeholder='search here ...' />
      <button className='search-btn'>
        <FaSearch style={{color:'white', width:'50px', height:'20px', margin:'5px'}}/>
        </button>
      </form>
      <ul className="list">
        <li className="listElement">
          <a href="#" className="listLink"> SignIn</a>
        </li>
        <li className="listElement">
          <a href="#" className="listLink"> SignUp</a>
        </li>
        <li className="listElement">
          <a href="#" className="listLink"> Contact Us</a>
        </li>
        <li className="listElement">
          <FaShoppingCart style={{color:'bisque', width:'40px', height:'20px'}} />
          <a href="#" className="listLink"> Panier</a>
        </li>
      </ul>
      </div>
      <div style={{display:"flex"}}>
      {/* <SideBar /> */}
      <div id="wrapper">
        <nav className="navbar fixed-top" id={side? "sidebar-wrapper1" : "sidebar-wrapper"}>
            <ul className="nav sidebar-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#team">Team</a></li>
                <li className="dropdown">
                    <a href="#works" onClick= {()=> {setDrop(!drop)}}>
                        Works 
                        <span style={{marginLeft:'20px'}}>
                        <span className="caret"></span>
                        </span>
                    </a>
                    <ul className={drop? "coloring is-closed" : "coloring is-open"}>
                    <li><a href="#pictures">Pictures</a></li>
                    <li><a href="#videos">Videeos</a></li>
                    <li><a href="#books">Books</a></li>
                    <li><a href="#art">Art</a></li>
                    <li><a href="#awards">Awards</a></li>
                    </ul>
                </li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#followme">Follow me</a></li>
            </ul>
        </nav>
        <FaBars style={{ padding: "5px", width: "40px", height: "30px", marginTop: "50px" }}  onClick= {()=> {setSide(!side)}} className={side? "hamburger is-closed" : "hamburger is-open"}/>
    </div>
      <div className={side? "subnav" : "subnavOpened"}>
        <ul className={side? 'subList subListClosed' : 'subList1 subListOpened'}>
          <li > <a href="#" className='liElement'> Best Sales </a> </li>
          <li> <a href="#" className='liElement'> Last ADD </a> </li>
          <li> <a href="#" className='liElement'> Client Service </a> </li>
          <li> <a href="#" className='liElement'> High Tech </a> </li>
          <li> <a href="#" className='liElement'> Books </a> </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
