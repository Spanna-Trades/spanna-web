import Image from "next/image";


const Header = () => {
  return (
    <header className="font-sans font-medium max-w-7xl w-full z-10 fixed top-4 mx-auto px-8 sm:px-12 md:px-16">
      <div className="bg-white rounded-xl w-full flex gap-4 items-center justify-between px-6 py-4 shadow-xl">
        <a href="#">
          <Image src="/spanna-trades-logo.png" alt="Spanna Trades logo" height={50} width={50} />
        </a>
        <nav className="hidden md:flex gap-4 ">
          <a href="#" className="transition-colors text-grey active:text-ink hover:text-blue cursor-pointer">How it works</a>
          <a href="#" className="transition-colors text-grey active:text-ink hover:text-blue cursor-pointer">Benefits</a>
          <a href="#" className="transition-colors text-grey active:text-ink hover:text-blue cursor-pointer">Pricing</a>
        </nav>
        <div className="flex gap-4">
          <a>Try the demo</a>
          <a>Stay in the loop</a>
        </div>
      </div>
    </header>
  )
}

export default Header;