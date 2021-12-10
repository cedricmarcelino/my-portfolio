

function Header() {
    return (
        <header className="p-4 flex justify-between text-xl font-semibold bg-fresh text-vermillion">
            <div className="rounded-full border-2 border-solid border-black p-1 ">
                <span>CM</span>
            </div>
            <i className="text-2xl fas fa-bars cursor-pointer pt-2"></i>
        </header>
    )
}

export default Header