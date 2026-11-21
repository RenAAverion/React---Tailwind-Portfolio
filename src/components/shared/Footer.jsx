function Footer() {
  return (
    <footer className="bg-dbl text-white">
      <hr />
      <div className="site-container flex flex-col sm:flex-row gap-3 items-center justify-between content-center py-3">
        <p className="font-stm text-xs md:text-sm">
          &copy;{new Date().getFullYear()} Ren Portfolio
        </p>
        <div className="flex gap-3 md:content-center">
          <p className="mr-0 font-stm text-xs md:text-sm md:mr-3">Made with:</p>
          <img loading="lazy" decoding="async"
            src="https://cdn.brandfetch.io/idREYlLkpD/theme/dark/id-H4pLvmU.svg?c=1bxid64Mup7aczewSAYMX&t=1746616569173"
            className="w-5 animate-spin ![animation-duration:10s]"
            alt="react logo"
          />
          <img loading="lazy" decoding="async" src="https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1687779047045" className="w-6" alt="tailwind logo" />
          <img loading="lazy" decoding="async" src="https://cdn.brandfetch.io/idqeSF6CKl/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1767621513504" className="w-4" alt="vite logo" />
          <img loading="lazy" decoding="async" src="https://cdn.brandfetch.io/idNMs_nMA0/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1667563370395" className="w-4" alt="zapier logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

