import HeaderC from '../reusable components/header/header';
import HeroSection from './heroSection/HeroSection';
import AboutUsCard from './Cards/CardsRow'
import Footer from '../reusable components/footer/footer';
function HomePage() {
  return (
    <div className='TheBGImage'>
      <div className=" h-full">
        <HeaderC></HeaderC>
        <HeroSection></HeroSection>
        {/* <AboutUsCard></AboutUsCard> */}
      </div>
        <Footer></Footer> 
    </div>
  )
}

export default HomePage