import Header from "../components/shared/Header.jsx";
import Reveal from "../components/shared/Reveal.jsx";
import PortfolioGallery from "../components/projects/ProjectsFull.jsx";
import Contact from "../components/shared/Contact.jsx";
import Footer from "../components/shared/Footer.jsx";

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