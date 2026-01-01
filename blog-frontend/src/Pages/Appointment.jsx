import React, { useState } from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Appointment = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  // Common country codes
  const countryCodes = [
    { code: "+1", country: "US/CA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "IN" },
    { code: "+61", country: "AU" },
    { code: "+49", country: "DE" },
    { code: "+33", country: "FR" },
    { code: "+81", country: "JP" },
    { code: "+86", country: "CN" },
    { code: "+55", country: "BR" },
    { code: "+52", country: "MX" },
  ];

  // Email validation function
  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      setEmailError("");
      return;
    }
    if (!emailRegex.test(emailValue)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const validatePhone = (phoneValue) => {
    // Only allow exactly 10 digits
    const digitsOnly = phoneValue.replace(/\D/g, "");
    if (!phoneValue) {
      setPhoneError("");
      return;
    }
    if (digitsOnly.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
    } else {
      setPhoneError("");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    validatePhone(value);
  };

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
            Consultation about disease, nutrition, sick patient care, or adopting a pet —
            book an appointment with Dr. Simran today.
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


              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-xs">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Consultation Hours
              </h2>
              <ul className="text-gray-600 space-y-1">
                <li className="flex justify-between">
                  <div className="text-gray-700">Monday - Friday</div>
                  <div>9:00 AM - 10:00 PM</div>
                </li>
                <li className="flex justify-between">
                  <div className="text-gray-700">Saturday</div>
                  <div>9:00 AM - 6:00 PM</div>
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
                    required
                    className="w-full border rounded-sm px-4 py-1.5 border-gray-300"
                  />
                </div>
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={handleEmailChange}
                    className={`w-full border rounded-sm px-4 py-1.5 ${emailError ? "border-red-500" : "border-gray-300"
                      }`}
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1">{emailError}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Phone Number *
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="border rounded-sm px-2 py-1.5 border-gray-300 text-gray-600 bg-white"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.code} ({country.country})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      placeholder="(xxx) xxx-xxxx"
                      value={phone}
                      onChange={handlePhoneChange}
                      maxLength={10}
                      className={`flex-1 border rounded-sm px-4 py-1.5 ${phoneError ? "border-red-500" : "border-gray-300"
                        }`}
                      required
                    />
                  </div>
                  {phoneError && (
                    <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                  )}
                </div>
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-sm px-4 py-1.5 border-gray-300 text-gray-600"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Pet Type *
                  </label>
                  <select className="w-full border rounded-sm px-4 py-1.5 border-gray-300 text-gray-600 ">
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Exotic</option>
                    required
                  </select>
                </div>
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Pet Sex
                  </label>
                  <select className="w-full border rounded-sm px-4 py-1.5 border-gray-300 text-gray-600 ">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Pet Breed
                  </label>
                  <input
                    type="text"
                    placeholder="Your Pet's breed"
                    className="w-full border rounded-sm px-4 py-1.5 border-gray-300"
                  />
                </div>
                <div className="flex-1 min-w-[220px]">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Pet Age
                  </label>
                  <input
                    type="number"
                    placeholder="Pet Age"
                    className="w-full border rounded-sm px-4 py-1.5 border-gray-300"
                    required
                  />
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

              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">
                  Select Appointment Type *
                </label>
                <div className="flex flex-wrap gap-4">
                  <button
                    type="submit"
                    className="flex-1 min-w-[200px] bg-green-500 hover:bg-green-600 text-white py-3 rounded-sm font-semibold cursor-pointer flex items-center justify-center gap-2 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Book Voice Call
                  </button>
                  <button
                    type="submit"
                    className="flex-1 min-w-[200px] bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-sm font-semibold cursor-pointer flex items-center justify-center gap-2 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    Book Video Call
                  </button>
                </div>

                <p className="text-center text-gray-400 text-sm mt-2">
                  * Required fields. We’ll contact you within 24 hours to confirm
                  your appointment.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
