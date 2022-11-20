import "./Navbar.css"

export default function Navbar() {
    return ( 
        <div>
            <nav className = "nav">
                    <h2 className="font-audiowide">
                        <a href = "/">home</a> 
                        <a href = "/projects">projects</a> 
                    </h2>
            </nav>
        </div>  
    )
}