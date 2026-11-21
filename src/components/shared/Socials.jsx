import socials from '/Datas/socials.json'

export default function Socials (){
    const items = socials.map((soc, index) => (
        <div
          key={index}
          className="flex min-w-0 flex-row items-center font-stm px-1 sm:px-2"
        >
        <a target="_blank" rel="noreferrer" href={soc.link} className="shrink-0">
          <img
            src={soc.logo}
            alt={soc.name + " soc"}
            className="h-15 w-15 rounded-md bg-dbl overflow-hidden shadow-sm p-2 m-2"
          />
        </a>
            <div className='ml-2 min-w-0 break-words'> 
            <p className="text-base sm:text-xl">{soc.name}</p>
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
