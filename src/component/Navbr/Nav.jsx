import { useState } from 'react';
import logo from '../../assets/logo.png'
import { FaBars} from "react-icons/fa";
import { FaXmark} from "react-icons/fa6";
import { Link } from 'react-scroll'
import { FaHome,FaClipboard,FaBriefcase,FaUserFriends,FaFolderOpen,FaDochub } from "react-icons/fa";

const Nav = () => {
    const [isOpen,setOpen] = useState(true)
    
    const handelclick = () =>{
        setOpen(!isOpen)
    }
    return (
        <>
        {/* desktop */}
        <div className='hidden md:flex  items-center text-white px-8 py-4 fixed top-0 gap-[58rem] bg-[#010101de] z-10'>
            <div className="w-[55px] flex justify-center items-center"> 
            < img  className="rounded-full w-14 mr-2"src={logo} alt="" />
            <div className='flex'>
                <span className='text-2xl'>ASIF</span>
                <span className='text-xs flex gap-1 mt-9 -ms-10'>
                    <span>Web</span>
                    <span className='primary-color'>Developer</span>
                </span>
            </div>
            </div>
            <div>
                <ul className='flex justify-between items-center gap-8'>
                    <Link to="home" spy={true} activeClass="border-b-4 border-[#67DB52]" smooth={true} offset={50} duration={500}><li className='cursor-pointer'>Home</li></Link>
                    <Link to="about" spy={true} activeClass="border-b-4 border-[#67DB52]" smooth={true} offset={50} duration={500} ><li className='cursor-pointer'>About</li></Link>
                    <Link to="work" spy={true} activeClass="border-b-4 border-[#67DB52]" smooth={true} offset={50} duration={500} ><li className='cursor-pointer'>Works</li></Link>
                    <Link to="contac" spy={true} activeClass="border-b-4 border-[#67DB52]" smooth={true} offset={50} duration={500} ><li className='cursor-pointer'>Contact</li></Link>
                    <Link  spy={true} activeClass="border-b-4 border-[#67DB52]" smooth={true} offset={50} duration={500} > <li className='cursor-pointer'>Blog</li></Link>
                    <li className='cursor-pointer'><a href="/Resume of Asif.pdf" target='_blank' download>Rresume </a></li>
                </ul>
            </div>
        </div>
        {/* mobile */}
      <div onClick={handelclick} className='text-white md:hidden px-4 bg-gray-950 z-20  w-full p-5 text-3xl top-0 fixed flex justify-between items-center'>
        <div className=" flex justify-center items-center"> 
           
            <div className='flex'>
                <span className='text-xl'>ASIF</span>
                <span className='text-xs flex gap-1 mt-9 -ms-8'>
                    <span>Web</span>
                    <span className='text-green-500'>Developer</span>
                </span>
            </div>
        </div>
        <div>
        {
            isOpen == true ? <FaBars /> : <FaXmark />
        }
        </div>
        
        
        
      </div>
      <ul className={`text-white md:hidden z-40 duration-500 fixed w-44 bg-gray-950  p-3 rounded text-center ${!isOpen ? ' top-16 ml-52 z-10' :' -top-72 '} `}>
      <Link to="home" spy={true} activeClass="border-b-4 border-[#67DB52]" smooth={true} offset={50} duration={500}><li className='cursor-pointer border-t-4 border-[#67DB52] py-2 flex justify-start items-center gap-3'><FaHome /> Home</li></Link>
                    <Link to="about" spy={true} activeClass="border-b-4 border-[#67DB52]" smooth={true} offset={50} duration={500} ><li className='cursor-pointer border-t-4 border-[#67DB52] py-2 flex justify-start items-center gap-3'><FaClipboard /> About</li></Link>
                    <Link to="work" spy={true} activeClass="border-b-4 border-[#67DB52]" smooth={true} offset={50} duration={500} ><li className='cursor-pointer border-t-4 border-[#67DB52] py-2 flex justify-start items-center gap-3'><FaBriefcase /> Works</li></Link>
                    <Link to="contac" spy={true} activeClass="border-b-4 border-[#67DB52]" smooth={true} offset={50} duration={500} ><li className='cursor-pointer border-t-4 border-[#67DB52] py-2 flex justify-start items-center gap-3'><FaUserFriends /> Contact</li></Link>
                    <Link  spy={true} activeClass="border-b-4 border-[#67DB52]" smooth={true} offset={50} duration={500} > <li className='cursor-pointer border-t-4  border-[#67DB52] py-2 flex justify-start items-center gap-3'><FaFolderOpen /> Blog</li></Link>
                    <li className='cursor-pointer border-t-4 border-b-4 border-[#67DB52] py-2'><a href="/Resume of Asif's.pdf" target='_blank' download className='flex justify-start items-center gap-3'><FaDochub /> Rresume </a></li>
      </ul>
        </>
    );
};

export default Nav;