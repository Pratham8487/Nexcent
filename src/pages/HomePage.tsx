import BrandLogo from "../components/BrandLogo";
import Card from "../components/common/Card";
import HeroSection from "../components/common/HeroSection";
import HeroComponent from "../components/common/HeroComponent";

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-white to-gray-200 min-h-screen ">
      <HeroSection />
      <div className="gap-2 flex items-center justify-center flex-col p-6">
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold text-[#4D4D4D] text-center max-w-4xl mx-auto leading-tight">
          Our Clients
        </h1>
        <h2 className="text-[#89939E] text-base text-center">
          We have been working with some fortune 500+ clients.
        </h2>
      </div>
      <div className="gap-2 flex items-center justify-center flex-col p-6">
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold text-[#4D4D4D] text-center max-w-4xl mx-auto leading-tight">
          Manage your entire community
          <br className="hidden md:block" />{" "}
          in a single system
        </h1>
        <h2 className="text-[#89939E] text-base text-center">
          Who is Nextcent suitable for?
        </h2>
        <BrandLogo />
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row w-full p-6 justify-evenly space-y-5 md:space-y-0 md:space-x-5">
          <Card
            title="Membership Organisations"
            description="Our membership management software provides full automation of
        membership renewals and payments"
          />
          <Card
            title="National Association"
            description="Our membership management software provides full automation of
        membership renewals and payments"
          />
          <Card
            title="Clubs and Groups"
            description="Our membership management software provides full automation of
        membership renewals and payments"
          />
        </div>
        <HeroComponent />
      </div>
    </div>
  );
}

export default HomePage;
