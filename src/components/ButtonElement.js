import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 0px;
  background-color : #7416EE;
  white-space: nowrap;
  padding: 12px;
  color: #fff ;
  font-size: 20px;
  outline:  none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;


  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
  };
  
`