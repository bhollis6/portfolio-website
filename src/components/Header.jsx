import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";

const Header = () => {
	const [hamburger, setHamburger] = useState(false);
	const handleClick = () => setHamburger(!hamburger);

	const centerMenuItems = [
		{ to: "about", label: "About", offset: -50 },
		{ to: "project", label: "Projects", offset: 10 },
		{ to: "skills", label: "Skills", offset: -10 },
		{ to: "contact", label: "Contact", offset: -20 },
	];

	const mobileMenuItems = [
		{ to: "about", label: "About", offset: -85 },
		{ to: "project", label: "Projects", offset: -50 },
		{ to: "skills", label: "Skills", offset: -55 },
		{ to: "contact", label: "Contact", offset: 0 },
	];

	return (
        <div className="flex justify-center">
		<div className="fixed w-full h-[90px] bg-[#17181f] text-[#EEEDF0] font-sans flex pl-[9%] sm:px-8 justify-between sm:justify-between items-center z-10 mx-auto max-w-[100%] sm:max-w-[85%]">
			{/* Braden left */}
			<div className="text-3xl font-bold">Braden Hollis</div>

			{/* Center menu */}
			<div>
				<ul className="hidden md:flex items-center justify-center text-2xl px-14 mx-14">
					{centerMenuItems.map((item, index) => (
						<li key={index}>
							<Link
								to={item.to}
								spy={true}
								smooth={true}
								duration={400}
								offset={item.offset}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* Hamburger */}
			<div
				onClick={handleClick}
				className="md:hidden z-10 translate-x-[170%]"
			>
				{!hamburger ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!hamburger
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[#17181f] flex flex-col justify-center items-center"
				}
			>
				{mobileMenuItems.map((item, index) => (
					<li key={index} className="py-6 text-4xl">
						<Link
							onClick={handleClick}
							to={item.to}
							spy={true}
							smooth={true}
							duration={400}
							offset={item.offset}
						>
							{item.label}
						</Link>
					</li>
				))}
				<li className="py-6 text-5xl flex flex-row space-x-10">
					<a
						href="https://github.com/bhollis6"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/braden-hollis"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
					</a>
				</li>
			</ul>

			{/* Right menu */}
			<div>
				<ul className="hidden md:flex items-center justify-center  translate-x-5">
					<li>
						<a
							href="https://github.com/bhollis6"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub size={35} />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/braden-hollis"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin size={35} />
						</a>
					</li>
				</ul>
			</div>
		</div>
        </div>
	);
};

export default Header;
