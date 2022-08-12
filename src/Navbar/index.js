import React from 'react';
import { Nav,
         NavLink,
         Bars,
         NavMenu,
         NavBtn,
         NavBtnLink} from './NavbarElements';

// Above are components which are styled using style components and exported and then here imported
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('./Logo.png')} alt="Logo"/> 
        </NavLink>
        <Bars/>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink> 
          <NavLink to='/services' activestyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar ;