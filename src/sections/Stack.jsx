//my skills and tools
import Gallery from "../modular/GalleryStack";

function MyStack (){

    return(
        <section id="Stack" className="bg-black text-center p-8">
            <div className="">
             <h4 className="font-stm text-3xl text-white mb-3">Tools</h4>
             <hr className="block border-dashed my-2 bg-white"/>
             <p className="text-white font-stm mb-5">These are the tools that I have used throughout my academic, personal, and professional endeavor.</p>
             < Gallery/>
            </div>
        </section>
    );
}

export default MyStack