const images = [
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.brandfetch.io/idREYlLkpD/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1746616569047",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.brandfetch.io/idMNEQh7-0/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1687779036935",
  },
  {
    name: "Duda",
    logo: "https://cdn.brandfetch.io/idofsDNmOM/w/1200/h/1200/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1667577944553",
  },
  {
    name: "Bitrix24",
    logo: "https://cdn.brandfetch.io/idV2APsVjg/w/1124/h/1124/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1766426003011",
  },
  {
    name: "Cognito Forms",
    logo: "https://cdn.brandfetch.io/idZ064kNNl/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1767210529783",
  },
  {
    name: "Elfsight",
    logo: "https://cdn.brandfetch.io/idkyKojDUj/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1667747606883",
  },
  {
    name: "Canva",
    logo: "https://cdn.brandfetch.io/id9mVQlyB1/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1725863485997",
  },
  {
    name: "Figma",
    logo: "https://cdn.brandfetch.io/idZHcZ_i7F/w/320/h/320/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1729268227605",
  },
  {
    name: "Vimeo",
    logo: "https://cdn.brandfetch.io/idheAw_tFb/w/360/h/360/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1768203676589",
  },
  {
    name: "Veo3",
    logo: "https://cdn.brandfetch.io/id7DQkYqD0/w/128/h/128/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1769574640925",
  },
  {
    name: "Photopea",
    logo: "https://logosandtypes.com/wp-content/uploads/2024/02/Photopea.png",
  },
  {
    name: "VS Code",
    logo: "https://cdn.brandfetch.io/idIkI_7uw6/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1764661307887g",
  },
];

function Gallery() {
  const items = images.map((img, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center font-stm flex-shrink-0 px-6"
    >
      <img
        src={img.logo}
        alt={img.name + " logo"}
        className="h-15 w-15 rounded-md"
      />
      <p className="text-white">{img.name}</p>
    </div>
  ));

  return (
    <div className="md:flex md:justify-evenly overflow-hidden">
      {/* mobile sliding */}
      <div className="flex md:hidden animate-scroll whitespace-nowrap">
        {items}
        {items} {/* duplicate for seamless loop */}
      </div>
      {/* desktop static */}
      <div className="hidden md:flex md:justify-evenly w-full">
        {items}
      </div>
    </div>
  );
}

export default Gallery;
