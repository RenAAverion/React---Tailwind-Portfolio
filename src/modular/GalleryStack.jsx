import images from '/Datas/logo.json';

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
      <div className="flex animate-scroll2 whitespace-nowrap">
        {items}
        {items} {/* duplicate for seamless loop */}
      </div>
    </div>
  );
}

export default Gallery;
