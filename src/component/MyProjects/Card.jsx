import { FaEye } from "react-icons/fa";
import Popup from "reactjs-popup";
import './Popup.css'
import { FaHandPointRight } from "react-icons/fa";

const Card = ({ img, title, count, subtitle, featurOne,featurTwo,featurThree,live,git,description }) => {
    
    return (
        <section>
            <div className="flex justify-center items-center text-white text-center">
                <div>
                    <span className="text-white flex justify-start items-center text-xl md:text-2xl mb-5">{count}. {title} <span className="primary-color text-sm ms-4">[{subtitle}]</span></span>
                    <div className="relative group">
                        <img src={img} alt="" className="rounded-md" style={{ width: '100%', height: '200px' }} />
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-lg bg-black w-full h-full opacity-50 flex justify-center items-center ring-4 rounded-md ring-[#67DB52]"><span className=" ring-[#67DB52] ring-2 rounded-md p-2 cursor-pointer ">

                                <div className="w-[50%] mx-auto">
                                <Popup
                                    trigger={<button className="button w-28">  <div className="flex justify-start items-center">
                                             <span>View</span> <FaEye />
                                        </div> </button>}
                                    modal
                                    nested
                                >
                                    {close => (
                                        <div className="modal sm:h-full w-[95%] md:w-[60%] mx-auto">
                                            
                                            <div className="header"> {title}</div>
                                            <div className="content">
                                                {' '}
                                                <div className="text-sm mb-4">
                                                    {description}
                                                </div>
                                                
                                               <div className="flex flex-col justify-center items-start">
                                               <p className="flex justify-center items-center gap-3"> <span className="text-2xl"><FaHandPointRight /></span> {featurOne}</p>
                                                <br />
                                                <p className=" flex justify-center items-center gap-3"><span className="text-2xl"> <FaHandPointRight /></span> {featurTwo}</p>
                                                <br />
                                                <p className="mb-5 flex justify-center items-center gap-3"> <span className="text-2xl"><FaHandPointRight /></span> {featurThree}</p>
                                               </div>
                                                <div className="mt-8 flex justify-between items-center">
                                                    <div className="flex gap-5 text-blue-600 font-bold cursor-pointer">
                                                        <a href={git}>Live Link</a>
                                                        <a href={live}>Code Link</a>
                                                    </div>
                                                    <button className="ring-2 px-6 py-3 rounded-md" onClick={close}>
                                                close
                                            </button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    )}
                                </Popup>
                                </div>
                            </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;



{/* <span>Veiew Detils</span> <FaEye /></div> </span> */ }