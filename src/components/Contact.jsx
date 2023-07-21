/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Contact() {
	const handleEmailClick = () => {
		window.location.href = "mailto:blh04co@gmail.com";
	};

	return (
		<div
			name="contact"
			className="w-full sm:h-screen h-full mb-[5%] lg:mb-0"
		>
			<div className="max-w-[100%] sm:max-w-[85%] mx-auto p-8 flex flex-col justify-center w-full h-full">
				<form
					method="POST"
					action="https://getform.io/f/4cb6a45c-30a8-42be-a0b5-48b4fd06158b"
					className="flex flex-col w-full"
				>
					<div className="pb-8">
						<p className="text-5xl sm:text-7xl font-bold inline border-b-4 border-[#6c72cb]">
							Contact
						</p>
						<p className="pt-6 text-xl sm:text-3xl">
							Submit the form below or{" "}
							<a
								className="text-[#6c72cb] underline cursor-pointer"
								onClick={handleEmailClick}
							>
								email me directly
							</a>
						</p>
					</div>

					<input
						className="bg-[#EEEDF0] p-2 text-[#17181f] flex justify-center"
						type="text"
						placeholder="Name"
						name="name"
					/>
					<input
						className="my-4 p-2 bg-[#EEEDF0] text-[#17181f]"
						type="email"
						placeholder="Email"
						name="email"
					/>
					<textarea
						className="bg-[#EEEDF0] p-2 text-[#17181f]"
						placeholder="Message"
						name="Message"
						rows="10"
					></textarea>
					<button className="border-2 hover:bg-[#6c72cb] hover:[#6c72cb] px-6 py-2 my-5 mx-auto flex items-center">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
