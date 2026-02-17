import { SitesPreview } from "../modular/GalleryProjects";
import data from "/Datas/Websites.json"

const Websites = data.default || data;

function Projects() {
  return (
    <section id="proj" className="p-10">
      <div>
        <h4 className="font-stm text-3xl text-black mb-3 text-center">
          {" "}
          {"Projects (" +  Websites.length + ")"}{" "}
        </h4>
        <hr className="block border-dashed my-2" />
        <p className="text-center font-stm mb-5">
          These are the projects that I have worked on when I was working as a freelancer at Simple.biz 
        </p>
        <div className="py-5 ">
          <SitesPreview />
        </div>
      </div>
    </section>
  );
}

export default Projects;
