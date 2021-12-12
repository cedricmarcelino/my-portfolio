import tailwindlogo from  '../icons/tailwind-css.png'

function Skills() {
    
    return (
        <>
        <a className="block relative -top-72px" id="tech"></a>
        <div className="py-4 text-center text-3xl bg-fresh" id="">
            <span className="font-semibold text-vermillion">Technologies</span>
            <div className="flex flex-wrap text-9xl text-center p-4">
                <i className="py-2 text-htmllogo fab fa-html5 w-1/2"></i>
                <i className="py-2 text-jslogo fab fa-js w-1/2"></i>
                <i className="py-2 text-reactlogo fab fa-react w-1/2"></i>
                <div className="py-2 h-32 w-1/2">
                    <img src={tailwindlogo} className="h-32 py-5 px-3 m-auto"></img>
                </div>
                <i className="py-2 text-csslogo fab fa-css3-alt w-1/2"></i>
                <i className="py-2 text-githublogo fab fa-github w-1/2"></i>
            </div>
        </div>
        </>
    )
}

export default Skills
