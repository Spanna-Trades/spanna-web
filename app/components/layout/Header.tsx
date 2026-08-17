import Image from "next/image";


const Header = () => {
  return (
    <header className="font-medium w-full z-10 fixed top-4 left-1/2 -translate-x-1/2 mx-auto px-8 sm:px-12 md:px-16">
      <div className="max-w-7xl mx-auto bg-white rounded-xl w-full flex gap-4 items-center justify-between px-6 py-4 shadow-xl">
        <a href="#" className="flex gap-2 items-center">
          <Image src="/spanna-logo.svg" alt="Spanna Trades logo" height={25} />
          <p className="font-bold text-3xl text-blue">Spanna</p>
        </a>
        <nav className="hidden md:flex gap-4 ">
          <a href="#how-it-works" className="transition-colors text-grey active:text-ink hover:text-blue cursor-pointer">How it works</a>
          <a href="#benefits" className="transition-colors text-grey active:text-ink hover:text-blue cursor-pointer">Benefits</a>
          <a href="#pricing" className="transition-colors text-grey active:text-ink hover:text-blue cursor-pointer">Pricing</a>
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