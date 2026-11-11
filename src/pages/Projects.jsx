import React from 'react';
import { Link } from 'react-router-dom';
import { BASE, projects } from '@/constants';

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
			</section>
		</>
	)
};

export default Projects;