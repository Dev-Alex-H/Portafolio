import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hello, I'm Alex. Since I discovered the world of web development, I have dedicated my time to learning and improving my knowledge. Some of my projects are on this site.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
