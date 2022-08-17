//styling using components of the react
import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
  background: #1F2024;
  display: flex;
  jsutify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overfow: hidden;
`
export const HeroText = styled.div`
 position: absolute;
 z-index: 3;
 max-width: 1200px;
 padding: -10 px 24px;
 display: flex;
 flex-direction: column;
 align-items: center;

`
export const Imagebg = styled.image`
   position: flex;
   width: 100%;
   height: 100%;
   -o-object-fit: cover;
   object-fit: cover;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const VideBg = styled.video`
   width: 100%;
   height: 100%;
   -o-object-fit: cover;
   object-fit: cover;
   background: #fff;

  @media screen and (max-width: 650px) {
    background-position: center;
    align-items: flex-end;
    justify-content: center;
  }
`;

export const Heroh1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`;

export const Herop = styled.p`
   margin-top: 24px;
   color: #fff;
   font-size: 18px;
   text-align: center;
   max-width: 600px;

   @media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
    font-size: 15px;
}
`;

export const HeroBtnWrapper = styled.button`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
 margin-left: 8px;
 font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
