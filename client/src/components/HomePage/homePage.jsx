import HeaderC from './header/header';
import HeroSection from './heroSection/HeroSection';
import AboutUsCard from './Cards/CardsRow'
function HomePage() {
  return (
    <div className='TheBGImage'>
        <HeaderC></HeaderC>
        <HeroSection></HeroSection>
        <AboutUsCard></AboutUsCard>
    </div>
  )
}

export default HomePage