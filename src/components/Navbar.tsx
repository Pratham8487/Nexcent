import { Link } from "react-router-dom";
import NavIcon from "../assets/Navbar_Icon.png";
import Button from "@mui/material/Button";
import { MoveRight } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full bg-white border border-gray-200 h-16 p-4 flex justify-between px-26 bg-gradient-to-r from-white to-gray-100 ">
      <div className="flex gap-2">
        <img src={NavIcon} className="h-5 w-5 mt-2" alt="Navbar Icon" />
        <h1 className="text-2xl font-bold">Nexcent</h1>
      </div>
      <div className="flex gap-10 items-center">
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
            backgroundColor: "#187C19",
            "&:hover": {
              backgroundColor: "#69B41E",
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
    </div>
  );
}

export default Navbar;
