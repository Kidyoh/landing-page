"use client"
import React, { useState } from "react";
import Container from "../container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl bg-white shadow-lg">
        {faqdata.map((item, index) => (
          <div key={item.question} className={`mb-5 ${index !== 0 ? 'border-t border-gray-200' : ''}`}>
            <div>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center gap-2 w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-white  focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
              >
                <FontAwesomeIcon
                  icon={openIndex === index ? faMinus : faPlus}
                  className="w-5 h-5 text-[#F48C06]"
                />
                <span>{item.question}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
const faqdata = [
  {
    question: "What is Sas",
    answer: "SAS is a new generation of ERP for schools, colleges & universities.",
  },
  {
    question: "What is the difference between Sas and other ERP?",
    answer: "SAS is a new generation of ERP for schools, colleges & universities.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit? ",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. ",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "Yes we do offer technical support. You can contact us at nexy.info@nexy.com",
  },
];

export default Faq;