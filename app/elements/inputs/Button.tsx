const Button = ({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) => {
  const classes =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-full bg-blue px-6 py-3.5 text-[15px] font-bold text-white transition hover:opacity-90"
      : "inline-flex items-center justify-center rounded-full border border-blue-line bg-white px-6 py-3.5 text-[15px] font-bold text-blue transition hover:bg-blue-soft";

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}

export default Button;