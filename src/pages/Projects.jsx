import React from 'react';
import { Link } from 'react-router-dom';
import { BASE, projects } from '@/constants';
import CTA from '../components/CTA';

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
						projects
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
							className="lg:w-[20.5rem] w-full"
							data-aos="fade-down"
							data-aos-duration="1200"
							key={project.name}
						>
							<div
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
							</div>
							<div
									className="mt-5 flex flex-col"
								>
									<h4>
										{project.name}
									</h4>
									<p>
										{project.description}
									</p>
									<div>
										<Link
	to={project.link}
	target="_blank"
	rel="noopener noreferer"
	className="font-semibold text-green-600"
>
											Try it					
</Link>
									</div>
								</div>
						</div>
					))}
				</div>
				<hr
                    				className="border-gray-200"
                			/>
                			<CTA />
			</section>
		</>
	)
};

export default Projects;