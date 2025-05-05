import Button from "@mui/material/Button";
import HomeImg from "../assets/Illustration.png";
import BrandLogo from "../components/BrandLogo";

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-200 min-h-screen ">
      <div className="grid grid-cols-2 p-16 ">
        <div className="flex flex-col gap-4 justify-center pl-16">
          <h1 className="text-5xl font-semibold text-[#4D4D4D]">
            Lessons and insights <br />
            <span className="text-[#43A046]">from 8 years</span>
          </h1>

          <h2 className="text-[#89939E] text-base">
            Where to grow your business as a photographer: site or social media?
          </h2>

          <Button
            style={{ alignSelf: "flex-start" }}
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
          </Button>
        </div>

        <div className=" flex items-center justify-center">
          <img src={HomeImg} className="shadow-sky-950" />
        </div>
      </div>
      <div className="gap-2 flex items-center justify-center flex-col p-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#4D4D4D] text-center max-w-4xl mx-auto leading-tight">Our Clients</h1>
        <h2 className="text-[#89939E] text-base">
          We have been working with fortune 500+ clients.
        </h2>
      </div>
      <div className="gap-2 flex items-center justify-center flex-col p-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#4D4D4D] text-center max-w-4xl mx-auto leading-tight">
          Manage your entire community
          <br className="hidden md:block" />
          in a single system
        </h1>
        <h2 className="text-[#89939E] text-base">
          Who is Nextcent suitable for?
        </h2>
        <BrandLogo />
      </div>
    </div>
  );
}

export default HomePage;
