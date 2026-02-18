import filesProof from '/Datas/files.json'

function Proofs() {
  const filesItems = filesProof.map((file, index) => (
    <div
      key={index}
      className=" border-1 m-3 px-3 p-2 bg-white rounded-md md:justify-between md:flex"
    >
      <img src={file.companylogo} alt="" className=" md:flex-1 md:mr-2 md:w-15 md:h-10" />
      <p className="font-stm flex-5 content-center text-wrap">{file.filename}</p>
      <a
        target="_blank"
        href={file.link}
        className="flex justify-center px-2 py-2 border-1 bg-black text-white font-stm rounded-md text-m hover:bg-white hover:text-black transition ease-linear duration-300"
      >
        {" "}
        View File{" "}
      </a>
    </div>
  ));

  return <div className="flex flex-col md:p-3 ">{filesItems}</div>;
}

export default Proofs;
