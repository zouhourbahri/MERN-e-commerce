import React, { useState } from 'react';
import { FaBars, FaSearch, FaShoppingCart, FaShopware } from 'react-icons/fa';
import SideBar from '../SideBar/SideBar';
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
      <ul className="subList">
        <li>
        <FaBars style={{width: "35px", height: "35px", color:"rgba(202, 36, 64, 0.904)"}}  onClick= {()=> {setSide(!side)}} /> </li>
          <li > <a href="#" className='liElement'> Best Sales </a> </li>
          <li> <a href="#" className='liElement'> Last ADD </a> </li>
          <li> <a href="#" className='liElement'> Client Service </a> </li>
          <li> <a href="#" className='liElement'> High Tech </a> </li>
          <li> <a href="#" className='liElement'> Books </a> </li>
        </ul>
      <nav className="navigationbar" id={side? "sidebar-wrapper1" : "sidebar-wrapper"}>
        <SideBar />
      </nav>
    </div>
  );
}

export default Navbar;
