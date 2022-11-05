import "./Navbar.css"

export default function Navbar() {
    return ( 
        <div>
            <nav className = "nav">
                <div class="logo" />
                    <h2> <a href = "/about">About</a> </h2>
                    <h2> <a href = "/projects">Projects</a> </h2>
            </nav>
        </div>  
    )
}
