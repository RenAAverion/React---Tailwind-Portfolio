import WaveDivider from "./WaveDivider.jsx";

function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex flex-col justify-center items-center min-h-svh bg-dbl pt-36 pb-32 md:pt-28 overflow-hidden"
    >
      {/* BG Video */}
      <div className="section-video absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
        <iframe
          allow="autoplay"
          allowFullScreen
          title="Hero background video"
          tabIndex={-1}
          src="https://player.vimeo.com/video/1167733829?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1"
          className="pointer-events-none border-none"
        />
      </div> 

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dbl/60 -z-10"></div>

      <div className="flex w-full max-w-6xl flex-col md:flex-row items-center px-4 md:px-8">
        <div id="picture" className="shrink-0 md:flex md:items-center">
          <img
            src="https://i.ibb.co/bjc6hQSs/371083425-324521823543726-8201669079437847996-n.jpg"
            alt=""
            className="rounded-full w-40 mx-auto md:w-55 md:h-55 md:mr-5"
          />
        </div>
        <div
          id="title"
          className="min-w-0 p-6 md:p-8 content-center z-20 text-center md:text-left md:border-l-2 md:border-white md:ml-5"
        >
          <h3 className="font-stm text-3xl  text-white md:text-4xl lg:text-5xl">
            Hello, I'm Ren Averion
          </h3>
          <h4 className="font-stm text-white mb-2 md:text-2xl">
            Web Developer/Designer <br />
            UX/UI Designer
          </h4>
          <a href="#contact" className="px-4 py-2 border-1 bg-white font-stm rounded-md hover:bg-dbl hover:text-white transition ease-linear duration-300 text-l md:text-xl">
            Contact Me
          </a>
        </div>
      </div>
        {/* Section division design */}
      
      <div className="pointer-events-none absolute -bottom-px inset-x-0 w-full" aria-hidden="true">
        <WaveDivider />
      </div>
    </section>
  );
}

export default Hero;

