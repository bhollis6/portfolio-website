import tdpLanding from "../assets/projects/tdp_landing.JPG";
import chatGPTProject from "../assets/projects/chatGPT2.jpg";
import portfolioWebsiteProject from "../assets/projects/portfolio_website_project.JPG";
export default function Project() {
	const projects = [
		{
			image: chatGPTProject,
			title: "ChatGPT Clone",
			demoLink: "https://chatgpt-clone6.netlify.app/",
			codeLink: "https://github.com/bhollis6/chatgpt-clone",
			class: "shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-1",
		},
		{
			image: portfolioWebsiteProject,
			title: "Portfolio Website",
			demoLink: ".",
			codeLink: "https://github.com/bhollis6/portfolio-website",
			class: "shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-2",
		},
		{
			image: tdpLanding,
			title: "TDP Landing Page",
			demoLink: "https://tdplanding.netlify.app/",
			codeLink: "https://github.com/bhollis6/tdp-landing-reactapp",
			class: "shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-3",
		},
	];

	return (
		<div name="project" className="w-full sm:h-screen h-full">
			<div className="max-w-[100%] sm:max-w-[85%] mx-auto p-8 flex flex-col justify-center w-full h-full">
				<div className="pb-6 sm:pb-10">
					<p className="text-5xl sm:text-7xl font-bold inline border-b-4 border-[#6c72cb]">
						Projects
					</p>
					<p className="text-xl pt-6 sm:text-3xl">
						Check out my recent work:{" "}
					</p>
				</div>
				{/* Card container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* Card items */}
					{projects.map((project, index) => (
						<div
							key={index}
							style={{ backgroundImage: `url(${project.image})` }}
							className={project.class}
						>
							{/* Hover */}
							<div className="opacity-0 group-hover:opacity-100 flex flex-col">
								<span className="text-4xl font-bold text-[#EEEDF0] tracking-wider text-center">
									{project.title}
								</span>
								<div className="pt-8 text-center">
									<a
										href={project.demoLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#EEEDF0] text-[#17181f] font-bold text-2xl">
											Demo
										</button>
									</a>
									<a
										href={project.codeLink}
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#EEEDF0] text-[#17181f] font-bold text-2xl">
											Code
										</button>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
