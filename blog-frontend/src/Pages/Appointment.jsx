import React from "react";

const Appointment = () => {
  return (
    <section id="Appointment">
      <div className="bg-gray-50 py-12">
        <div className=" px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto ">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              Book Appointment
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4">
              Schedule Your Pet's Visit
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto mt-3 text-xl">
              Ready to give your pet the care they deserve? Book an appointment with Dr. Simran today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
