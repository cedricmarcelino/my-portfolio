

function Intro() {
    return (
        <div id="intro" className="flex flex-col text-vermillion flex-grow font-bold justify-center min-h-screen bg-clean">
            <div className="w-full">
                <div className="text-3xl flex flex-col p-9 text-left lg:text-5xl">
                    <span>Hey!</span>
                    <span>I'm Cedric,</span>
                    <span>a Web Developer.</span>
                </div>
            </div>
            <div className="absolute bottom-5 font-semibold left-1/2 transform -translate-x-2/4 lg:text-2xl">
                <div className="animate-bounce">
                    <a className="cursor-pointer" href="#tech">&#8650; Learn More &#8650;</a>
                </div>
            </div>
        </div>
    )
}

// left: 50%;  left-1/2 -translate-x-1/2
// transform: translateX(-50%);

export default Intro
