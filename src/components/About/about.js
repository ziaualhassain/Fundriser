import React from 'react';
import Icon1 from '../../images/Svg-1.svg'
import Icon2 from '../../images/Svg-2.svg';
import Icon3 from '../../images/Svg-3.svg';
import { ServicesContainer,
         ServicesH1, 
         ServicesH2, 
         Servicescard, 
         ServicesWrapper,
         ServicesIcon, 
         ServicesP  } from './AboutElements';

const About = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1> The Core Idea! </ServicesH1>
        <ServicesWrapper>
            <Servicescard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Explore the New StartUps</ServicesH2>
                <ServicesP> Get Asscociated with the new age ideas and be an part of revolution.</ServicesP>
            </Servicescard>

            <Servicescard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Decentralised Currency</ServicesH2>
                <ServicesP> Invest from anywhere from the globe with ETH.</ServicesP>
            </Servicescard>

            <Servicescard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Block Chain</ServicesH2>
                <ServicesP> To bring the transparency and Trust with more peer-to-peer connection.</ServicesP>
            </Servicescard>

        </ServicesWrapper>
    </ServicesContainer>
  );
}

export default About;
