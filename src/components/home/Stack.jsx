import BackgroundVideo from "../shared/BackgroundVideo.jsx";
//my skills and tools
import Gallery from "./GalleryStack.jsx";

function MyStack() {
  return (
    <section id="Stack" className="relative isolate overflow-hidden bg-dbl text-center py-8">
      <BackgroundVideo
        title="Tools and skills background video"
        src="https://streamable.com/e/4irkwc?autoplay=1&loop=1&muted=1"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-dbl/60 -z-10"></div>

      {/* Website content */}
      <div className="site-container relative z-10">
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
