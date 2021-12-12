

function Header(props) {
    const {showMobileMenu,mobileMenu} = props

    function handleClick (){
        if(mobileMenu===true){
            showMobileMenu(false)
        } else{
            showMobileMenu(true)
        }
    }

    return (
        <header className="p-4 flex justify-between text-xl font-semibold bg-fresh text-vermillion fixed w-full top-0 z-50 ">
            <div className="rounded-full border-2 border-solid border-black p-1 z-10">
                <span>CM</span>
            </div>
            <div className="lg:hidden">
                <i className="text-2xl fas fa-bars cursor-pointer pt-2" onClick={handleClick}></i>
            </div>
            <div className="hidden text-2xl lg:flex">
                <a className="px-2 hover:bg-clean" href="#intro">Home</a>
                <a className="px-2 hover:bg-clean" href="#tech">Technologies</a>
                <a className="px-2 hover:bg-clean" href="#projects">Projects</a>
                <a className="px-2 hover:bg-clean" href="#contact">Contact Me</a>
            </div>
        </header>
    )
}

export default Header