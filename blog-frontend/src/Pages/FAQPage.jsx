import FAQList from "../Components/FAQList";

export default function FAQPage() {
  return (
    <section id="faq">
      <div className=" bg-white py-12 px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl font-bold mt-3 text-gray-900">
            Get Your Questions Answered
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto mt-3 text-xl">
            Find answers to common questions from pet owners, veterinary
            professionals, and partner clinics.
          </p>
        </div>
        <FAQList />
      </div>
    </section>
  );
}
