import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
const Appointment = () => {
  return (
    <section id="Appointment">
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        <div className="text-center max-w-2xl">
          <button className=" bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 ">
            Book Appointment
          </button>
          <h1 className="text-3xl font-bold text-gray-800">
            Schedule Your Pet's Visit
          </h1>
          <p className="text-gray-400 mt-2 text-xl">
            Ready to give your pet the care they deserve? Book an appointment
            with Dr. Simran today.
          </p>
        </div>

        <div className="mt-10 w-full max-w-6xl flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-xs">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>
              <div className="flex flex-col space-y-4 text-gray-700">
                <div className="flex items-start">
                  <PhoneIcon className="h-5 w-5 text-blue-500 mr-3 mt-2" />
                  <div>
                    <p className="font-medium">(555) 123-1234</p>
                    <p className="text-sm text-gray-400">
                      Available 9-5 pm Weekdays
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <EnvelopeIcon className="h-5 w-5 text-blue-500 mr-3 mt-2" />
                  <div>
                    <p className="font-medium">simran@gmail.com</p>
                    <p className="text-sm text-gray-400">
                      Response within 4 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-blue-500 mr-3 mt-2" />
                  <div>
                    <p className="font-medium">123 Animal Home</p>
                    <p className="text-sm text-gray-400">
                      Animal District, CA 90210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-xs">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Office Hours
              </h2>
              <ul className="text-gray-600 space-y-1">
                <li className="flex justify-between">
                  <div className="text-gray-700">Monday - Friday</div>
                  <div>8:00 AM - 6:00 PM</div>
                </li>
                <li className="flex justify-between">
                  <div className="text-gray-700">Saturday</div>
                  <div>8:00 AM - 6:00 PM</div>
                </li>
                <li className="flex justify-between">
                  <div className="text-gray-700">Sunday</div>
                  <div>Emergency Only</div>
                </li>
                
              </ul>
              <div className="mt-4 bg-orange-50 border border-orange-200 text-orange-500 px-4 py-1.5 border-gray-300rounded-sm text-sm">
                ⚠ Emergency services available 24/7. Call for urgent situations.
              </div>
            </div>
          </div>

          <div className="flex-[2] bg-gray-50 p-8 rounded-xl shadow-xs">
            <form className="space-y-6">
              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Owner Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border rounded-sm px-4 py-1.5 border-gray-300"
                  />
                </div>
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Pet Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Pet's name"
                    className="w-full border rounded-sm px-4 py-1.5 border-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full border rounded-sm px-4 py-1.5 border-gray-300"
                  />
                </div>
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="(xxx) xxx-xxxx"
                    className="w-full border rounded-sm px-4 py-1.5 border-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Pet Type *
                  </label>
                  <select className="w-full border rounded-sm px-4 py-1.5 border-gray-300 text-gray-600 ">
                    <option>Select pet type</option>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Service Needed *
                  </label>
                  <select className="w-full border rounded-sm px-4 py-1.5 border-gray-300 text-gray-600 ">
                    <option>Select service</option>
                    <option>Check-up</option>
                    <option>Vaccination</option>
                    <option>Surgery</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1 ">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-sm px-4 py-1.5 border-gray-300 text-gray-600"
                  />
                </div>
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Preferred Time
                  </label>
                  <select className="w-full border rounded-sm px-4 py-1.5 border-gray-300 text-gray-600 ">
                    <option>Select time</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Additional Notes
                </label>
                <textarea
                  placeholder="Any additional information about your pet's condition or special requirements..."
                  className="w-full border rounded-sm px-4 py-1.5 border-gray-300 h-24"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-sm font-semibold cursor-pointer"
              >
                Request Appointment
              </button>

              <p className="text-center text-gray-400 text-sm mt-2">
                * Required fields. We’ll contact you within 24 hours to confirm
                your appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
