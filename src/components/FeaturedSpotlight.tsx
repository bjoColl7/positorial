import Link from "next/link";

export default function FeaturedSpotlight() {
  return (
    <section className="section-padding py-20">
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-500">Featured</span>
        <div className="flex-1 h-px bg-cream-300" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image / Visual Side */}
        <div className="relative group">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 via-primary-200 to-sage-100 relative">
            {/* Abstract visual placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full opacity-10" viewBox="0 0 400 300" fill="none">
                <circle cx="120" cy="150" r="100" stroke="currentColor" strokeWidth="0.5" className="text-primary-600" />
                <circle cx="280" cy="120" r="80" stroke="currentColor" strokeWidth="0.5" className="text-sage-600" />
                <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.5" className="text-warm-600" />
                <rect x="60" y="60" width="280" height="180" rx="12" stroke="currentColor" strokeWidth="0.5" className="text-primary-500" />
              </svg>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-sm">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-primary-700 font-display font-bold text-lg">Money & Finances</p>
              <p className="text-primary-600/60 text-sm mt-1">Featured Article</p>
            </div>
          </div>
          {/* Decorative offset border */}
          <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary-200/50 -z-10" />
        </div>

        {/* Content Side */}
        <div className="lg:pl-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">Editor&apos;s Pick</span>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-4">
            7 Money Habits That Changed My Financial Future
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Small daily habits compound into massive results. These are the money
            habits that took me from living paycheck to paycheck to building real,
            lasting wealth. It starts with simple changes anyone can make today.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-xs font-bold text-primary-600">P</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Positorial Team</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-sm text-gray-400">6 min read</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-sm text-gray-400">Mar 18, 2026</span>
          </div>

          <Link
            href="/blog/7-money-habits"
            className="btn-primary text-base inline-flex items-center gap-2"
          >
            Read Full Article
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
