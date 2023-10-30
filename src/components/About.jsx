import PhotoWall from "../assets/photo-wall.png";

export default function About() {
	return (
		<div name="about" className="h-full sm:h-screen w-full">
			<div className="flex flex-col h-full items-center justify-center mx-auto w-full">
				<div className="max-w-[100%] pl-8 sm:max-w-[85%] w-full">
					<div className="pb-8 sm:text-left">
						<p className="border-[#6c72cb] border-b-4 font-bold inline sm:text-7xl text-5xl">
							About
						</p>
					</div>
				</div>

				<div className="gap-8 grid max-w-[85%] sm:grid-cols-5 w-full">
					<div className="col-span-2 pl-0 sm:pl-8 sm:text-3xl text-left text-xl">
						<p>
							I'm a sophomore at Colorado State University
							studying computer science with a minor in
							mathematics. Right now, I am a technology intern for {" "}
							<a
						className="text-[#6c72cb] underline cursor-pointer" href="https://www.thedeltaprinciple.com/" target="blank"
					>
						The Delta Principle
					</a> and serve as vice
							president of the Association of Computing Machinery.
						</p>

						<p className="text-[#8892b0] pt-[5%] sm:pt-[8%] sm:pb-0 pb-[7%]">
							Aside from my studies, I'm a natural bodybuilder,
							big time country music fan, and avid hiker. Right
							now I'm trying new recipes and learning how to fly
							fish.
						</p>
					</div>
					<div className="col-span-3 flex justify-center items-start">
						<div className="relative -translate-y-[15%]">
							<img
								className="max-h-[80vh] max-w-full"
								src={PhotoWall}
								alt="HTML icon"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
