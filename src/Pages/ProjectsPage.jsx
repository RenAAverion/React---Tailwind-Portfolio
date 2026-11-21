import Header from "../components/shared/Header.jsx";
import PortfolioGallery from "../components/projects/ProjectsFull.jsx";
import Contact from "../components/shared/Contact.jsx";
import Footer from "../components/shared/Footer.jsx";

function ProjectsPage() {
    return (
      <>
        <Header />
        <PortfolioGallery/>
        <Contact/>
        <Footer/>
      </>
    );
  }
  
  export default ProjectsPage;
