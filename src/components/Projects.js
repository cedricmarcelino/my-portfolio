

function Projects() {
    return (
        <>
        <a className="block relative -top-72px" id="projects"></a>
        <div className="py-4 text-center bg-clean text-vermillion">
            <span className="font-semibold text-vermillion text-3xl">Projects</span>
            <div className="m-4 lg:flex lg:flex-wrap lg:m-4 lg:space-between">

                <div className="rounded-2xl border-2 border-solid border-fresh w-full p-4 bg-fresh lg:w-5/12 lg:mx-auto">
                    <div className="">
                        <div className="w-full my-2">
                            <i className="fas fa-university text-9xl"></i>
                        </div>
                        <a target="_blank" href="https://github.com/cedricmarcelino/banking-app-project" className="bg-clean hover:bg-clean-dark border border-vermillion font-bold py-2 px-4 rounded mx-2 my-3 cursor-pointer inline-block">
                            See Code
                        </a>
                        <a target="_blank" href="https://cedricmarcelino.github.io/banking-app-project/" className="bg-clean hover:bg-clean-dark border border-vermillion font-bold py-2 px-4 rounded mx-2 cursor-pointer inline-block">
                            See Live
                        </a>
                    </div>
                    <span className="font-semibold text-2xl">
                        Banking App
                    </span>
                    <p className="text-justify my-3">
                        This website application is made to demonstrate my knowledge on React. It is created as a project for the bootcamp I am currently attending. Made with React and Tailwind CSS.
                    </p>
                </div>

                <div className="rounded-2xl border-2 border-solid border-fresh w-full p-4 bg-fresh  mt-4 lg:w-5/12 lg:mt-0 lg:mx-auto">
                    <div className="">
                        <div className="w-full my-2">
                            <i className="fas fa-chess text-9xl"></i>
                        </div>
                        <a target="_blank" href="https://github.com/cedricmarcelino/chessgame" className="bg-clean hover:bg-clean-dark border border-vermillion font-bold py-2 px-4 rounded mx-2 my-3 cursor-pointer inline-block">
                            See Code
                        </a>
                        <a target="_blank" href="https://cedricmarcelino.github.io/chessgame/" className="bg-clean hover:bg-clean-dark border border-vermillion font-bold py-2 px-4 rounded mx-2 cursor-pointer inline-block">
                            See Live
                        </a>
                    </div>
                    <span className="font-semibold text-2xl">
                        Chess Game
                    </span>
                    <p className="text-justify my-3">
                        A simple chess game to showcase my Javascript knowledge. Made with vanilla JS. 
                    </p>
                </div>

                <div className="rounded-2xl border-2 border-solid border-fresh w-full p-4 bg-fresh mt-4 lg:w-5/12 lg:mx-auto">
                    <div className="">
                        <div className="w-full my-2">
                            <i className="fas fa-gamepad text-9xl"></i>
                        </div>
                        <a target="_blank" href="https://cedricmarcelino.github.io/batch13-fe-activities/tictactoe/index.html" className="bg-clean hover:bg-clean-dark border border-vermillion font-bold py-2 px-4 rounded mx-2 my-3 cursor-pointer inline-block">
                            See Live
                        </a>
                    </div>
                    <span className="font-semibold text-2xl">
                        Tic Tac Toe
                    </span>
                    <p className="text-justify my-3">
                        Another simple tic tac toe game to showcase my Javascript knowledge. Made with vanilla JS. <br></br><br></br>
                        The code is still under a private repository until I finish my bootcamp. This is made as a project for the bootcamp I am currently attending.
                    </p>
                </div>

                <div className="rounded-2xl border-2 border-solid border-fresh w-full p-4 bg-fresh mt-4 lg:w-5/12 lg:mx-auto">
                    <div className="">
                        <div className="w-full my-2">
                            <i className="fas fa-window-restore text-9xl"></i>
                        </div>
                        <a target="_blank" href="https://cedricmarcelino.github.io/batch13-fe-activities/landing-page/index.html" className="my-3 bg-clean hover:bg-clean-dark border border-vermillion font-bold py-2 px-4 rounded mx-2 cursor-pointer inline-block">
                            See Live
                        </a>
                    </div>
                    <span className="font-semibold text-2xl">
                        Landing Page
                    </span>
                    <p className="text-justify my-3">
                        A simple landing page made with HTML and vanilla CSS. <br></br><br></br>
                        The code is still under a private repository until I finish my bootcamp. This is made as a project for the bootcamp I am currently attending.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects
