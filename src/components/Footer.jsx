import { useState } from "react";

// 1. Missing SERVICES array defined here
const SERVICES = [
  ["Worldwide Shipping", "Free express delivery on orders over Rs. 15,000"],
  ["24/7 Customer Support", "Dedicated support team ready to assist you anytime"],
  ["100% Authentic Fabric", "Guaranteed premium quality & luxury embroidery"],
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  // 2. Proper Form Handler
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (/\S+@\S+\.\S+/.test(email)) {
      setDone(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <footer className="bg-neutral-950 text-white">
      {/* Top Banner Services */}
      <div className="bg-[#5E0B1C]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 grid gap-6 md:grid-cols-3">
          {SERVICES.map(([title, desc]) => (
            <div key={title} className="text-center">
              <p className="text-lg  tracking-wide">{title}</p>
              <p className="text-sm text-white/80 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Help Links */}
        <div>
          <h4 className="text-lg  tracking-wider uppercase text-white">Help</h4>
          <ul className="mt-4 space-y-2 text-sm text-neutral-400">
            {["Frequently asked questions", "Terms & conditions", "Privacy policy", "Disclaimer"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand Links */}
        <div>
          <h4 className="text-lg  tracking-wider uppercase text-white">About Us</h4>
          <ul className="mt-4 space-y-2 text-sm text-neutral-400">
            {["Our Story", "Blogs & Press", "Fabric Care Guide", "Contact Us"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="lg:col-span-2">
          <h4 className="text-lg tracking-wider uppercase">Get the latest updates</h4>
          <p className="text-sm text-neutral-400 mt-1">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>

          {done ? (
            <p className="mt-4 text-sm text-emerald-400 font-medium">
              ✓ You're subscribed! Check your inbox to confirm.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-4 max-w-md">
              <div className="flex border-b border-neutral-600 focus-within:border-white transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="flex-1 bg-transparent py-2 text-sm text-white placeholder:text-neutral-500 outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#5E0B1C] text-white text-xs uppercase tracking-wider px-5 my-1 hover:bg-white hover:text-neutral-950 transition-colors "
                >
                  Subscribe
                </button>
              </div>
              {error && (
                <p className="text-xs text-rose-500 mt-1.5">Please enter a valid email address.</p>
              )}
            </form>
          )}
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-neutral-900 py-5 text-center text-xs text-neutral-500">
        © 2026 SHEHANSHAH. All rights reserved.
      </div>
    </footer>
  );
}