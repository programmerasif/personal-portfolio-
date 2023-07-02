import { FaDesktop, FaRetweet } from 'react-icons/fa';
import anemation from '../../assets/about2.json'
import Lottie from "lottie-react";
import { FaArrowUp,FaArrowDown } from "react-icons/fa";
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section className="mt-40 mb-40 px-5 relative" id='about'>
            <div className='flex flex-col md:md:flex-row  text-white'>
                <div className='md:w-[60%] sm:w-full'>
                    <h5 className="text-3xl md:text-5xl font-bold mb-8">About me</h5>
                    <p className="secondary-color ">Hello, I'm Asif. As a junior web developer, I have a strong foundation in HTML, CSS, and JavaScript. I am proficient in modern web development frameworks like React, and I am also comfortable working with backend technologies such as Node.js, Firebase, MongoDB, and Express.js. I am passionate about learning new tools and techniques to continually improve my skills, and I am committed to staying up-to-date with the latest technologies. I approach my work with dedication and always strive to deliver high-quality results. I am excited to utilize my skills in creating impactful websites and contribute to the success of your company.</p>
                    <div className="mt-8 flex flex-col md:flex-row gap-8 secondary-color ">
                        <div className="flex flex-col gap-2">
                            <h5 className='flex justify-start items-center gap-4'> <span className='text-white text-4xl'><FaDesktop /></span> Front-end</h5>
                            <span>

                                <p>
                                    I am a skilled frontend developer proficient in HTML, CSS, and JavaScript. Experienced in React, Redux, and Next.js. Passionate about user-friendly interfaces and delivering impactful web experiences. Committed to high-quality results.</p>
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                        <h5 className='flex justify-start items-center gap-4'> <span className='text-white text-4xl'><FaRetweet /></span> Back-end</h5>
                            <span>
                                <p>
                                I am also experienced backend web developer proficient in Node.js, Express.js, and MongoDB. Strong in server-side logic, RESTful APIs, and collaboration with frontend teams. Committed to delivering efficient and scalable solutions..</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='md:w-[40%] sm:w-full mt-auto'>
                    <div className='flex justify-center items-center '>
                    <Lottie animationData={anemation} loop={true} />
                    </div>
                </div>
            </div>
            {/* for arraw */}
            <div className='text-4xl primary-color fixed top-72 right-4 flex flex-col gap-8 cursor-pointer z-20'>
            <Link to="home" spy={true} activeClass="secondary-color" smooth={true} offset={50} duration={500}><FaArrowUp /></Link>
            <Link to="footer" spy={true} activeClass="secondary-color" smooth={true} offset={50} duration={500} ><FaArrowDown /></Link>
            
            </div>
        </section>
    );
};

export default About;