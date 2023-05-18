import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen relative top-20">
      <div className="pt-10 container mx-auto text-3xl font-bold"></div>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Public Group Tours</h1>
        <p className="text-lg mb-8">
          We are delighted to offer public tours for our botanical garden,
          providing visitors with an immersive experience in our captivating
          natural oasis. These tours depart every hour, ensuring that there are
          ample opportunities for you to explore the wonders of our botanical
          collection. Our dedicated staff is committed to accommodating groups
          of various sizes, ensuring that everyone can enjoy the tour
          comfortably.
        </p>
        <p className="text-lg mb-8">
          If your party consists of 10 or more individuals, we kindly request
          that you schedule a private tour. This allows us to provide a more
          personalized and tailored experience for your group. During the tour,
          our knowledgeable guides will lead you on a captivating journey
          through our botanical garden, sharing fascinating insights into the
          diverse plant species and the rich ecological heritage of the region.
        </p>
        <p className="text-lg mb-8">
          The tour typically lasts approximately 60 minutes, providing ample
          time to soak in the beauty and tranquility of our garden. As you
          stroll along the well-curated pathways, you will encounter a
          breathtaking array of flora from different corners of the world. From
          vibrant tropical blooms to majestic towering trees, you will witness
          the remarkable diversity of nature up close. Our guides will provide
          captivating narratives, highlighting the unique features, cultural
          significance, and ecological importance of the various plant species
          you encounter.
        </p>
        <h1 className="text-3xl font-bold mb-6">
          Schedule Private Events and Group Tours
        </h1>
        <p className="text-lg mb-8">
          Experience the beauty of our botanical garden by scheduling private
          events and group tours. Below, you&apos;ll find information about
          admission prices for these special experiences.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Private Events</h2>
            <ul className="list-disc ml-6 mb-6">
              <li>Maximum capacity: 50 guests</li>
              <li>Duration: 4 hours</li>
              <li>Exclusive access to designated event area</li>
              <li>Guided tour included</li>
              <li>Price: $500</li>
            </ul>
            <p className="text-sm text-gray-500">
              For booking inquiries, please contact our Events Coordinator at
              events@botanicalgarden.com.
            </p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Group Tours</h2>
            <ul className="list-disc ml-6 mb-6">
              <li>Minimum group size: 10 guests</li>
              <li>Duration: 2 hours</li>
              <li>Guided tour included</li>
              <li>Price per person: $20</li>
            </ul>
            <p className="text-sm text-gray-500">
              To schedule a group tour, please contact our Visitor Services team
              at tours@botanicalgarden.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
