import BrandLogo from "../components/BrandLogo";
import Card from "../components/common/Card";
import HeroSection from "../components/common/HeroSection";
import HeroComponent from "../components/common/HeroComponent";
import HomeImg from "../assets/painting.svg";
import Pana from "../assets/pana.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon4 from "../assets/Icon-4.svg";
import Icon3 from "../assets/Icon-3.svg";

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
          <br className="hidden md:block" /> in a single system
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
        <HeroComponent
          img={HomeImg}
          heading={
            <>
              <p>The unseen of spending three years at Pixelgrade</p>
            </>
          }
        />
        <div className="grid grid-cols-1 w-full py-8 sm:px-2 lg:px-12 md:px-4 sm:grid-cols-1 md:grid-cols-2 bg-gray-200 rounded-lg">
          <div className="flex flex-col gap-4 justify-center sm:pl-4 ">
            <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold text-[#4D4D4D] text-balance text-center sm:text-left">
              Helping a local <br />
              <span className="text-[#43A046]">Business reinvent itself</span>
            </h1>

            <h2 className="text-[#263238] text-base text-balance text-center sm:text-left">
              We reach here with out hardwork and dedication
            </h2>
          </div>
          <div className="px-4 md:px-8 py-6 space-y-6 md:space-y-0 md:space-x-5">
            <div className="flex flex-col md:flex-row gap-6 md:gap-5 justify-start md:justify-center">
              <div className="flex gap-3 items-center group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                <img src={Icon1} className="h-7 w-7 object-contain" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#4D4D4D] text-wrap break-words">
                  2,245,341 <br />
                  <span className="text-[#4D4D4D] text-sm font-normal block md:inline-block border-b border-transparent group-hover:border-gray-300">
                    Members
                  </span>
                </h2>
              </div>

              <div className="flex gap-3 items-center group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                <img src={Icon2} className="h-10 w-10 object-contain" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#4D4D4D] text-wrap break-words">
                  46,328 <br />
                  <span className="text-[#4D4D4D] text-sm font-normal block md:inline-block border-b border-transparent group-hover:border-gray-300">
                    Clubs
                  </span>
                </h2>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-5 justify-start md:justify-center">
              <div className="flex gap-3 items-center group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                <img src={Icon3} className="h-7 w-7 object-contain" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#4D4D4D] text-wrap break-words">
                  828,867 <br />
                  <span className="text-[#4D4D4D] text-sm font-normal block md:inline-block border-b border-transparent group-hover:border-gray-300">
                    Event Bookings
                  </span>
                </h2>
              </div>

              <div className="flex gap-3 items-center group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                <img src={Icon4} className="h-6 w-6 object-contain" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#4D4D4D] text-wrap break-words">
                  1,926,436 <br />
                  <span className="text-[#4D4D4D] text-sm font-normal block md:inline-block border-b border-transparent group-hover:border-gray-300">
                    Payments
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <HeroComponent
          img={Pana}
          heading={<p>How to design your site footer like we did</p>}
          description={
            <p>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
          }
        />
      </div>
    </div>
  );
}

export default HomePage;
