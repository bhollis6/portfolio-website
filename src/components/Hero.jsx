/* eslint-disable jsx-a11y/anchor-is-valid */

import { HiArrowNarrowRight } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import * as Scroll from "react-scroll";

export default function Hero() {
	return (
		<div className="h-full w-full sm:h-screen">
			<div className="max-w-[100%] sm:max-w-[85%] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-[#6c72cb] text-2xl sm:mt-0 mt-[35%]">
					Hello, my name is
				</p>
				<h1 className="text-4xl sm:text-8xl font-bold">
					Braden Hollis
				</h1>
				<h2 className="text-4xl sm:text-8xl font-bold text-[#8892b0]">
					Programmer and Leader
				</h2>
				<p className="text-[#8892b0] py-4 max-w[700] text-2xl max-w-4xl">
					Welcome to my personal portfolio website! I'm Braden, a
					dedicated computer science student passionate about creating
					innovative and practical solutions. Explore my portfolio to
					discover my projects, skills, and learn more{" "}
					<a
						className="text-[#6c72cb] underline cursor-pointer"
						onClick={() =>
							Scroll.scroller.scrollTo("about", {
								smooth: true,
								duration: 400,
								offset: -50,
							})
						}
					>
						about me.
					</a>
				</p>

				<div className="flex space-x-4 mb-10 sm:mb-0 whitespace-nowrap">
					<button
						onClick={() =>
							Scroll.scroller.scrollTo("project", {
								smooth: true,
								duration: 400,
							})
						}
						className="btn text-white group border-2 text-lg  px-6 py-3 my-2 flex items-center hover:bg-[#6c72cb] hover:[#6c72cb]"
					>
						View Work
						<span className="group-hover:rotate-90 group-hover:-translate-y-1.5 duration-300">
							<HiArrowNarrowRight className="ml-3 " />
						</span>
					</button>

					<a
						href="https://drive.google.com/file/d/1DJMeavHIRa0XumfMW0FoTdnklI3jsr0J/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="text-[#6c72cb] text-lg bg--[#8892b0] group border-2 px-6 py-3 my-2 border-[#6c72cb] flex items-center hover:bg-[#EBF1F5] hover:[#6c72cb]">
							Resume
							<span className="group-hover:animate-ping">
								<FiExternalLink className="ml-2 " />
							</span>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
