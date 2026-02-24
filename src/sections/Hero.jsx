function Hero() {
  return (
    <section
      id="hero"
      className="flex  mt-30 mb-10 justify-center md:items-center md:mt-0  md:p-0 mad:mb-0 md:flex-col md:h-screen scroll-p-95"
    >
      <div className="absolute inset-0 overflow-hidden -z-10">
        <iframe
          allow="autoplay"
          allowFullScreen
          src="https://player.vimeo.com/video/1167733829?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1"
            className="border-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-full md:h-[200%] pointer-events-none h-[800%] w-[320%]"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="flex flex-col md:flex-row">
        <div id="picture" className="md:flex md:items-center">
          <img
            src="https://i.ibb.co/bjc6hQSs/371083425-324521823543726-8201669079437847996-n.jpg"
            alt=""
            className="rounded-full w-40 mx-auto md:w-55 md:h-55 md:mr-5"
          />
        </div>
        <div
          id="title"
          className="p-10 content-center z-20 text-center md:text-left md:border-l-2 md:border-white md:ml-5"
        >
          <h3 className="font-stm text-3xl  text-white md:text-5xl">
            Hello, I'm Ren Averion
          </h3>
          <h4 className="font-stm text-white mb-2 md:text-2xl">
            Web Developer/Designer <br />
            UX/UI Designer
          </h4>
          <a href="#contact" className="px-4 py-2 border-1 bg-white font-stm rounded-md hover:bg-black hover:text-white transition ease-linear duration-300 text-l md:text-xl">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
