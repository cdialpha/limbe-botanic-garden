import React from "react";

const FAQPage = () => {
  const faqItems = [
    {
      question: "What are the opening hours of the Botanical Gardens?",
      answer:
        "The Botanical Gardens are open from 9:00 AM to 5:00 PM every day of the week.",
    },
    {
      question: "Is there an entrance fee to visit the Botanical Gardens?",
      answer:
        "Yes, there is an entrance fee for visitors. Please refer to our Admission page for more information.",
    },
    {
      question: "Are guided tours available?",
      answer:
        "Yes, guided tours are available. You can join our knowledgeable guides to explore the gardens and learn about the plants and their significance.",
    },
    {
      question: "Can I bring my own food and drinks?",
      answer:
        "Outside food and drinks are not permitted in the gardens. However, we have a café where you can enjoy refreshments.",
    },
    {
      question: "Are pets allowed in the gardens?",
      answer:
        "With the exception of service animals, pets are not allowed in the gardens to ensure the safety and well-being of the plants and other visitors.",
    },
    {
      question: "Are there picnic areas in the gardens?",
      answer:
        "Yes, we have designated picnic areas where you can enjoy a meal surrounded by the beautiful natural surroundings of the gardens.",
    },
    {
      question: "Are there restrooms available?",
      answer:
        "Yes, we have restrooms conveniently located throughout the gardens for visitors to use.",
    },
    {
      question: "Can I bring professional photography equipment?",
      answer:
        "Professional photography and filming require prior permission. Please contact our administration for more information.",
    },
    {
      question: "Is there parking available?",
      answer:
        "Yes, we have ample parking space available for visitors. Please follow the signage to locate the designated parking areas.",
    },
    {
      question: "Are there wheelchair-accessible paths in the gardens?",
      answer:
        "Yes, we have wheelchair-accessible paths to ensure everyone can enjoy the gardens. We also offer wheelchair rentals on-site.",
    },
    // Add more FAQ items
    // ...
  ];

  return (
    <div className="container mx-auto py-8 relative top-[80px]">
      <h1 className="text-3xl font-semibold mb-6">
        Frequently Asked Questions
      </h1>
      <div className="grid gap-6">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
