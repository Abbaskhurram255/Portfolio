import React from 'react'
import { Link } from 'react-router-dom'
import { contact, arrow } from '../assets/icons'
import { BASE } from '@/constants'

const InfoBox = ({ text, link, btnText }) => (
	<>
		<div
			className="bg-green-900/60 p-4 rounded-xl text-gray-100 lg:w-[25%] sm:w-[35%] w-[50%] 2xl:text-[1.025rem]"
		  >
				{text}
			<Link
				className="block pt-2 w-[30%] text-white hover:text-orange-300 transition-transform ease-in-out duration-800 hover:translate-y-[.125rem] hover:scale-105 hover:shadow-gray-800/20 hover:shadow-lg"
				to={`${BASE}${link}`}
			>
				{btnText}
			</Link>
		</div>
		
	</>
);

const stages = {
	1: (
		<>
			<h1
				className="sm:text-xl sm:leading-snug text-center text-yellow-100 bg-green-900/60 py-4 px-8 text-white mx-5 rounded-2xl"
			>
				Hi, I am
				<pre className="font-semibold">
					Khurram Ali 👋🏻
				</pre>
				<br/>
				<span className="block">
					a Python developer
				</span>
				<span className="block">
					from Karachi
				</span>
				<br />
				<span className="text-xs">
					with skills in Data Science, AI, ML,
				</span>
				<br />
				<span className="text-xs">
					and GUI development
				</span>
			</h1>
		</>
	),
	2: (
		<InfoBox
			text="Worked with many companies, and learned many skills along the way"
			link="/about"
			btnText="Learn More>"
		/>
	),
	3: (
		<InfoBox
			text="Led multiple projects to success over the years. Curious?"
			link="/projects"
			btnText="Projects>"
		/>
	),
	4: (
		<InfoBox
			text="Need a project done, or looking for a dev?"
			link="/contact"
			btnText="Contact>"
		/>
	)
}

export default function HomeInfo({ currentStage }) {
	return stages[currentStage] || null;
};