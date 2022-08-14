import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 18 px;
  background-color : #fff;
  white-space: nowrap;
  padding: 10px;
  color: #000 ;
  font-size: 14px;
  outline:  none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;


  &:hover {
    transition: all 0.2s ease-in-out;
    background: #7416EE;
    color: #fff;
  };
  
`