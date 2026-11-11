import React from 'react';
import { Link } from 'react-router-dom';
import { BASE } from '@/host_constants';

const CTA = () => {
	return (
		<>
			<section
				className="cta bg-green-700 p-6 rounded-2xl"
			>
				<p
					className="cta-text text-gray-200"
				>
					Have a project in mind?
					<br/>
					Let's build something together
				</p>
				<Link
					to={`${BASE}/contact`}
					className="p-3 text-black bg-yellow-500 transition-all duration-1000 ease-in-out hover:scale-110 hover:drop-shadow hover:bg-yellow-300 rounded-xl"
					>
					Contact
				</Link>
			</section>
		</>
	);
};

export default CTA;