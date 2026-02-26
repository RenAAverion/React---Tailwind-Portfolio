//my skills and tools
import Gallery from "../modular/GalleryStack";

function MyStack() {
  return (
    <section id="Stack" className=" relative text-center p-8">
      {/* Video background iframe - zoomed and centered */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <iframe 
          allow="autoplay" 
          allowFullScreen 
          src="https://streamable.com/e/4irkwc?autoplay=1&loop=1&muted=1" 
          className="border-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200%] w-[170%] md:w-full md:h-[500%] pointer-events-none "
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Website content */}
      <div className="relative z-10">
        <h4 className="font-stm text-2xl md:text-3xl text-white text-center">Tools & Skills</h4>
        <hr className="block border-dashed my-2 bg-white" />
        <p className="text-white font-stm mb-5">
          These are the tools that I have used throughout my academic, personal,
          and professional endeavor.
        </p>
        <Gallery />
      </div>
    </section>
  );
}

export default MyStack;