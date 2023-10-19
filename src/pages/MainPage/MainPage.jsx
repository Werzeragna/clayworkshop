import About from '../../components/About/About';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import {MainPageWrap} from './MainPage.styled'
const MainPage = () => {
  return (
    <MainPageWrap>
  <Header />
  <Hero/>
  <About/>
  </MainPageWrap>
  );
};

export default MainPage;
