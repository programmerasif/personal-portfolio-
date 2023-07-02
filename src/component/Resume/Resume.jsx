import { Typewriter } from 'react-simple-typewriter'
import { FaBootstrap, FaCss3, FaFire, FaGraduationCap, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import './ProgressBr.css'
import BarTemplate from './BarTemplate';
import Marquee from "react-fast-marquee";
import { SiExpress, SiMongodb, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaJs } from "react-icons/fa";


const Resume = () => {
    

    return (
        <section className='mb-40'>
            <div>
            <h5 className="text-white text-5xl font-bold text-center">
               My Resume
                </h5>
                <span className='text-white flex justify-center'>
                My  <span className='primary-color ms-2'>
                <Typewriter
            words={['Work &','Education']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
                </span>
                </span>
                <div className='grid grid-cols-1 px-4 md:grid-cols-2 text-white mt-14 gap-8'>
                    <div className='flex justify-center items-start gap-2'>
                    <div className='text-4xl mt-4'> <FaGraduationCap /></div>
                    <div>
                    <p className='secondary-color'><span className='primary-color text-sm '> English Literature Runing</span> [2020 to Present]</p>
                    <p className='text-2xl'>National University</p>
                    <p className='text-sm secondary-color'>I am currently pursuing my Bachelor of Arts degree in English, focusing on developing language proficiency, analytical skills, and exploring the cultural and historical contexts of literature. I am passionate about effective communication and expressive language.</p>
                    </div>
                    </div>
                    <div className='flex justify-center items-start gap-2'>
                    <div className='text-4xl mt-4'><FaGraduationCap /></div>
                    <div><p className='secondary-color'><span className='primary-color text-sm '><span className='text-2xl'></span>Complite web development Course</span> [2022 to Presen]</p>
                    <p className='text-2xl'>Programming Hero</p>
                    <p className='text-sm secondary-color'>I am currently enrolled in a web development course since December 2022, continuously updating skills in frontend and backend development. Actively applying knowledge to real-world projects and staying current with industry trends.</p></div>
                    
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 p-3 md:grid-cols-3 gap-8 mt-12'>
           
            <BarTemplate title='Javascript' persent={80} />
            <BarTemplate title='React' persent={85} />
            <BarTemplate title='Node.Js' persent={60}/>
            <BarTemplate title='Expres.js' persent={70}/>
            <BarTemplate title='Html' persent={95}/>
            <BarTemplate title='Css' persent={85}/>
            <BarTemplate title='MongoDB' persent={70}/>
            <BarTemplate title='Tailwind' persent={85}/>
            <BarTemplate title='Bootstrap' persent={80}/>
            <BarTemplate title='Redux' persent={60}/>
            <BarTemplate title='Firebase' persent={70}/>
            <BarTemplate title='Typscript' persent={50}/>

            </div>
           <div className='text-white mt-5'>
           <Marquee>
    <div className='px-8 ms-3 py-3 border-2 border-[#67DB52] rounded-md text-xl flex justify-center items-center gap-2'>Javascript <FaJs /></div>
    <div className='px-8 ms-3 py-3 border-2 border-[#67DB52] rounded-md text-xl flex justify-center items-center gap-2'>React.js <FaReact /></div>
    <div className='px-8 ms-3 py-3 border-2 border-[#67DB52] rounded-md text-xl flex justify-center items-center gap-2'>Node.js <FaNodeJs /></div>
    <div className='px-8 ms-3 py-3 border-2 border-[#67DB52] rounded-md text-xl flex justify-center items-center gap-2'>Express.js <SiExpress /></div>
    <div className='px-8 ms-3 py-3 border-2 border-[#67DB52] rounded-md text-xl flex justify-center items-center gap-2'>MongoDB <SiMongodb /> </div>
    <div className='px-8 ms-3 py-3 border-2 border-[#67DB52] rounded-md text-xl flex justify-center items-center gap-2'>Html <FaHtml5 /></div>
    <div className='px-8 ms-3 py-3 border-2 border-[#67DB52] rounded-md text-xl flex justify-center items-center gap-2'>Css <FaCss3 /></div>
    <div className='px-8 ms-3 py-3 border-2 border-[#67DB52] rounded-md text-xl flex justify-center items-center gap-2'> Tailwind <SiTailwindcss /></div>
    <div className='px-8 ms-3 py-3 border-2 border-[#67DB52] rounded-md text-xl flex justify-center items-center gap-2'>Bootstrap <FaBootstrap /></div>
    <div className='px-8 ms-3 py-3 border-2 border-[#67DB52] rounded-md text-xl flex justify-center items-center gap-2'>Redux <SiRedux /></div>
    <div className='px-8 ms-3 py-3 border-2 border-[#67DB52] rounded-md text-xl flex justify-center items-center gap-2'>Typscript <SiTypescript /></div>
    <div className='px-8 ms-3 py-3 border-2 border-[#67DB52] rounded-md text-xl flex justify-center items-center gap-2'>Firebase <FaFire /></div>
    
  </Marquee>
             </div>
        </section>
    );
};

export default Resume;