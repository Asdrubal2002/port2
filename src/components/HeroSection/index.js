import video from '../../video/vi.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP
} from './HeroElements'

const HeroSection = () => {
    
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Henry Asdrubal Rodriguez Morales</HeroH1>
                <HeroP>
                Estudiante de desarrollo de software y Análisis de datos
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection