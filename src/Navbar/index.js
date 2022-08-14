import React,{useState} from 'react';
import { Nav,
         NavLink,
         Bars,
         NavMenu,
         NavBtn,
         NavBtnLink} from './NavbarElements';
import { Button } from '../Navbar/NavButton';
import { ArrowForward,ArrowRight } from '../components/HeroSection/HeroElements';

// Above are components which are styled using style components and exported and then here imported
const Navbar = () => {
  const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
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
          <NavLink to='/developers' activeStyle>
            Developed By
          </NavLink> 
        </NavMenu>
        <NavBtn>
        <Button to='signup' 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}> 
            Connect wallet{hover? <ArrowForward /> : <ArrowRight/>}
            </Button>
            </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar ;