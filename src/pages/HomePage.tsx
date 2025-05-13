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
import Image from "../assets/Image.svg";
import BlogSection from "../components/BlogSection";

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-white to-gray-200 min-h-screen">
      <HeroSection />

      <section className="container mx-auto py-10 px-4">
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#4D4D4D] text-center">
            Our Clients
          </h1>
          <h2 className="text-[#89939E] text-base text-center">
            We have been working with some fortune 500+ clients.
          </h2>
        </div>
      </section>

      <section className="container mx-auto py-10 px-4">
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          <h1 className="text-2xl md:text-4xl font-semibold text-[#4D4D4D] text-center max-w-4xl mx-auto leading-tight">
            Manage your entire community
            <br className="hidden md:block" /> in a single system
          </h1>
          <h2 className="text-[#89939E] text-base text-center">
            Who is Nextcent suitable for?
          </h2>
        </div>

        <BrandLogo />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-8">
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
      </section>

      <section className="container mx-auto py-10 px-4">
        <HeroComponent
          img={HomeImg}
          heading={<p>The unseen of spending three years at Pixelgrade</p>}
        />
      </section>

      <section className="container mx-auto py-10 px-4">
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10">
            <div className="flex flex-col gap-4 justify-center">
              <h1 className="text-2xl md:text-4xl font-semibold text-[#4D4D4D] text-center md:text-left">
                Helping a local <br />
                <span className="text-[#43A046]">Business reinvent itself</span>
              </h1>
              <h2 className="text-[#263238] text-base text-center md:text-left">
                We reach here with our hardwork and dedication
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-3 items-center group p-2 rounded-lg transition-all duration-300">
                <img
                  src={Icon1}
                  alt="Members Icon"
                  className="h-7 w-7 object-contain"
                />
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-[#4D4D4D]">
                    2,245,341
                  </h2>
                  <span className="text-[#4D4D4D] text-sm font-normal border-b border-transparent group-hover:border-gray-300">
                    Members
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-center group p-2 rounded-lg transition-all duration-300">
                <img
                  src={Icon2}
                  alt="Clubs Icon"
                  className="h-7 w-7 object-contain"
                />
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-[#4D4D4D]">
                    46,328
                  </h2>
                  <span className="text-[#4D4D4D] text-sm font-normal border-b border-transparent group-hover:border-gray-300">
                    Clubs
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-center group p-2 rounded-lg transition-all duration-300">
                <img
                  src={Icon3}
                  alt="Event Bookings Icon"
                  className="h-7 w-7 object-contain"
                />
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-[#4D4D4D]">
                    828,867
                  </h2>
                  <span className="text-[#4D4D4D] text-sm font-normal border-b border-transparent group-hover:border-gray-300">
                    Event Bookings
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-center group p-2 rounded-lg transition-all duration-300">
                <img
                  src={Icon4}
                  alt="Payments Icon"
                  className="h-7 w-7 object-contain"
                />
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-[#4D4D4D]">
                    1,926,436
                  </h2>
                  <span className="text-[#4D4D4D] text-sm font-normal border-b border-transparent group-hover:border-gray-300">
                    Payments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10 px-4">
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
      </section>

      <section className="container mx-auto py-10 px-4">
        <HeroComponent
          img={Image}
          // heading={<p>How to design your site footer like we did</p>}
          description={
            <>
              <p>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h2 className="text-[#43A046] font-semibold text-lg py-3 ">Tim Smith</h2>
              <p>British Dragon Boat Racing Association</p>
              <BrandLogo />

            </>
          }
          buttonRender={false}
        />
      </section>

      <BlogSection />
    </div>
  );
}

export default HomePage;
