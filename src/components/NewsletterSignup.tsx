"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service (Mailchimp, ConvertKit, etc.)
    setSubmitted(true);
  };

  return (
    <section className="section-padding py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-warm-500 to-primary-600">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left side - Content & Form */}
          <div className="relative p-10 md:p-16 z-10">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2" />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full mb-6">
              <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium text-white/80">Free Weekly Newsletter</span>
            </div>

            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Level Up Every Week
            </h2>
            <p className="text-white/75 text-lg mb-8 max-w-md">
              Join thousands getting practical tips on money, health, and personal
              growth delivered straight to their inbox.
            </p>

            {submitted ? (
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md">
                <p className="text-white font-medium text-lg">
                  Welcome aboard! Check your inbox to confirm.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/50 border border-white/25 focus:outline-none focus:border-white/60 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-white text-primary-600 font-semibold rounded-xl hover:bg-cream-100 transition-colors shadow-lg whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </form>
            )}

            <p className="text-white/40 text-xs mt-4">No spam, ever. Unsubscribe anytime.</p>
          </div>

          {/* Right side - Visual */}
          <div className="relative hidden lg:flex items-center justify-center p-12">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-white/5" />
            <div className="absolute top-8 right-8 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute bottom-12 left-8 w-24 h-24 rounded-full bg-white/5" />

            {/* Newsletter mockup card */}
            <div className="relative bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-xs w-full transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/25 flex items-center justify-center">
                  <span className="text-white font-display font-bold">P</span>
                </div>
                <div>
                  <p className="text-white font-display font-semibold text-sm">The Positorial</p>
                  <p className="text-white/50 text-xs">Weekly Digest</p>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-primary-300/30 flex items-center justify-center">
                    <span className="text-white text-xs">💰</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/20 flex-1" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-sage-300/30 flex items-center justify-center">
                    <span className="text-white text-xs">💚</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/15 w-3/4" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-warm-300/30 flex items-center justify-center">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/15 w-5/6" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {["bg-primary-300", "bg-sage-300", "bg-warm-300", "bg-primary-200"].map((bg, i) => (
                    <div key={i} className={`w-6 h-6 rounded-full ${bg} border-2 border-white/20`} />
                  ))}
                </div>
                <span className="text-white/60 text-xs font-medium">10K+ readers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
