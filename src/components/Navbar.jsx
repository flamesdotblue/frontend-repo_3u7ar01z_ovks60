import { useState } from 'react';
import { Menu, X, Car } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#gameplay', label: 'Gameplay' },
    { href: '#download', label: 'Download' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <Car className="h-6 w-6 text-rose-400" />
          <span className="font-semibold tracking-wide">Yah Racing</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-md bg-rose-500/90 hover:bg-rose-500 text-white px-4 py-2 text-sm font-medium shadow-sm shadow-rose-500/30"
          >
            Play Demo
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-white/90 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="block mt-2 rounded-md bg-rose-500/90 hover:bg-rose-500 text-white px-4 py-2 text-center text-sm font-medium"
            >
              Play Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
