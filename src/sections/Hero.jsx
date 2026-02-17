function Hero() {
  return (
    <section
      id="hero"
      className="flex realtive h-screen items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <iframe 
          allow="autoplay" 
          allowFullScreen 
          src="https://streamable.com/e/ol8fm6?autoplay=1&loop=1&muted=1" 
          className="border-none"
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '200%',
            pointerEvents: 'none'
          }}
        />
      </div>


      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>
      <div className="flex">
        <div id="picture" className="flex items-center">
          <img
            src="https://i.ibb.co/bjc6hQSs/371083425-324521823543726-8201669079437847996-n.jpg"
            alt=""
            className="w-55 h-55 rounded-full mr-5"
          />
        </div>
        <div
          id="title"
          className="ml-5 flex-col p-10 border-l-2 border-white content-center z-20"
        >
          <h3 className="font-stm text-5xl text-white">
            Hello, I'm Ren Averion
          </h3>
          <h4 className="font-stm text-2xl text-white mb-2">
            Web Developer/Designer <br />
            UX/UI Designer
          </h4>
          <button className=" px-4 py-2 border-1 bg-white font-stm rounded-md text-xl hover:bg-black hover:text-white transition ease-linear duration-300 ">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
