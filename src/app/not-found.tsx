import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-accent font-mono text-sm mb-4">404</p>
      <h1 className="text-4xl font-bold text-text-primary mb-2">
        Page not found
      </h1>
      <p className="text-text-secondary mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-accent text-bg-primary font-semibold hover:bg-accent/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
