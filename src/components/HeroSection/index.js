// Hero index of mini project
import React, {useState} from 'react';
import Form from '../Form/Form';
import { Button } from '../ButtonElement';
import { HeroContainer, 
          HeroText, 
          Imagebg,
          VideBg, 
          HeroBg,
          Heroh1,
          Herop,
          HeroBtnWrapper,
          ArrowForward,
          ArrowRight} from './HeroElements';
import image from '../../images/Background-1.svg';
import video from '../../images/video.mp4';

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
    <Herop> Let's Together Build a community for the community by the community.<br></br>
    </Herop>
    <HeroBtnWrapper>
    <Button onClick="/"
            onMouseEnter={onHover} 
            onMouseLeave={onHover}> 
            Connect wallet{hover? <ArrowForward /> : <ArrowRight/>}
            </Button>
    </HeroBtnWrapper>
    <Herop> </Herop>
    <Herop> </Herop>
    <Form/>
    </HeroText>
    </HeroContainer>
    
    </>  
  );

}

// <img src={image} alt="Blockchain"/>
// <Imagebg> <img src={image}  alt="blockchain"/> </Imagebg>
// <VideBg autoplay loop muted src={video} type='video/mp4'/>
export default HeroSection;