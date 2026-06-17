function Footer(){
    
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              ShopEase
            </h2>
            <p className="text-gray-400">
              Your one-stop destination for quality products at affordable
              prices. Shop smart, shop easy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Customer Service
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Info
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>📍 Ahmednagar, Maharashtra</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@shopease.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-xl">
              <a href="#" className="hover:text-blue-400">
                Facebook
              </a>
              <a href="#" className="hover:text-pink-400">
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} ShopEase. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;