import {
  AboutContainer,
  AboutImg,
  AboutItem,
  AboutList,
  AboutText,
  AboutWrap,
} from './About.styled';
import About1 from '../../img/About1.jpg'
import About2 from '../../img/About2.jpg'
import About3 from '../../img/About3.jpg'

const About = () => {
  return (
    <AboutWrap>
      <AboutContainer>
        <AboutList>
          <AboutItem>
            <AboutImg src={About1}/>
            <AboutText>risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula</AboutText>
          </AboutItem>
          <AboutItem>
            <AboutText>risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula</AboutText>
            <AboutImg src={About2}/>
          </AboutItem>
          <AboutItem>
            <AboutImg src={About3}/>
            <AboutText>risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula</AboutText>
          </AboutItem>
        </AboutList>
      </AboutContainer>
    </AboutWrap>
  );
};

export default About;
