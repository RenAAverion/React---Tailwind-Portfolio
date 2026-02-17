//my skills and tools
import Gallery from "../modular/GalleryStack";

function MyStack() {
  return (
    <section id="Stack" className="relative text-center p-8">
      {/* Video background iframe - zoomed and centered */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <iframe 
          allow="autoplay" 
          allowFullScreen 
          src="https://streamable.com/e/4irkwc?autoplay=1&loop=1&muted=1" 
          className="border-none"
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500%',
            height: '500%',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Website content */}
      <div className="relative z-10">
        <h4 className="font-stm text-3xl text-white mb-3">Tools</h4>
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