import "./Navbar.css"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";

export default function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		if(window.screen.width <= 780){
			navRef.current.classList.toggle(
				"responsive_nav"
			);
		}
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
    				onSetActive={()=>{}}
					onClick={showNavbar}>Home</Link>
				<Link       
					activeClass="active" 
    				to="Projects" 
    				spy={true} 
    				smooth={true} 
    				offset={-80} 
    				duration={500} 
    				onSetActive={()=>{}}
					onClick={showNavbar}>Projects</Link>
				<Link       
					activeClass="active" 
    				to="Resume" 
    				spy={true} 
    				smooth={true} 
    				offset={-80} 
    				duration={500} 
    				onSetActive={()=>{}}
					onClick={showNavbar}>Resume</Link>
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