export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient base */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Large decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-200/30 blur-3xl" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-sage-200/25 blur-3xl" />
      <div className="absolute -bottom-16 right-1/4 w-72 h-72 rounded-full bg-warm-200/20 blur-3xl" />

      {/* SVG pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-900" />
      </svg>

      {/* Decorative geometric shapes */}
      <svg
        className="absolute top-20 right-[10%] w-64 h-64 text-primary-300/20 hidden lg:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" />
        <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <svg
        className="absolute bottom-16 right-[20%] w-32 h-32 text-sage-300/20 hidden lg:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <rect x="10" y="10" width="80" height="80" rx="8" stroke="currentColor" strokeWidth="1" />
        <rect x="25" y="25" width="50" height="50" rx="4" stroke="currentColor" strokeWidth="1" />
      </svg>

      <svg
        className="absolute top-40 right-[35%] w-20 h-20 text-warm-300/25 hidden lg:block"
        viewBox="0 0 80 80"
        fill="none"
      >
        <polygon points="40,5 75,65 5,65" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
