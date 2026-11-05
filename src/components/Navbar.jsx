import React from 'react'
import {NavLink} from 'react-router-dom'

const NavItem = ({...props}) => {
	return (
		<>
			<NavLink
				to={props.link}
				className={
				({isActive}) =>
					`${isActive ?
						"text-green-500"
															:
						"text-black"} hover:text-gray-200 transition-transform duration-[1s] ease-in-out hover:scale-120 hover:shadow-xl`
					}
			>
				{props.text}
			</NavLink>
		</>
	);
};

const Navbar = () => {
	return (
		<>
			<header className="header">
				<NavLink
					to="/"
					className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md transition-[all] ease-in-out duration-1000 hover:shadow-xl hover:scale-110"
				>
					<img
						src="/logo.png"
						className="w-7 h-6"
					/>
				</NavLink>
				<nav
					className="flex text-lg gap-7 font-medium"
				>
					<NavItem
						text="Projects"
						link="/projects"
					/>
					<NavItem
						text="About"
						link="/about"
					/>
					<NavItem
						text="Contact"
						link="/contact"
					/>
				</nav>
			</header>
		</>
	)
}

export default Navbar;