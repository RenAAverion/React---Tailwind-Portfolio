import Header from './modular/Header.jsx';
import Footer from './modular/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import MyStack from './sections/Stack.jsx';
import Projects from './sections/projects.jsx';
import Contact from './sections/Contact.jsx';

function App(){
  return (
  <>
      <Header />
      <Hero />
      <About />
      <MyStack />
      <Projects />
      <Contact/>
      <Footer />
  </> 
 );

}

export default App;