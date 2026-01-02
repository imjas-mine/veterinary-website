import { useState } from "react";
import dogs from "../data/dogs.json";
import cats from "../data/cats.json";
import others from "../data/others.json";
import { Dog, Cat, Rabbit } from "lucide-react";
import FAQItem from "./FAQItem";

const tabs = [
  {
    key: "dogs",
    label: "Dogs",
    description:
      "Common questions about dog health, vaccinations, nutrition, and preventive care.",
    icon: <Dog className="w-4 h-4 mr-2" />,
    data: dogs,
  },
  {
    key: "cats",
    label: "Cats",
    description:
      "Frequently asked questions about feline health, behavior, and wellness.",
    icon: <Cat className="w-4 h-4 mr-2" />,
    data: cats,
  },
  {
    key: "others",
    label: "Other Pets",
    description:
      "Care information for rabbits, guinea pigs, birds, reptiles, and other exotic pets.",
    icon: <Rabbit className="w-4 h-4 mr-2" />,
    data: others,
  },
];

export default function FAQList({ title, data }) {
  const [activeTab, setActiveTab] = useState("dogs");
  const active = tabs.find((t) => t.key === activeTab);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-around bg-gray-100 rounded-md p-1 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex flex-1 items-center cursor-pointer min-w-0 justify-center px-6 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${activeTab === tab.key
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
