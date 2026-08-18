import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-deep-blue px-8 sm:px-12 md:px-16 pt-16 pb-32 -mt-16 rounded-t-2xl overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#" className="flex items-center gap-2.5" aria-label="Spanna home">
              <Image src="/spanna-logo.svg" alt="Spanna Trades logo" height={26} width={16} />
              <span className="text-md font-bold text-white">
                Spanna
              </span>
            </a>
            <p className="mt-3 text-sm leading-6 text-blue-line">
              Trades you can trust.
              <br />
              Launching in Gauteng soon.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-white">
              Quick links
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="#how-it-works" className="text-sm text-blue-line transition hover:text-white">
                How it works
              </a>
              <a href="#benefits" className="text-sm text-blue-line transition hover:text-white">
                Why Spanna
              </a>
              <a href="#pricing" className="text-sm text-blue-line transition hover:text-white">
                Pricing
              </a>
              <a href="#interest" className="text-sm text-blue-line transition hover:text-white">
                Get notified
              </a>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-white">
              Get in touch
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@spanna.co.za" className="text-sm text-blue-line transition hover:text-white">
                hello@spanna.co.za
              </a>
              <a href="https://www.spanna.co.za" className="text-sm text-blue-line transition hover:text-white">
                www.spanna.co.za
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-blue-line md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Spanna (Pty) Ltd. Registered in South Africa.
            <br />
            Pricing is indicative and subject to final regulatory confirmation before launch.
          </p>
          <p className="text-right">spanna.co.za</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
