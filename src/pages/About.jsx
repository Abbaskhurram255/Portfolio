import { useEffect } from 'react';
import { skills } from '@/constants';
import AOS from 'aos';

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <section
                className="max-container"
                data-aos="fade-in"
                data-aos-duration="1000"
            >
                <h1
                    className="head-text"
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                >
                    Hello, I'm
                     <pre
                        className="text-green-700 font-semibold drop-shadow animate__animated animate__zoomInDown animate__delay-.25s"
                    >
                        Khurram Ali
                    </pre>
                </h1>
                <div
                    className="mt-5 flex flex-col gap-3 text-slate-600"
                    data-aos="fade-down"
                    data-aos-duration="1200"
                >
                    <p>
                        Data Scientist, ML Engineer based in Karachi, focusing on building production-ready applications for clients. Knows Data Science, Data Structures, ML Algorithms, some Pytorch, and also knows Neural Networks learn. Also knows how to build chatbot assistants with Gemini, and Groq.
                    </p>
                </div>
                <div
                    className="skill-section py-10 flex flex-col"
                >
                    <h3
                        className="subhead-text"
                    >
                        My Skills
                    </h3>
                    <div
                        className="mt-16 flex flex-wrap gap-12"
                        data-aos="zoom-out-down"
                        data-aos-duration="2500"
                    >
                            {
                                skills.map(
                                    skill => (
                                        <>
                                            <div
                                                className="block-container w-20 h-20"
                                            >
                                                    <div
			        className="btn-back rounded-4xl"
                                                    />
                                                    <div
                                                        className="btn-front rounded-xl flex justify-center items-center"
                                                    >
                                                            <img
                                                                src={skill.imageUrl}
                                                                alt={skill.name}
                                                                title={skill.name}
                                                                className="w-1/2 h-1/2 object-contain transition-all ease-in-out duration-500 hover:translate-[-.5rem] hover:scale-110 hover:skew-y-[1rem] hover:drop-shadow-lg"
                                                            />                                                                                        
                                                    </div>
                                            </div>
                                        </>
                                    )
                                )
                            }
                    </div>
                </div>
                <div
                    className="experience-section py-16"
                    data-aos="flip-up"
                    data-aos-duration="1200"
                >
                    <h3
                       className="subhead-text"
                   >
                       Work Experience
                   </h3>
                   <div
                       className="mt-5 flex flex-col gap-3 text-slate-500"
                   >
                           <p>
                               Worked with all sorts of companies, leveling up my skill, and teaming with smart people. Here's the rundown:
                           </p>
                   </div>
                   <div>
                       
                   </div>
                </div>
            </section>
        </>
    )
}

export default About;