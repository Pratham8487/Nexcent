import { Link } from "react-router-dom";
import NavIcon from "../assets/Navbar_Icon.png";
import Button from "@mui/material/Button";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white border border-gray-200 bg-gradient-to-r from-white to-gray-100">
      <div className="h-16 p-4 flex justify-between items-center px-6">
        <div className="flex gap-2 items-center">
          <img src={NavIcon} className="h-5 w-5 mt-1" alt="Navbar Icon" />
          <h1 className="text-2xl font-bold">Nexcent</h1>
        </div>

        <div className="hidden lg:flex gap-10 items-center">
          <Link to={`/`}>
            <span className="font-medium text-gray-700 text-lg">Home</span>
          </Link>
          <Link to={`/features`}>
            <span className="font-medium text-gray-700 text-lg">Features</span>
          </Link>
          <Link to={`/community`}>
            <span className="font-medium text-gray-700 text-lg">Community</span>
          </Link>
          <Link to={`/blog`}>
            <span className="font-medium text-gray-700 text-lg">Blog</span>
          </Link>
          <Link to={`/pricing`}>
            <span className="font-medium text-gray-700 text-lg">Pricing</span>
          </Link>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#43A046",
              "&:hover": {
                backgroundColor: "#388E3B",
              },
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textTransform: "none",
            }}
          >
            Register Now
            <MoveRight size={20} color="white" />
          </Button>
        </div>

        <div className="hidden md:flex lg:hidden gap-4 items-center">
          <Link to={`/`}>
            <span className="font-medium text-gray-700 text-base">Home</span>
          </Link>
          <Link to={`/features`}>
            <span className="font-medium text-gray-700 text-base">
              Features
            </span>
          </Link>
          <Link to={`/community`}>
            <span className="font-medium text-gray-700 text-base">
              Community
            </span>
          </Link>
          <Link to={`/blog`}>
            <span className="font-medium text-gray-700 text-base">Blog</span>
          </Link>
          <Link to={`/pricing`}>
            <span className="font-medium text-gray-700 text-base">Pricing</span>
          </Link>

          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#43A046",
              "&:hover": {
                backgroundColor: "#388E3B",
              },
              display: "flex",
              alignItems: "center",
              gap: "4px",
              textTransform: "none",
              fontSize: "0.875rem",
              padding: "4px 12px",
            }}
          >
            Register
            <MoveRight size={16} color="white" />
          </Button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow border-t border-gray-100 px-4 py-4 space-y-4"
          >
            <Link to="/" className="block text-gray-700 font-medium text-lg">
              Home
            </Link>
            <Link
              to="/features"
              className="block text-gray-700 font-medium text-lg"
            >
              Features
            </Link>
            <Link
              to="/community"
              className="block text-gray-700 font-medium text-lg"
            >
              Community
            </Link>
            <Link
              to="/blog"
              className="block text-gray-700 font-medium text-lg"
            >
              Blog
            </Link>
            <Link
              to="/pricing"
              className="block text-gray-700 font-medium text-lg"
            >
              Pricing
            </Link>

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#43A046",
                "&:hover": {
                  backgroundColor: "#388E3B",
                },
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                textTransform: "none",
                mt: 1,
              }}
            >
              Register Now
              <MoveRight size={20} color="white" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
