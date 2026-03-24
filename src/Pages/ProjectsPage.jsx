import Header from "../modular/Header";
import Reveal from "../modular/Reveal";



function ProjectsPage() {
    return (
      <>
        <Reveal className='slide-left'>
          <Header />
        </Reveal>

        <div>
          <h1>My Projects</h1>
          {/* your projects content here */}
        </div>
      </>
    );
  }
  
  export default ProjectsPage;