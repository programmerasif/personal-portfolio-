import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <section className=' text-white bg-gray-950' id='footer'>
            <div className='flex flex-col md:flex-row  gap-3 justify-around items-center p-6'>
                <div className='flex justify-center items-center'>
                    <img src={logo} alt="" className='w-12'/>
                    <p className='secondary-color'>Copyright © 2023 - All right reserved by Asif Khan</p>
                </div>
                <div className='flex justify-center items-center gap-12'>
                    <a href="https://www.linkedin.com/in/asif-khan-27185b247/"><FaLinkedin className='text-3xl'/></a>
                    <a href="https://github.com/programmerasif"><FaGithub className='text-3xl'/></a>
                    <a href="https://www.facebook.com/profile.php?id=100030845640116"><FaFacebook className='text-3xl'/></a>
                    
                    
                </div>
            </div>
        </section>
    );
};

export default Footer;