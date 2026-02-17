function Footer() {
  return (
    <footer className="bg-black text-white">
      <hr />
      <div className="flex justify-evenly content-center p-3">
        <p className="font-stm text-sm">
          &copy;{new Date().getFullYear()} Ren Portfolio
        </p>
        <div className="flex gap-3 content-center">
          <p className="mr-3 font-stm text-sm">Made with:</p>
          <img
            src="https://cdn.brandfetch.io/idREYlLkpD/theme/dark/id-H4pLvmU.svg?c=1bxid64Mup7aczewSAYMX&t=1746616569173"
            className="w-5 animate-spin duration-[9000s]"
            alt="react logo"
          />
          <img src="https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1687779047045" className="w-6" alt="tailwind logo" />
          <img src="https://cdn.brandfetch.io/idqeSF6CKl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1767621513504" className="w-4" alt="vite logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
