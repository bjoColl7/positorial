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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-warm-500 to-primary-600 p-10 md:p-16 text-center">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Level Up Every Week
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands getting practical tips on money, health, and personal
            growth delivered straight to their inbox.
          </p>

          {submitted ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-white font-medium text-lg">
                Welcome aboard! Check your inbox to confirm.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-white text-primary-600 font-semibold rounded-xl hover:bg-cream-100 transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
