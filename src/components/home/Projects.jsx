import { SitesPreview } from "./GalleryProjects.jsx";
import data from "../../data/projects.js"

const Websites = data.default || data;

function Projects() {
  return (
    <section id="proj" className="py-8 lg:py-10">
      <div className="site-container">
        <h4 className="font-stm text-3xl text-dbl mb-3 text-center">
          {" "}
          {"Projects (" +  Websites.length + ")"}{" "}
        </h4>
        <hr className="block border-dashed my-2" />
        <p className="text-center font-stm mb-5">
          A selection of websites I have worked on across companies.
        </p>
        <div className="py-5 ">
          <SitesPreview />
        </div>
      </div>
    </section>
  );
}

export default Projects;

