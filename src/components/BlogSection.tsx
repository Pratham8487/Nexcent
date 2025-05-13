import { ArrowRight } from "lucide-react";
import Blog1 from "../assets/BlogSection1.svg";
import Blog2 from "../assets/BlogSection2.svg";
import Blog3 from "../assets/BlogSection3.svg";

export default function BlogSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Caring is the new marketing
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <img
              src={Blog2}
              alt="Person using laptop near window"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 bg-gray-50">
            <h3 className="text-lg font-medium text-center text-gray-700 mb-4">
              Creating Streamlined Safeguarding Processes with OneRen
            </h3>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center text-green-500 font-medium"
              >
                Readmore <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <img
              src={Blog1}
              alt="Hands typing on laptop with coffee"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 bg-gray-50">
            <h3 className="text-lg font-medium text-center text-gray-700 mb-4">
              What are your safeguarding responsibilities and how can you manage
              them?
            </h3>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center text-green-500 font-medium"
              >
                Readmore <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48">
            <img
              src={Blog3}
              alt="Person working on laptop with plant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 bg-gray-50">
            <h3 className="text-lg font-medium text-center text-gray-700 mb-4">
              Revamping the Membership Model with Triathlon Australia
            </h3>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center text-green-500 font-medium"
              >
                Readmore <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
