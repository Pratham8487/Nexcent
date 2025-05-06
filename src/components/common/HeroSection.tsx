import Button from "@mui/material/Button";
import HomeImg from "../../assets/Illustration.png";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-y-5 sm:space-y-5 md:space-y-0 md:space-x-5 lg:space-y-0 lg:space-x-5  p-8 sm:p-8 lg:p-16 md:p-16 ">
      <div className="flex flex-col gap-4 justify-center sm:pl-4 ">
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold text-[#4D4D4D] text-balance text-center sm:text-left">
          Lessons and insights <br />
          <span className="text-[#43A046]">from 8 years</span>
        </h1>

        <h2 className="text-[#89939E] text-base text-balance text-center sm:text-left">
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

      <div className=" flex items-center justify-center ">
        <img src={HomeImg} className="shadow-sky-950" />
      </div>
    </div>
  );
};

export default HeroSection;
