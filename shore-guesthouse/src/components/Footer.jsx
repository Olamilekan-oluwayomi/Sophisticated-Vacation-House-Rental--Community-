import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-700 bg-stone-900 px-6 py-12 text-stone-100 md:px-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 font-garamond text-xl text-white">
            Shore Guesthouse
          </h3>

          <p className="text-sm text-stone-400">
            A sophisticated vacation rental by the sea.
            <br />
            Experience comfort and luxury.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h4>

          <ul className="space-y-2 text-sm text-stone-400">
            <li>hello@shoreguesthouse.com</li>
            <li>+1 (555) 123-4567</li>
            <li>123 Ocean View Drive, Coastal City</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Follow Us
          </h4>

          <ul className="space-y-3 text-sm text-stone-400">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <FaInstagram className="text-base" />
                <span>Instagram</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <FaFacebookF className="text-sm" />
                <span>Facebook</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <FaXTwitter className="text-sm" />
                <span>X (Twitter)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-stone-700 pt-8 text-center text-sm text-stone-500">
        &copy; {new Date().getFullYear()} Shore Guesthouse. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
