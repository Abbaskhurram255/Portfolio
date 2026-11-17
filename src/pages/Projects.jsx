import React from 'react';
import { Link } from 'react-router-dom';
import { BASE, projects } from '@/constants';
import CTA from '../components/CTA';

const ToGH = ({project, children}) => (
	<Link
		to={project.repoLink ?? project.downloadLink}
		target="_blank"
                                rel="noopener noreferrer"
	>
		{children}
	</Link>
);

const Projects = () => {
    return (
        <>
            <section
                className="max-container"
                data-aos="fade-in"
                data-aos-duration="1000"
            >
                <h1
                    className="head-text"
                    data-aos="zoom-out-down"
                    data-aos-duration="1500"
                >
                    My
                    <pre
                        className="text-green-700 font-semibold drop-shadow animate__animated animate__zoomInRight animate__duration-5s animate__delay-.5s"
                >
                        <span
                            className="text-yellow-700"
                        >
                            pro
                        </span>
                        <span
                            className=""
                        >
                            jects
                        </span>
                    </pre>
                </h1>
                <div
                    className="mt-5 flex flex-col gap-3 text-slate-600"
                    data-aos="fade-down"
                    data-aos-duration="1200"
                >
                    <p>
                        I've worked on many projects over the years, but these are the ones I hold closest to my heart. I mostly work on Python, React, and Node. If you come accross something that interests you, and want to hire me, or are just looking for a fellow developer to collaborate with, feel free to reach me through the <Link to={`${BASE}/contact`} className="font-semibold hover:underline">contact</Link> section.
                    </p>
                </div>
                <div
                    className="flex flex-wrap my-20 gap-16"
                >
                    {projects.map(project => (
                        <div
                            className="group lg:w-[20.5rem] w-full lg:mb-1"
                            data-aos="fade-down"
                            data-aos-duration="1200"
                            key={project.name}
                        >
                            <ToGH project={project}><div
                                className="block-container w-12 h-12"
                                data-aos="fade-up-left"
                                data-aos-duration="1500"
                            >
                                <div
                                    className={`btn-back rounded-xl ${project.theme}`}
                                />
                                <div
                                    className="btn-front rounded-xl flex justify-center items-center"
                                >
                                    <img
                                        src={project.iconUrl}
                                        alt="project icon"
                                        className="w-1/2 h-1/2 object-contain"
                                    />
                                </div>
                            </div></ToGH>
                            <div
                                className="mt-5 flex flex-col"
                            >
                                    <ToGH project={project}><h4
                                        className="text-[1.125rem] font-poppins font-[500] transition-all duration-1000 hover:translate-y-[-.25rem]"
                                    >
                                        {project.name}
                                    </h4></ToGH>
                                    <ToGH project={project}><p
                                        className="mt-2 text-gray-600 transition-all duration-2000 hover:scale-103 hover:translate-x-4 hover:translate-y-1 hover:border-l-1 hover:border-gray-600"
                                    >
                                        {project.description}
                                    </p></ToGH>
                                    <div
                                        className="mt-4 flex items-center gap-2 font-poppins"
                                    >
                                        <Link
                                            to={project.downloadLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-semibold text-green-600 transition-all duration-1000 hover:scale-120 hover:text-yellow-700 hover:drop-shadow-xl hover:underline"
                                        >
                                            Try it                    
                                        </Link>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
                <hr
                    className="border-slate-200"
                />
                <CTA />
            </section>
        </>
    )
};

export default Projects;