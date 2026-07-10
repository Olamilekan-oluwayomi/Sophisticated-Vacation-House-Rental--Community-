import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Desktop Navigation */}
      <nav className="hidden h-16 border-b border-stone-300 md:grid md:grid-cols-[1fr_160px_160px_160px]">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center border-r border-stone-300 px-8"
        >
          <span className="font-serif text-lg tracking-wide text-stone-900">
            Shore Guesthouse
          </span>
        </Link>

        {/* Gallery */}
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `flex items-center justify-center border-r border-stone-300 text-lg transition-colors ${
              isActive
                ? "bg-stone-100 text-black"
                : "hover:bg-stone-50 text-stone-700"
            }`
          }
        >
          Gallery
        </NavLink>

        {/* Information */}
        <NavLink
          to="/information"
          className={({ isActive }) =>
            `flex items-center justify-center border-r border-stone-300 text-lg transition-colors ${
              isActive
                ? "bg-stone-100 text-black"
                : "hover:bg-stone-50 text-stone-700"
            }`
          }
        >
          Information
        </NavLink>

        {/* CTA */}
        <Link
          to="/booking"
          className="flex items-center justify-center bg-black text-lg text-white transition hover:bg-stone-900"
        >
          Book now
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex h-14 items-center justify-between border-b border-stone-300 md:hidden">
        <Link
          to="/"
          className="flex h-full flex-1 items-center border-r border-stone-300 px-5"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-serif text-lg text-stone-900">
            Shore Guesthouse
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-full w-24 items-center justify-center text-lg"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-stone-300 bg-white text-center md:hidden"
          >
            <NavLink
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block border-b border-stone-300 px-6 py-4 text-base ${
                  isActive ? "bg-stone-100" : "hover:bg-stone-50"
                }`
              }
            >
              Gallery
            </NavLink>

            <NavLink
              to="/information"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block border-b border-stone-300 px-6 py-4 text-base ${
                  isActive ? "bg-stone-100" : "hover:bg-stone-50"
                }`
              }
            >
              Information
            </NavLink>

            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block bg-black px-6 py-4 text-base text-white"
            >
              Book now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
