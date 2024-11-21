'use client'
import { GrDownload } from "react-icons/gr"
import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import { GiSunglasses } from "react-icons/gi"
import { Code, Laptop } from "lucide-react"


const Hero = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1Z6kyOb7oKzEFtpTxH4O9paZIKLrYephG';
        // link.href = 'https://drive.google.com/uc?export=download&id=1CXhN2bhSm9Hx1RDSCZTDl-UQ6jEKdxMA';
        link.setAttribute('download', 'Asif_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="pb-20 pt-36">
         

            <div className="h-screen w-full dark:bg-[#202020] bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
               absolute top-0 left-0 flex items-center justify-center"
            >
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 flex items-center gap-x-2">
                        Dynamic Web Magic with Asif <Laptop /> <Code />
                    </p>

                    <TextGenerateEffect
                        words="Revolutionizing Bold Visions into Impactful, Seamless Journeys."
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi! I&apos;m <span className="font-bold text-purple">Asif</span>, a React/Next.js Developer based in <span className="text-purple">Bangladesh</span>.
                    </p>
                    <a onClick={handleDownload}>
                        <MagicButton
                            title="Download CV"
                            icon={<GrDownload />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero