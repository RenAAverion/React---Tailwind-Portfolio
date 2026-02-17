import Proofs from "../modular/ProofDocs";

function About() {
  return (
    <section id="about" className="bg-white md:p-10 md:flex md:content-around ">
      <div className="px-3 py-5 md:p-5 md:mr-10 md:flex-1">
        <h4 className="font-stm text-black text-2xl md:text-3xl">About Me</h4>
        <hr className="block border-dashed my-2 " />
        <p className="mb-3 font-stm text-sm text-justify md:text-[1em] ">
            Hi! I’m Ren, a passionate web developer specializing in modern
          front-end technologies and web/mobile application development. I
          graduated from LSPU with a Bachelor’s degree in Information
          Technology, majoring in Web and Mobile Application Development. During
          my academic journey, I gained hands-on experience through projects
          such as a history-based game built in RPG Maker for my Capstone, and a
          600-hour internship at Pixel 8 Web Solutions, where I worked on Figma,
          UI/UX design, and project collaboration.
        </p>
        <p className="mb-3 font-stm text-sm text-justify md:text-[1em]">
            Professionally, I have contributed to web development and digital
          solutions at Simple.biz, creating websites using Duda, performing SEO,
          leveraging CRM tools, editing multimedia content, generating logos and
          AI videos, and conducting client research. Additionally, I’ve gained
          experience in AI training at Outlier, further expanding my skill set
          in emerging technologies.
        </p>
        <p className="mb-3 font-stm text-sm text-justify md:text-[1em]">
            I enjoy building interactive and visually engaging websites, exploring
          UI/UX trends, and experimenting with creative solutions. My goal is to
          craft web applications that are both functional and delightful for
          users.
        </p>
      </div>
      <div className="m-3 bg-black rounded-md md:flex-1 md:ml-10 p-5">
        <h4 className="font-stm text-2xl md:text-3xl text-white text-center">
          Relevant Files
        </h4>
        <hr className="block border-dashed my-2 border-white" />
        <Proofs />
      </div>
    </section>
  );
}

export default About;
