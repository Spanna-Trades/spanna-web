const Footer = () => {
  return (
    <footer className="bg-[#04143f] px-4 pb-8 pt-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#" className="flex items-center gap-2.5" aria-label="Spanna home">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 1.6c-4.5 0-8.1 3.6-8.1 8.1 0 5.7 8.1 12.7 8.1 12.7s8.1-7 8.1-12.7c0-4.5-3.6-8.1-8.1-8.1Z" fill="#0a4fff" />
                <g transform="translate(12 9.6) rotate(-40)">
                  <rect x="-0.95" y="-2.4" width="1.9" height="7.2" rx="0.85" fill="white" />
                  <path fillRule="evenodd" d="M0 -5.3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 1.45a1.55 1.55 0 1 1 0 3.1 1.55 1.55 0 0 1 0-3.1Z" fill="white" />
                  <rect x="-1.35" y="-6.2" width="2.7" height="2.45" fill="#0a4fff" />
                </g>
              </svg>
              <span className="font-[family-name:var(--font-display)] text-[22px] font-bold tracking-[-0.5px] text-white">
                Spanna
              </span>
            </a>
            <p className="mt-3 text-sm leading-6 text-[#8fb4ff]">
              Trades you can trust.
              <br />
              Launching in Gauteng soon.
            </p>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[1.4px] text-[#8fb4ff]">
              Quick links
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="#how-it-works" className="text-sm text-[#8fb4ff] transition hover:text-white">
                How it works
              </a>
              <a href="#benefits" className="text-sm text-[#8fb4ff] transition hover:text-white">
                Why Spanna
              </a>
              <a href="#pricing" className="text-sm text-[#8fb4ff] transition hover:text-white">
                Pricing
              </a>
              <a href="#interest" className="text-sm text-[#8fb4ff] transition hover:text-white">
                Stay in the loop
              </a>
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[1.4px] text-[#8fb4ff]">
              Get in touch
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@spanna.co.za" className="text-sm text-[#8fb4ff] transition hover:text-white">
                hello@spanna.co.za
              </a>
              <a href="https://www.spanna.co.za" className="text-sm text-[#8fb4ff] transition hover:text-white">
                www.spanna.co.za
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-[12px] text-[#8fb4ff] md:flex-row md:items-center md:justify-between">
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
