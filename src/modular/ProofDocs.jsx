const filesProof =[
    {
        companylogo:"https://i.ibb.co/fzBWZSbb/simplelogo.png",
        filename:"Averion, Ren_ Certificate of Employment.pdf",
        link:"https://drive.google.com/file/d/17f93S1Y7fv-gK7ude2pIuOJFdHRFpk8f/view?usp=sharing",
    },
    {
        companylogo:"https://i.ibb.co/ksx44kHD/Pixel8logo.webp",
        filename:"COMPETECY CERTIFICATE - Ren A. Averion.png",
        link:"https://drive.google.com/file/d/1JK4Wo8D4xkicegQNCOwhudE9pGGODUR7/view?usp=sharing",
    },
    {
        companylogo:"https://i.ibb.co/ksx44kHD/Pixel8logo.webp",
        filename:"LETTER OF COMPLETION - Ren Averion.pdf",
        link:"https://drive.google.com/file/d/1XT-G5yryd2K_i8d22NL1uUTTdgVF-uAC/view?usp=sharing",
    },
    {
        companylogo:"https://i.ibb.co/23DsVpj8/futurelearnlogo.png",
        filename:"digital-skills-user-experience_certificate_of_achievement_lr2ico4.pdf",
        link:"https://drive.google.com/file/d/1vr_mh96t4HuSEKdqN236_vdp2iAEBnlE/view?usp=drive_link",
    },

]




function Proofs(){
    const filesItems = filesProof.map( (file, index) =>
        <div  key={index} className="flex border-1 m-3 px-3 justify-between p-2 bg-white rounded-md">
            <img src={file.companylogo} alt="" className="flex-1 w-15 h-10 mr-2"/>
            <p className="font-stm flex-5 content-center">
               {file.filename}
            </p>
            <a target="_blank" href= {file.link} className="flex items-center px-2 py-1 border-1 bg-black text-white font-stm rounded-md text-m hover:bg-white hover:text-black transition ease-linear duration-300"> View File </a>
        </div>

    );


    return(
        <div className="flex p-3 flex-col">
            {filesItems}
        </div>
    )


}


export default Proofs