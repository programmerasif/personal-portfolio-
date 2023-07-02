import Lottie from "lottie-react";
import anemation from "../../assets/about1.json";
import Form from "./Form";


const Contac = () => {
    return (
        <section className='mb-40' id="contac">
            <div className='flex flex-col md:flex-row justify-center items-center text-white px-5'>
                <div className='w-full md:w-[40%] text-4xl font-bold'>
                    <h5>Contact Info</h5>
                <p className="text-sm secondary-color">Please feel free to contact me through the mail. If you need any service send me a mail and also you can give advice to me to improve my work. </p>
               <div className=""> <Lottie animationData={anemation} loop={true} /></div>
                </div>
                <div className='w-full md:w-[60%]'>

                    <Form />
                </div>
            </div>
        </section>
    );
};

export default Contac;