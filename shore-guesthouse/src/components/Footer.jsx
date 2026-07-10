function Footer() {
  return (
    <footer className="py-12 px-6 md:px-10 border-t border-gray-200 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-garamond text-xl mb-4">Shore Guesthouse</h3>
          <p className="text-sm text-gray-600">
            A sophisticated vacation rental by the sea.<br />
            Experience comfort and luxury.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>hello@shoreguesthouse.com</li>
            <li>+1 (555) 123-4567</li>
            <li>123 Ocean View Drive, Coastal City</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Follow Us</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="#" className="hover:text-black">Instagram</a></li>
            <li><a href="#" className="hover:text-black">Facebook</a></li>
            <li><a href="#" className="hover:text-black">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} Shore Guesthouse. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
