// Hero index of mini project
import React, {useState} from 'react';
import { Button } from '../ButtonElement';
import { HeroContainer, 
          HeroText, 
          Imagebg, 
          HeroBg,
          Heroh1,
          Herop,
          HeroBtnWrapper,
          ArrowForward,
          ArrowRight } from './HeroElements';
import image from '../../images/Background.svg'

const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <>
    <HeroContainer>
        <HeroBg>
        <Imagebg> <img src={image}  alt="blockchain"/> </Imagebg>
        </HeroBg>
    
    
    <HeroText>
    <Heroh1> Join Us Now!</Heroh1>
    <Herop> Let's Together Build a community for the community by the community.</Herop>
    <HeroBtnWrapper>
    <Button to='signup' 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}> 
            Connect wallet{hover? <ArrowForward /> : <ArrowRight/>}
            </Button>
    </HeroBtnWrapper>
    </HeroText>
    </HeroContainer>
    
    
    </>  
  );

}

// <img src={image} alt="Blockchain"/>
export default HeroSection;