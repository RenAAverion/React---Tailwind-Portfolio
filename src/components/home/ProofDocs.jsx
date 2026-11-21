import filesProof from '/Datas/files.json'

function Proofs() {
  const filesItems = filesProof.map((file, index) => (
    <div
      key={index}
      className=" border m-2 px-3 py-3 bg-white rounded-md flex flex-col xl:flex-row items-start xl:items-center gap-3 min-w-0"
    >
      <img src={file.companylogo} alt="" className="w-16 h-10 object-contain shrink-0" />
      <p className="font-stm min-w-0 flex-1 break-all text-sm">{file.filename}</p>
      <a
        target="_blank"
        href={file.link}
        className="flex shrink-0 justify-center px-2 py-2 border-1 bg-dbl text-white font-stm rounded-md text-m hover:bg-white hover:text-dbl transition ease-linear duration-300"
      >
        {" "}
        View File{" "}
      </a>
    </div>
  ));

  return <div className="flex flex-col md:p-3 ">{filesItems}</div>;
}

export default Proofs;

