
import Sites from "../modular/GalleryProjects"

function Projects (){
    return (
       <section id="proj">
            <div>
            <h4 className="font-stm text-3xl text-black mb-3 text-center p-20"> Projects </h4>
            <div>
              <Sites />  
            </div>
            </div>
       </section>
    )
}

export default Projects