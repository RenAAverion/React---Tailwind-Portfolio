import Header from "../modular/Header";
import Reveal from "../modular/Reveal";
import PortfolioGallery from "../modular/ProjectsFull";
import Contact from "../sections/Contact";
import Footer from "../modular/Footer";

function ProjectsPage() {
    return (
      <>
        <Reveal className='slide-left'>
            <Header />
        </Reveal>
        <PortfolioGallery/>
        <Contact/>
        <Footer/>
      </>
    );
  }
  
  export default ProjectsPage;