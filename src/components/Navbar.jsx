import { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            <span>LumenGrade LMS</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#signup"
              className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign up
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#signup"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-md bg-indigo-600 px-3 py-2 text-white text-center hover:bg-indigo-500"
              >
                Sign up
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
