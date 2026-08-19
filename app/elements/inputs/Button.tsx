type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "link",
  href?: string;
  variant?: "primary" | "secondary";
  extendedClasses?: string
  loading?: boolean
}

const Button = ({
  children,
  type = "link",
  href,
  variant = "primary",
  extendedClasses,
  loading = false
}: ButtonProps) => {
  const classes =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-full cursor-pointer bg-blue px-6 py-3.5 text-[15px] font-bold text-white transition hover:opacity-90"
      : "inline-flex items-center justify-center rounded-full cursor-pointer border border-blue-line bg-white px-6 py-3.5 text-[15px] font-bold text-blue transition hover:bg-blue-soft";

  const getButtonContent = () => {
    if (loading) {
      return <svg
        className="w-5 h-5 mx-auto text-white animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    } else {
      return children
    }
  }

  return type === "link" ? (
    <a href={href} className={`${classes} ${extendedClasses} ${loading && 'opacity-90 pointer-events-none'}`}>
      {getButtonContent()}
    </a>
  ) : (
    <button type={type} className={`${classes} ${extendedClasses} ${loading && 'opacity-90 pointer-events-none'}`} disabled={loading}>
      {getButtonContent()}
    </button>
  );
}

export default Button;