type ButtonProps = {
  children: React.ReactNode;
  type: "button" | "submit" | "link",
  href?: string;
  variant?: "primary" | "secondary";
  extendedClasses?: string
}

const Button = ({
  children,
  type = "link",
  href,
  variant = "primary",
  extendedClasses
}: ButtonProps) => {
  const classes =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-full cursor-pointer bg-blue px-6 py-3.5 text-[15px] font-bold text-white transition hover:opacity-90"
      : "inline-flex items-center justify-center rounded-full cursor-pointer border border-blue-line bg-white px-6 py-3.5 text-[15px] font-bold text-blue transition hover:bg-blue-soft";

  return type === "link" ? (
    <a href={href} className={`${classes} ${extendedClasses}`}>
      {children}
    </a>
  ) : (
    <button type={type} className={`${classes} ${extendedClasses}`}>
      {children}
    </button>
  );
}

export default Button;