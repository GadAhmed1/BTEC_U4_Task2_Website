import { useState } from "react";
import { motion } from 'framer-motion'; // Import motion
import HeaderC from '../reusable components/header/header';
import Footer from '../reusable components/footer/footer';
import Input from './ContactInput';
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        console.log("Form Data:", formData);

        emailjs.send('service_p4k5t4g', 'template_ohhr94c', formData, 'J09oBIiMstN-zT1k2')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.log('Failed to send email.', error);
            });
    };

    // Animation variants
    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className='TheBGImage flex-grow'>
            <HeaderC />
            <div className='TheGlassEDIT p-4 w-11/12 my-10 mx-auto gap-10 flex justify-around'>
                <motion.div 
                    className='flex flex-col gap-10 w-8/12'
                    initial="hidden"
                    animate="visible"
                    variants={animationVariants}
                    transition={{ duration: 0.5 }} // Adjust duration as needed
                >
                    <p className='text-4xl'>Contact us</p>
                    <form className="gap-5 flex flex-col" onSubmit={handleSubmit}> 
                        <Input
                            imageSrc="./assets/icons/UserContactUS.svg"
                            placeholder="Name"
                            typeIn="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <Input
                            imageSrc="./assets/icons/EmailContactUs.svg"
                            placeholder="Email"
                            typeIn="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <Input
                            imageSrc="./assets/icons/EmailContactUs.svg"
                            placeholder="Message"
                            typeIn="TextArea"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className='bg-[#81a3ad] p-5 rounded-full hover:bg-[#81a3adce] text-xl transition-all'>Send Message</button>
                    </form>
                </motion.div>
                <img src="./assets/images/Contactusimage.png" alt="" className="hidden md:hidden lg:block" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />  
            <br />  
            <br />  
            <Footer />
        </div>
    );
}

export default Contact;
