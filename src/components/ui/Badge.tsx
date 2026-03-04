interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "bg-accent/10 text-accent border-accent/20"
      : "bg-secondary/10 text-secondary border-secondary/20";

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${styles}`}
    >
      {children}
    </span>
  );
}
