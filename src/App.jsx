import Header from './components/shared/Header.jsx';
import Footer from './components/shared/Footer.jsx';
import Hero from './components/home/Hero.jsx';
import About from './components/home/About.jsx';
import MyStack from './components/home/Stack.jsx';
import Projects from './components/home/Projects.jsx';
import Contact from './components/shared/Contact.jsx';



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
