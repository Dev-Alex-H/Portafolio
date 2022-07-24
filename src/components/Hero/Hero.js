import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, i'm <br />
          Alexander Henao
        </SectionTitle>
        <SectionText>
        I'm a Front-end developer.
        </SectionText>
        <Button onClick={() => window.location = '#about'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;