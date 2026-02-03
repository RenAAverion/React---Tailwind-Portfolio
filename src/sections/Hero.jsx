function Hero (){
    return(
        <section id="hero" className="flex realtive h-screen bg-[url(https://i.ibb.co/N2QhKvd1/pexels-themob000-28428586.jpg)] bg-auto bg-no-repeat items-center justify-center">
            <div className="flex">
                <div id="picture" className="flex items-center">
                    <img src="src/assets/image.jpg" alt="" className="w-55 h-55 rounded-full mr-5"/>
                </div>
                <div id="title" className="ml-5 flex-col p-10 border-l-2 border-white content-center z-20">
                    <h3 className="font-stm text-5xl text-white">Hello, I'm Ren Averion</h3>
                    <h4 className="font-stm text-2xl text-white mb-2">Web Developer/Designer <br />
                     UX/UI Designer
                     </h4>
                    <button className=" px-4 py-2 border-1 bg-white font-stm rounded-md text-xl hover:bg-black hover:text-white transition ease-linear duration-300 ">Contact Me</button>
                </div>
            </div>
        </section>
    )



}

export default Hero