import { GraduationCap, Award, Briefcase, MapPin } from "lucide-react";
import AboutImage from "../assets/image.png";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-white py-20 px-6 lg:px-24 flex flex-col items-center"
    >
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-blue-500 bg-blue-100 px-4 py-1 rounded-full">
          About Dr. Simran
        </span>
        <h2 className="text-4xl font-bold mt-4 text-gray-800">
          Meet Your Trusted Veterinarian
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mt-3 text-xl">
          Dedicated to providing exceptional veterinary care with compassion,
          expertise, and the latest medical advances.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl w-full">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Dr. Simran Kaur
          </h3>
          <p className="text-gray-600 mb-4">
            With over 5 years of dedicated service in veterinary medicine,
            Dr. Simran kaur has built a reputation for providing
            compassionate, comprehensive care for pets of all sizes. Her gentle
            approach and extensive expertise make her a trusted partner in your
            pet's health journey.
          </p>
          <p className="text-gray-600 mb-8">
            Dr. Simran believes in building lasting relationships with both
            pets and their families, ensuring that every visit is comfortable
            and stress-free. Her commitment to continuing education keeps her
            at the forefront of veterinary medicine.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm flex items-start gap-4">
              <GraduationCap className="text-blue-500 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Education</h4>
                <p className="text-sm text-gray-500">
                  G.B. Pant University
                </p>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm flex items-start gap-4">
              <Award className="text-orange-500 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Certifications</h4>
                <p className="text-sm text-gray-500">
                  NAVLE Certified, Emergency Care Specialist
                </p>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm flex items-start gap-4">
              <Briefcase className="text-green-600 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Experience</h4>
                <p className="text-sm text-gray-500">
                  5+ years serving the community
                </p>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm flex items-start gap-4">
              <MapPin className="text-blue-400 w-6 h-6" />
              <div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-sm text-gray-500">
                  Cambridge, Ontario
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-400 bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">
              Personal Mission
            </h4>
            <p className="text-gray-600 italic">
              “Every pet deserves compassionate, expert care. I’m here to ensure
              your beloved companion receives the best treatment while feeling
              safe and loved throughout their healthcare journey.”
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={AboutImage}
            alt="Dr. Simran"
            className="rounded-xl shadow-lg object-cover w-3/4"
          />
        </div>
      </div>
    </section>
  );
}
