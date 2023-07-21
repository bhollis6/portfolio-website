import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Python from "../assets/python.png";
import Java from "../assets/java.png";

function SkillCard({ src, alt, skillName }) {
	return (
		<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
			<img className="w-[25%] mx-auto" src={src} alt={alt} />
			<p className="my-4">{skillName}</p>
		</div>
	);
}

export default function Skills() {
	return (
		<div name="skills" className="w-full sm:h-screen h-full">
			<div className="max-w-[100%] sm:max-w-[85%] mx-auto p-8 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-5xl sm:text-7xl font-bold inline border-b-4 border-[#6c72cb]">
						Skills
					</p>
					<p className="pt-6 pb-2 text-xl sm:text-3xl">
						I'm proficient in these technologies:
					</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center sm:py-8 text-lg pt-8">
					<SkillCard src={Java} alt="Java icon" skillName="JAVA" />
					<SkillCard
						src={Python}
						alt="Python icon"
						skillName="PYTHON"
					/>
					<SkillCard
						src={ReactImg}
						alt="React icon"
						skillName="REACT"
					/>
					<SkillCard
						src={JavaScript}
						alt="JavaScript icon"
						skillName="JAVASCRIPT"
					/>
					<SkillCard src={HTML} alt="HTML icon" skillName="HTML" />
					<SkillCard src={CSS} alt="CSS icon" skillName="CSS" />
				</div>
			</div>
		</div>
	);
}
