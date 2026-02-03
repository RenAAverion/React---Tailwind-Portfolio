import { list } from "postcss";


//navbar
function Header (){
    return (
    <div className="flex fixed justify-between p-5 w-screen shadow-xl bg-black-400 z-999 bg-white top-0 left-0" id="nav">
        <h1 className= "font-stm text-2xl ">My Portfolio</h1>
        <nav>
            <ul className="group flex space gap-10">
                <li><a href="#hero" className="font-stm ">Home</a></li>
                <li><a href="#about" className="font-stm">About</a></li>
                <li><a href="#" className="font-stm">Projects</a></li>
                <li><a href="#" className="font-stm">Contact</a></li>
            </ul>
        </nav>

    </div>

    )
}

export default Header;