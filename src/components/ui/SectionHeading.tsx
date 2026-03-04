interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
        <span className="text-accent">&lt;</span>
        {title}
        <span className="text-accent"> /&gt;</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary text-lg">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-20 bg-gradient-to-r from-accent to-transparent" />
    </div>
  );
}
