

function Header() {
    return (
        <header className="p-5 sticky top-0 z-50 flex justify-between text-xl font-semibold">
            <div>
                <span>CEDRIC MARCELINO</span>
            </div>
            <nav>
                <a href="./" className="m-4">ABOUT</a> 
                <a href="./" className="m-4">SKILLS</a> 
                <a href="./" className="m-4">PROJECTS</a> 
                <a a href="./" className="m-4">CONTACT</a>
            </nav>
        </header>
    )
}

export default Header