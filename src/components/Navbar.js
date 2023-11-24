import "./Navbar.css"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <div className="logo2"/>
			<nav className="font-syncopate" ref={navRef}>
				<a href="/home">Home</a>
				<a href="/projects">Projects</a>
				<a href="/resume">Resume</a>
				<a href="/test">Test</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

// code used from https://github.com/Index-Zero-0/Responsive-navbar-ReactJS