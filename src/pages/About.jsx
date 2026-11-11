import { useEffect } from 'react';
import { skills, experiences } from '@/constants';
import AOS from 'aos';
import {
	VerticalTimeline,
	VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA'

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
                        className="text-green-700 font-semibold drop-shadow animate__animated animate__zoomInDown animate__duration-5s animate__delay-.5s"
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
			        className="btn-back rounded-2xl"
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
                   <div
                       className="mt-12 flex"
                   >
                       <VerticalTimeline>
                           {experiences.map(experience => (
                               <VerticalTimelineElement
                                   key={experience.company_name}
                                   date={experience.date}
                                   icon={
                                       <div
                                           className="flex justify-center items-center w-full h-full"
                                       >
                                           <img
                                               src={experience.icon}
                                               alt={experience.company_name}
                                               className="w-[60%] h-[60%] object-contain transition-all duration-2000 hover:scale-200 hover:rotate-[90deg]"
                                           />
                                       </div>
                                   }
                                   contentStyle={{
                                       'borderBottom': '8px',
                                       'borderStyle': 'solid',
                                       'borderBottomColor': experience.iconBg,
                                       'boxShadow': 'none'
                                   }}
                                   iconStyle={{
                                       background: experience.iconBg
                                   }}
                                   data-aos="fade-down"
                                   data-aos-duration="300"
                               >
                                   <div>
                                       <h3
                                           className="text-black text-xl font-poppins font-semibold transition-all duration-1000 hover:translate-y-[-5px]"
                                       >
                                           {experience.title}
                                       </h3>
                                       <p
                                           className="text-black-500 font-medium font-base"
                                           style={{margin: 0}}
                                       >
                                           {experience.company_name}
                                       </p>
                                   </div>
                                   <ul
                                       className="my-5 list-disc ml-5 space-y-2"
                                   >
                                       {experience.points.map((point, index) => (
                                           <li
                                               key={`experience-point-${index}`}
                                               className="text-black-500/70 font-normal pl-1 text-sm"
                                           >
                                               {point}
                                           </li>
                                       ))}
                                   </ul>
                               </VerticalTimelineElement>
                           ))}
                       </VerticalTimeline>
                   </div>
                </div>
                <hr
                    className="border-gray-200"
                />
                <CTA />
            </section>
        </>
    )
}

export default About;