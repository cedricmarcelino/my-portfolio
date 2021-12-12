

function MobileMenu(props) {
    const {showMobileMenu} = props

    function handleClick(){
        showMobileMenu(false)
    }

    return (


        <div className="fixed min-h-screen w-full bg-sunshine z-40 bottom-0 flex flex-col justify-center">
            <div className="flex flex-col justify-around h-screen p-10 pt-24 text-fresh text-center text-3xl">
                <a onClick={handleClick} href="#intro"><i class="fas fa-home"></i> Home</a>
                <a onClick={handleClick} href="#tech"><i class="fas fa-microchip"></i> Technologies</a>
                <a onClick={handleClick} href="#projects"><i class="far fa-window-maximize"></i> Projects</a>
                <a onClick={handleClick} href="#contact"><i class="fas fa-phone"></i> Contact Me</a>
            </div>
        </div>
    )
}

export default MobileMenu
