import "./Navbar.css"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";

export default function Navbar() {
	const navRef = useRef();

	const handleClick = (to) => {
		console.log(to);
		showNavbar();
	}

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
            <div className="logo2"/>
			<nav className="font-syncopate" ref={navRef}>
				<Link       
					activeClass="active" 
    				to="Home" 
    				spy={true} 
    				smooth={true} 
    				offset={0} 
    				duration={500} 
    				onSetActive={showNavbar}>Home</Link>
				<Link       
					activeClass="active" 
    				to="Projects" 
    				spy={true} 
    				smooth={true} 
    				offset={-70} 
    				duration={500} 
    				onSetActive={showNavbar}>Projects</Link>
				<Link       
					activeClass="active" 
    				to="Resume" 
    				spy={true} 
    				smooth={true} 
    				offset={-70} 
    				duration={500} 
    				onSetActive={showNavbar}>Resume</Link>
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