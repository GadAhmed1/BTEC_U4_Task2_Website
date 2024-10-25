import HeaderC from '../reusable components/header/header';
import Footer from '../reusable components/footer/footer';
import ContactUs from './ContactInput';
function Contact() {
    return (
        <div className='TheBGImage flex-grow'>
            <HeaderC></HeaderC>
            <div className='TheGlassE p-4 w-11/12 my-10 mx-auto'>
                <p className='text-4xl'>Contact us</p>
                <ContactUs/>
                <ContactUs/>
                <ContactUs/>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact