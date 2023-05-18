import React from "react";

const DonationPage = () => {
  return (
    <div className="bg-white py-10 relative top-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Support Our Botanical Garden
        </h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Why Your Donation Matters
          </h2>
          <p className="text-gray-600">
            Your donation plays a vital role in our conservation and improvement
            projects. It helps us preserve and protect our diverse plant
            collections, maintain our botanical garden, and support ongoing
            research and education programs. By donating, you contribute
            directly to the conservation of biodiversity and the promotion of
            sustainable practices.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Other Ways to Support
          </h2>
          <p className="text-gray-600">
            If you&apos;re unable to make a monetary donation, there are other
            meaningful ways to support our botanical garden:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Volunteer your time and skills</li>
            <li>Participate in our community events and workshops</li>
            <li>Spread the word about our garden and conservation efforts</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Become a Member
          </h2>
          <p className="text-gray-600">
            Join our community of dedicated members and enjoy exclusive benefits
            while supporting our botanical garden. Annual membership costs:
          </p>
          <p className="text-gray-600 mb-4">Individual: $50</p>
          <p className="text-gray-600 mb-4">Family: $100</p>
          <p className="text-gray-600">Membership benefits include:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Free admission to the garden</li>
            <li>Discounts on workshops and events</li>
            <li>Access to members-only areas and special tours</li>
          </ul>
        </div>
        <p className="text-gray-600">
          We greatly appreciate your support and partnership in our mission to
          conserve and promote the beauty and diversity of the botanical world.
          Together, we can make a positive impact on our environment and future
          generations.
        </p>
      </div>
    </div>
  );
};

export default DonationPage;
