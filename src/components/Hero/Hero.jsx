import { HeroBg, HeroWrap } from "./Hero.styled"
import HeroBgImg from "./../../img/9-156.jpg"

const Hero = () => {
    return (
        <HeroWrap>
            <HeroBg src={HeroBgImg} alt="Hero Banner"/>
        </HeroWrap>

    )
}

export default Hero;