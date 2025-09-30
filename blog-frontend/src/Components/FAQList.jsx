import { useState } from "react";
import petOwners from "../data/petOwners.json";
import veterinarians from "../data/veterinarians.json";
import clinics from "../data/clinics.json";
import { Heart, User, Building2 } from "lucide-react"; // icons
import FAQItem from "./FAQItem";
const tabs = [
  {
    key: "petOwners",
    label: "Pet Owners",
    description:
      "Common questions from pet parents about our services, policies, and care recommendations.",
    icon: <Heart className="w-4 h-4 mr-2" />,
    data: petOwners,
  },
  {
    key: "veterinarians",
    label: "Veterinarians",
    description:
      "Information for fellow veterinarians about consultations, referrals, and professional collaboration.",
    icon: <User className="w-4 h-4 mr-2" />,
    data: veterinarians,
  },
  {
    key: "clinics",
    label: "Clinics",
    description:
      "Partnership opportunities, facility sharing, and collaborative services for other veterinary practices.",
    icon: <Building2 className="w-4 h-4 mr-2" />,
    data: clinics,
  },
];
export default function FAQList({ title, data }) {
  const [activeTab, setActiveTab] = useState("petOwners");
  const active = tabs.find((t) => t.key === activeTab);
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-around bg-gray-100 rounded-md p-1 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex flex-1 items-center cursor-pointer min-w-0 justify-center px-6 py-2 rounded-md text-sm font-medium  transition-colors duration-150 ${
              activeTab === tab.key
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
            aria-pressed={activeTab === tab.key}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-700">{active.label}</h2>
        <p className="text-gray-500 text-sm mb-6">{active.description}</p>
        <div className="divide-y divide-gray-200">
          {active.data.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
