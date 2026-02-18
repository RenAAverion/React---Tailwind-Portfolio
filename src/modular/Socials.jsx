import socials from '/Datas/socials.json'

export default function Socials (){
    const items = socials.map((soc, index) => (
        <div
          key={index}
          className="flex flex-row items-center font-stm flex-shrink-0 px-2"
        >
        <a target="_blank" rel="noreferrer" href={soc.link}>
          <img
            src={soc.logo}
            alt={soc.name + " soc"}
            className="h-15 w-15 rounded-md bg-black overflow-hidden shadow-sm p-2 m-2"
          />
        </a>
            <div className='ml-2'> 
            <p className="text-xl">{soc.name}</p>
            <p className=''>{soc.handle}</p>
          </div>
        </div>
    ))
    return(
     <>
      {items}
     </>
    )
}