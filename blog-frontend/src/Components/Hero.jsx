// src/components/Hero.jsx
import { Heart, ShieldCheck, Clock, Star } from "lucide-react";
import MainImage from "../assets/MainImage.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={MainImage}
          alt="Vet background"
          className="w-full h-full object-cover object-top opacity-15"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center pt-20 px-10">
        {/* Left text section */}
        <div>
          <p className="text-md text-gray-600 mb-3 flex items-center">
            <span className="text-orange-400 mr-1">★★★★★</span> Trusted by
            1,000+ pet families
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Compassionate Care for Your{" "}
            <span className="text-sky-500">Beloved Pets</span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-lg">
            Dr. Simran Kaur provides expert veterinary care with over 5
            years of experience. From routine check-ups to emergency care, your
            pet&apos;s health is our priority.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-md shadow-md cursor-pointer">
              Book Appointment
            </button>
            <button className="border border-sky-500 text-sky-500 hover:bg-sky-50 px-6 py-3 rounded-md font-semibold cursor-pointer">
              View Services
            </button>
          </div>

          {/* Features row */}
          <div className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap gap-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-medium">Compassionate Care</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-sky-500" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-sky-500" />
              <span className="text-sm font-medium">24/7 Emergency</span>
            </div>

          </div>
        </div>

        {/* Right image */}
        <div className="relative flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-3 max-w-md">
            <img
              src={MainImage}
              alt="Vet with dog"
              className="rounded-xl object-cover w-full h-[350px] sm:h-[350px] lg:h-[480px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
