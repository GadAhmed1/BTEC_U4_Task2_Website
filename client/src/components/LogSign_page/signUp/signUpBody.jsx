import HeaderC from '../../reusable components/header/header';
import Footer from '../../reusable components/footer/footer';
import TheForm from './signUpForm';
function SignUpForm() {
  return (
    <div className='TheBGImage flex-grow'>
        <HeaderC />
        <TheForm/>
        <div className='absolute bottom-0 w-full'>
        <Footer />
        </div>
    </div>
  )
}

export default SignUpForm