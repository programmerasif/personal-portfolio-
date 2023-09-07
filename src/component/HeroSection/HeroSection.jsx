import './HeroSection.css'
import { Typewriter } from 'react-simple-typewriter'
import { FaDownload,FaGithub,FaLinkedin,FaFacebook,FaTwitter } from 'react-icons/fa';


const HeroSection = () => {
    return (
    
        <div className='bgImg mt-12' id='home'>
            <div className="text-white px-5 flex flex-col ms:mt-5 md:mt-auto sm:h-[100%] md:h-[80%] lg:h-full justify-end">
            <div>
            <div className=''>
                <h4 className='text-3xl md:text-5xl font-bold leading-normal'>Hi,</h4>
                <h4 className=' text-3xl md:text-5xl  font-bold leading-normal'>I'm <span className='primary-color m'>
                <Typewriter
            words={['Asif Khan',  'a Web Developer!']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
                </span> </h4>
                <button className='border-b-2 hover:bg-gray-700 mt-4 border-white px-5 py-2 rounded-lg leading-normal'>
                    <a href="/Resume of Asif.pdf" download>
                    <div className='flex  justify-center items-center gap-4' >
                    <span>My Resume</span>  <FaDownload />
                    
                    </div>
                    </a>
                </button>
                </div>
            </div>
            <div className='mt-40'>
                <div className='md:flex sm:flex-col md:flex-row sm:justify-center md:justify-between'>
                   
                        <div className='font-bold flex flex-col text-center'>
                            <div className='flex gap-14'>
                            <div className='flex items-end'><span className='text-6xl font-bold'>1</span> <span className='text-start'>Year of  <br />Experience</span></div>
                            <div className='flex items-end'><span className='text-6xl font-bold'>17</span> <span className='text-start'>Complete <br />Project</span></div>
                            </div>
                            </div>
                        <div className='font-bold flex flex-col text-center mt-5'>
                        
                        <div className='flex gap-5 mx-auto w-full'>
                            
                            <a href="https://www.linkedin.com/in/asif-khan-27185b247/" className='cursor-pointer text-3xl'> <FaLinkedin /></a>
                            <a href="https://github.com/programmerasif" className='cursor-pointer text-3xl'><FaGithub /></a>
                            <a href="" className='cursor-pointer text-3xl'><FaTwitter /></a>
                            
                            <a href="https://www.facebook.com/profile.php?id=100030845640116" className='cursor-pointer text-3xl'><FaFacebook /></a>
                        </div>
                        </div>
                </div>
            </div>


        </div>
        </div>
    );
};

export default HeroSection;