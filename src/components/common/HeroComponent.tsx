import Button from "@mui/material/Button";

interface HeroComponentProps {
  img?: string;
  description?: React.ReactNode;
  heading?: React.ReactNode;
}

const HeroComponent = ({ img, heading, description }: HeroComponentProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-y-5 sm:space-y-5 md:space-y-0 md:space-x-10 lg:space-y-0 lg:space-x-10  p-4 sm:p-2 lg:p-4 md:p-4 ">
      <div className=" flex items-center justify-center ">
        <img src={img} className="shadow-sky-950 h-full w-full" />
      </div>

      <div className="flex flex-col gap-4 justify-center sm:pl-4 md:col-span-2 lg:col-span-2 ">
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold text-[#4D4D4D] text-balance text-center sm:text-left">
          {heading}
        </h1>

        <h2 className="text-[#89939E] text-base text-balance text-justify sm:text-left">
          {description
            ? description
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quaerat repellat sit rerum doloremque aperiam ea optio modi tempora iure illum quisquam perspiciatis quidem voluptates, fugiat, voluptatibus, ex numquam. Debitis quo, modi dicta officia officiis nihil illo quos saepe maiores voluptatem laboriosam eaque autem obcaecati delectus reprehenderit similique reiciendis, voluptatibus pariatur incidunt explicabo sequi? Officia amet qui sunt ratione!"}
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
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default HeroComponent;
