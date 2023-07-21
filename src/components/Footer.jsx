import { HiArrowNarrowRight } from "react-icons/hi";
import { animateScroll as scroll } from "react-scroll";

const handleClick = () => {
	scroll.scrollToTop({
		smooth: true,
		duration: 400,
	});
};

export default function Footer() {
	return (
		<div>
			<footer className="mx-auto max-w-[100%] px-4 sm:px-6 md:max-w-10xl">
				<hr className="w-full h-0.5 mx-auto bg-[#EEEDF0] border-0"></hr>
				<div className="mx-auto p-4 flex text-center flex-row justify-between">
					<div className="flex flex-row items-center justify-center space-x-1 text-[#EEEDF0] sm:text-xl">
						© 2023 Braden Hollis
						<a href="/" className="hover:underline"></a>
					</div>
					<div className="flex flex-row items-center justify-center space-x-2 mb-1 text-[#EEEDF0] group sm:text-xl">
						<a
							href="#"
							onClick={handleClick}
							className="flex items-center"
						>
							<p className="mr-1">Back to Top</p>
							<span className="group-hover:-rotate-90 group-hover:translate-y-1.5 duration-300">
								<HiArrowNarrowRight className="ml-3 " />
							</span>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
