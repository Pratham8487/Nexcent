import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import NavIcon from "../assets/Navbar_Icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-2">
                {/* <span className="text-white font-bold text-xl">N</span> */}
                <img src={NavIcon} className="h-5 w-5 mt-1" alt="Navbar Icon" />
              </div>
              <h3 className="text-xl font-bold">Nexcent</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Comprehensive membership management for organizations,
              associations, and clubs.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/social/facebook"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                to="/social/twitter"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                to="/social/instagram"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                to="/social/linkedin"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/tutorials"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/membership-guide"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Membership Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/safeguarding"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Safeguarding
                </Link>
              </li>
              <li>
                <Link
                  to="/automation-tools"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Automation Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/success-stories"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  className="mr-2 text-green-500 flex-shrink-0 mt-1"
                  size={18}
                />
                <span className="text-gray-400">
                  123 Membership Ave, Suite 400
                  <br />
                  Sydney, NSW 2000
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  className="mr-2 text-green-500 flex-shrink-0"
                  size={18}
                />
                <Link
                  to="tel:+61234567890"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  +1-8487017317
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-green-500 flex-shrink-0" size={18} />
                <Link
                  to="mailto:info@nextcent.com"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  info@nextcent.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay up to date</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for membership insights and updates
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-green-500 flex-grow"
              />
              <button className="bg-green-500 hover:bg-green-600 transition-colors px-4 py-2 rounded font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nexcent. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link
              to="/terms"
              className="hover:text-green-500 transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="hover:text-green-500 transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/cookies"
              className="hover:text-green-500 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
