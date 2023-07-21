import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
	return (
		<div className="bg-[#17181f] text-[#EEEDF0] font-sans">
			<Helmet>
				<title>Portfolio Website</title>
				<meta
					name="description"
					content="Braden Hollis's portfolio website"
				/>
			</Helmet>
			<Header />
			<Hero />
			<About />
			<Project />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
}
