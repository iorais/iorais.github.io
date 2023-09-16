import "./Navbar.css"
import { FaReact } from 'react-icons/fa';

export default function Navbar() {

    
    return ( 
        <div>
            <nav className ="nav">
                <button className="font-syncopate">Projects</button>
                <button className="font-syncopate">Contact</button>
                <button className="font-syncopate">Resume</button>
                <p className="font-syncopate">
                    built w/<blu>ReactJS<FaReact/></blu>
                </p>
            </nav>
        </div>  
    )
}