const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90 focus:outline-none";

export default function Button({ href, className = "", children, ...props }) {
  const classes = `${baseClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
