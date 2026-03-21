"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-400 to-warm-500 flex items-center justify-center">
                <span className="text-white font-display font-bold">P</span>
              </div>
              <span className="font-display font-bold text-lg text-white">Positorial</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering you with knowledge and tools for financial freedom,
              optimal health, and personal growth.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2.5">
              <li><Link href="/money" className="text-sm hover:text-primary-400 transition-colors">Money & Finances</Link></li>
              <li><Link href="/health" className="text-sm hover:text-primary-400 transition-colors">Health & Wellness</Link></li>
              <li><Link href="/personal-development" className="text-sm hover:text-primary-400 transition-colors">Personal Development</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-primary-400 transition-colors">All Articles</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm hover:text-primary-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-primary-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Stay in the Loop</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get weekly insights on money, health, and growth delivered to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-primary-500 text-white text-sm font-medium rounded-xl hover:bg-primary-600 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Positorial. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built for the new age of personal empowerment.
          </p>
        </div>
      </div>
    </footer>
  );
}
