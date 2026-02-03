function Footer (){
    return(
        <footer className="bg-black text-white">
            <hr />
            <div className="flex justify-evenly content-center p-3">
                <p className="font-stm text-sm">&copy;{new Date().getFullYear()} Ren Portfolio</p>
                <div className="flex gap-3 content-center">
                    <p className="mr-3 font-stm text-sm">Made with:</p>
                    <img src="src/assets/react.svg" className="w-5 motion-safe:animate-spin " alt="react logo" />
                    <img src="public/tailwind.svg" className="w-6" alt="tailwind logo" />
                    <img src="public/vite.svg"  className="w-4" alt="vite logo" />
                </div>
            </div>
        </footer>
    )

}

export default Footer